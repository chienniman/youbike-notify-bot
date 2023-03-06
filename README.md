# YouBikeNotify-Bot

## 簡介
解決需要手動查詢youbike地圖的麻煩，精簡高效(134行)的linebot，採用Node.js、Express.js，部署在render雲上，使用者可定時、手動獲取特定youbike站點資訊。

## 手動回復
輸入youbike

## 自動排程(node-cron)
![query-youbike-success](https://user-images.githubusercontent.com/97031067/223133913-0824f624-969c-4118-abb6-2869bd5c575b.jpg)

![cron](https://user-images.githubusercontent.com/97031067/223153397-a53e02d2-9527-4f6f-9635-21a90334ff9d.jpg)

[node-cron](https://www.npmjs.com/package/node-cron)

## Youbike API處理
![ubike](https://user-images.githubusercontent.com/97031067/223155913-93ff832c-fc32-45c5-aba6-41674f4485e1.jpg)


## 開發
1.clone到本地，npm install<br>
2.新增.env<br>
3.獲取、配置以下環境(金鑰)變數<br>
### Line Developers
Messaging API=>channelAccessToken<br>
Basic settings=>channelSecret<br>
Basic settings=>userId<br>
## Youbike API 可查詢id，index.js內客製化格式 
startingStationId,targetStationId,secondStationId
apiTriggerTime:process.env.API_TRIGGER_TIME,
timezone:process.env.TIMEZONE,
