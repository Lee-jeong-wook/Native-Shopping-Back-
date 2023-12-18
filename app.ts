import express, { Application } from "express";
import { json, urlencoded } from "body-parser";

const home = require("./src/routes/home")

const createApp = (): Application => {
  const app: Application = express();

  // 앱 세팅
  app.set('views', "./src/views");
  app.set('view engine', 'ejs');

  // 미들웨어
  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.use('/', home);

  return app;
};

export default createApp;