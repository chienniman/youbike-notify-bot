# YouBikeNotify-Bot
為快速查詢youbike，以Node.js+Express.js開發的聊天機器人

## 特點
1.快速查詢youbike特定站點<br>
2.格式客製<br>
3.精簡高效(134行)<br>
4.部署render雲<br>
5.支持自動排程<br>
![ubike-robot-result](https://user-images.githubusercontent.com/97031067/223730201-619a5cc6-0bea-49e2-a96e-9efae2257733.png)

## Youbike API
![query-ubike](https://user-images.githubusercontent.com/97031067/223732784-acffb1ac-9fe5-4e51-b68e-dd305360864b.jpg)

## 自動排程(node-cron)
![cron](https://user-images.githubusercontent.com/97031067/223153397-a53e02d2-9527-4f6f-9635-21a90334ff9d.jpg)
[node-cron](https://www.npmjs.com/package/node-cron)


## 本地開發
1.```git clone https://github.com/chienniman/YouBikeNotify-Bot.git```<br>
2.```npm install```<br>
3.Adding .env <br>
4.Configuring Environment (Key) Variables<br>
```
Messaging API=>channelAccessToken
Basic settings=>channelSecret
Basic settings=>userId
```
## Youbike API 可查詢id，index.js內客製化格式 
startingStationId,targetStationId,secondStationId
apiTriggerTime:process.env.API_TRIGGER_TIME,
timezone:process.env.TIMEZONE,
