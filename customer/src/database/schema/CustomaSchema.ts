import mongoose from "mongoose";
export const CustomerSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
    salt: String,
    phone: String,
    cart: {
      type: Array<Object>,
      default: [],
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.password, delete ret.salt; //allow to hide this values from rsponse
      },
      timestamp: true,
    },
  }
);
