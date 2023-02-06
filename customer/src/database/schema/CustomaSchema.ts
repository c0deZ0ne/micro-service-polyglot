import mongoose from "mongoose";
export const CustomerSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
    salt: String,
    phone: String,
    cart: {
      product: {
        _id: { type: String, require: true },
        name:{type:String,required:true},
        price:{type:Number,require:true},
      },
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
