import { NextFunction, Request, Response } from "express";
import { CustomerServices } from "../../services/customer-service";
import { validatePassword } from "../../utils";

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const service = new CustomerServices();
    const { email, password, phone } = req.body;
    const { signnature, error, custome } = await service.signup({
      email,
      password,
      phone,
    });
    if (error) throw { code: 400, error };
    return res.status(201).json({
      code: 201,
      signnature,
      custome,
    });
  } catch (error: any) {
    console.log(error);
    return res.status(error.code).json(error);
  }
};

export const signin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const service = new CustomerServices();
    const { email, password } = req.body;
    const data = await service.signin({ email, password });
    res.status(200).json({ code: 200, data });
  } catch (error: any) {
    console.log("error", error);
    next(error);
  }
};
