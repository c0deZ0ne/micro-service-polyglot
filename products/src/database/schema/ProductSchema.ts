import mongoose from "mongoose";
export const ProductSchema = new mongoose.Schema(
  {
    name: String,
    banner: String,
    supplier: String,
    price: String,
    unit: Number,
    availability: Boolean,
    desc: Number,
  },
  {
    toJSON: {
      transform(doc, ret) {},
      timestamp: true,
    },
  }
);
