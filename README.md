# YouBikeNotify-Bot
為快速查詢youbike，以Node.js+Express.js開發的聊天機器人，邏輯都在[index.js](https://github.com/chienniman/YouBikeNotify-Bot/blob/main/index.js)

## 特點
1.快速查詢youbike特定站點<br>
2.格式客製<br>
3.精簡高效(134行)<br>
4.部署render雲<br>
5.支持自動排程<br>
![ubike-robot-result](https://user-images.githubusercontent.com/97031067/223730201-619a5cc6-0bea-49e2-a96e-9efae2257733.png)

## Youbike API
![query-ubike](https://user-images.githubusercontent.com/97031067/223732784-acffb1ac-9fe5-4e51-b68e-dd305360864b.jpg)

## Cron
![cron](https://user-images.githubusercontent.com/97031067/223153397-a53e02d2-9527-4f6f-9635-21a90334ff9d.jpg)
[node-cron](https://www.npmjs.com/package/node-cron)


## 本地
1.```git clone https://github.com/chienniman/YouBikeNotify-Bot.git```<br>
2.```npm install```<br>
3.```mkdir .env``` <br>
4.Configuring Environment Variables & Secrets<br>
![config](https://user-images.githubusercontent.com/97031067/223736296-33f7a100-4ae0-499a-a2fb-09be90f18bba.jpg)

## Deployment(render)
>官方文件[nodejs-on-rende](https://github.com/haojiwu/line-bot-nodejs-on-render)<br>

1.設定[render.yaml](https://github.com/chienniman/YouBikeNotify-Bot/blob/main/render.yaml)<br>
2.新增Web Service<br>
3.Public Git repository<br>
4.設定姓名、環境、區域<br>
5.編譯部屬成功<br>
![deploy-success](https://user-images.githubusercontent.com/97031067/223740969-e16e8586-e53b-491b-9caf-0eee42233eaa.jpg)

## 免費使用限制
>Free instance types are not available for Private Services, Background Workers, or Cron Jobs.<br>
>Web Services on the free instance type are automatically spun down after 15 minutes of inactivity. When a new request for a free service comes in, Render spins it up again so it can process the request.
This can cause a response delay of up to 30 seconds for the first request that comes in after a period of inactivity.<br>

1.本地伺服器可自動排程，但render雲的免費計畫不支援<br>
2.超過15分鐘沒有活動，伺服器會自動停止，直到新的請求，因此會造成延遲響應。<br>
3.總結以上2點，部署render版本只能算是半自動，15分鐘前有請求，可觸發排程<br>

## 心得總結
youbike地圖要逐一輸入搜尋，記錄資訊就相當麻煩，還要考慮資訊過期，總不能一直盯著地圖重整吧，linebot點擊一次就能解決(~~不過得花幾天研究LINE SDK~~)，朋友試用後的反饋也是相當輕巧方便，得感謝heroku之後還有如此便利的、不用綁卡的雲，缺點也是相當明顯，不穩定的響應時間(1秒~6分鐘)，注定讓免費計畫只能作為實驗用途，應該沒有哪個使用者能接受超過5秒的等待，會不會升級成付費版本目前還在觀察中，考量到簡潔好用的整合介面，內建支持Github，可能性應該偏高。

