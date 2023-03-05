const express = require("express");
const axios = require("axios");
const line = require("@line/bot-sdk");
const cron = require("node-cron");

require("dotenv").config();

const config = {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.CHANNEL_SECRET,
    userId: process.env.USER_ID,
    startingStationId: process.env.STARTING_STATION_ID,
    targetStationId: process.env.TARGET_STATION_ID,
    secondStationId: process.env.SECOND_STATION_ID,
    apiTriggerTime:process.env.API_TRIGGER_TIME,
    timezone:process.env.TIMEZONE,
    youbikeApi:
    "https://datacenter.taichung.gov.tw/swagger/OpenData/9af00e84-473a-4f3d-99be-b875d8e86256",
    linebotReplyTimeout: 5000,
    requestTimeout:10000
};
const client = new line.Client(config);
const apiUrl = config.youbikeApi;
const app = express();

const convertApiObjectToText = (youbike) => {
    return `
    更新時間:${youbike.updatedAt}
    起點站：${youbike.startingStation.sna}
    可借車輛：${youbike.startingStation.sbi}
    可還車輛：${youbike.startingStation.bemp}

    終點站：${youbike.targetStation.sna}
    可借車輛：${youbike.targetStation.sbi}
    可還車輛：${youbike.targetStation.bemp}

    備用終點站：${youbike.secondStation.sna}
    可借車輛：${youbike.secondStation.sbi}
    可還車輛：${youbike.secondStation.bemp}
`;
};

const queryYouBikeApi = async () => {
    const request = axios.get(apiUrl, { timeout: config.linebotReplyTimeout });
    const timeout = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("Request timed out")), config.requestTimeout);
    });
    const response = await Promise.race([request, timeout]);
    const collection = response.data.retVal;
    const updatedAt = response.data.updated_at;
    const startingStation = collection.find((station) => {
        return station.sno === config.startingStationId;
    });
    const targetStation = collection.find((station) => {
        return station.sno === config.targetStationId;
    });
    const secondStation = collection.find((station) => {
        return station.sno === config.secondStationId;
    });
    return {
        updatedAt: updatedAt,
        startingStation: startingStation,
        targetStation: targetStation,
        secondStation: secondStation,
    };
};

const handleEvent = async (event) => {
    if (event.type !== "message" || event.message.type !== "text") {
        return Promise.resolve(null);
    }

    const queryText = event.message.text;
    if (queryText !== "youbike") {
        return client.replyMessage(event.replyToken, {
            type: "text",
            text: "請輸入youbike查詢。",
        });
    }

    try {
        console.log('sent');
        const result = await queryYouBikeApi();
        const replyText = convertApiObjectToText(result);
        return client.replyMessage(event.replyToken, {
            type: "text",
            text: replyText,
        });
    } catch (error) {
        console.error(error.message);
        return client.replyMessage(event.replyToken, {
            type: "text",
            text: `${error.message}，請稍後再試`,
        });
    }
};

app.post("/webhook", line.middleware(config), (req, res) => {
    Promise.all(req.body.events.map(handleEvent))
        .then((result) => res.json(result))
        .catch((err) => {
            console.error(err);
            res.status(500).end();
        });
});

cron.schedule(
    config.apiTriggerTime,
    async () => {
      try {
        const result = await queryYouBikeApi();
        const replyText = convertApiObjectToText(result);
        const message = {
          type: "text",
          text: replyText,
        };
        client
          .pushMessage(config.userId,message)
          .then(() => console.log("Message sent!"))
          .catch((err) => console.error(err));
      } catch (e) {
        console.error(e);
      }
    },
    {
      scheduled: true,
      timezone: config.timezone,
    }
  );

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
