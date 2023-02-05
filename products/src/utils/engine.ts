import express from "express";
import { dataBaseConnection } from "../database/config/connection";
import { expressApp } from "../express-app";
import { PORT } from "../config";
import { Procusts } from "../api";

const start = async () => {
  const app = express();
  dataBaseConnection();
  expressApp(app);
  Procusts(app);

  app
    .listen(PORT, () => {
      console.log(`Server Running on Port ${PORT}`);
    })
    .on("error", (error: any) => {
      console.log(error.message);
      process.exit(1);
    });
};
export default start;
