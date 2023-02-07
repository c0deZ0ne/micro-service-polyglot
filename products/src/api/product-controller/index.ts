import { NextFunction, Request, Response } from "express";
import { ProductServices } from "../../services/products-service";

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const service = new ProductServices();
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
};
