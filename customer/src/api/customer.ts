import { CustomerServices } from "../services/customer-service";
import express, { NextFunction } from "express";
export const Customer = (app: express.Application) => {
  const service = new CustomerServices();
  app.post("/customer/signup", async (req, res, next: NextFunction) => {
    try {
      const { email, password, phone } = req.body;
      const data = await service.signup({ email, password, phone });
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
