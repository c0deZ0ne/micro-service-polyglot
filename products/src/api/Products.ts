import express from "express";
import { userAuth } from "./middleware/auth";
import { create } from "./product-controller";
export const Procusts = (app: express.Application) => {
  app.post("/create", userAuth, create);
};
