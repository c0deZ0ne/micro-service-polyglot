import mongoose from "mongoose";
import { ProductSchema } from "../schema/ProductSchema";
import IProducts from "../Interfaces/IProducts";
export const ProductsModel = mongoose.model<IProducts>(
  "Products",
  ProductSchema
);
