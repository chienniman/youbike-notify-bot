# youbike-notify-bot
![ubike-robot-result](https://github.com/chienniman/YouBikeNotify-Bot/assets/97031067/babeef57-734b-46d1-9ceb-4624aa1c6d32)

## Introduction
The Node.js-based LINE bot

* Quick station-specific queries
* Customizable formatting
* Cloud deployment with render
* Automatic scheduling

## Documentation

### Youbike API
![query-ubike](https://user-images.githubusercontent.com/97031067/223732784-acffb1ac-9fe5-4e51-b68e-dd305360864b.jpg)

### Cron
![cron](https://user-images.githubusercontent.com/97031067/223153397-a53e02d2-9527-4f6f-9635-21a90334ff9d.jpg)
[node-cron](https://www.npmjs.com/package/node-cron)

## Requirements
```Node.js 14 or higher```

## Installation

* ```git clone https://github.com/chienniman/YouBikeNotify-Bot.git```
* ```npm install```<br>
* ```cp .env.example .env``` <br>

## Deployment(render)
>[nodejs-on-rende](https://github.com/haojiwu/line-bot-nodejs-on-render)<br>

1.Configure [render.yaml](https://github.com/chienniman/YouBikeNotify-Bot/blob/main/render.yaml)<br>
2.Add a Web service<br>
3.Create a public Git repository<br>
4.Set up name, environment, and region<br>

![deploy-success](https://user-images.githubusercontent.com/97031067/223740969-e16e8586-e53b-491b-9caf-0eee42233eaa.jpg)

## Limitations
* Free instance types are not available for Private Services, Background Workers, or Cron Jobs.
