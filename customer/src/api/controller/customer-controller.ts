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

    console.log(data);
    res.json(data);
  } catch (error: any) {
    console.log("error", error);
    res.json({ code: 400, message: error.message });
    // console.log(error.message);
  }

  // res.json({ code: 200, message: "cool" });
};
