// import { ValidateSignature } from "../../utils";

import express, { NextFunction, Request, Response } from "express";
export const userAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const isAuthorised = await ValidateSignature(req);
  if (isAuthorised) return next();
  return res.status(400).json({ code: 400, message: "unAuthorised" });
};
