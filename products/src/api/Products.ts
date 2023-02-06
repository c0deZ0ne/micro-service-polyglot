import { ProductServices } from "../services/products-service";
import express, { NextFunction } from "express";
import {userAuth} from "./middleware/auth"
export const Procusts = (app: express.Application) => {
  const service = new ProductServices();
  app.post("/product/create", async (req, res, next: NextFunction) => {
    try {
      const { name, banner, supplier, price, unit, availability, desc } =
        req.body;
      const data = await service.create({
        name,
        banner,
        supplier,
        price,
        unit,
        availability,
        desc,
      });
      console.log(data);
      return res.status(200).json({
        code: 200,
        data,
      });
    } catch (error: any) {
      console.log(error);
      next(error.message);
    }
  });
};
