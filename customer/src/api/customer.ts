import express from "express";
import { signin, signup } from "./controller/customer-controller";
export const Customer = (app: express.Application) => {
  app.post("/signup", signup);
  app.post("/signin", signin);
};
