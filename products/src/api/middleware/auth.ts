import { ValidateSignature } from "../../utils";

import { NextFunction, Request, Response } from "express";
export const userAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const isAuthorised = await ValidateSignature(req);
  if (isAuthorised) return next();
  return res.status(401).json({ code: 401, message: "unAuthorised access" });
};
