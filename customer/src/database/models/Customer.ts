import mongoose, { Schema } from "mongoose";
import ICustomer from "../Interfaces/ICustomer";
import { CustomerSchema } from "../schema/CustomaSchema";
export const CustomerModel = mongoose.model<ICustomer>(
  "Customer",
  CustomerSchema
);
