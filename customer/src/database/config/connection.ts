import mongoose from "mongoose";
import { DB_URL } from "../../config";
export const dataBaseConnection = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(DB_URL, () => {
      console.log("connected to Customer Services");
    });
  } catch (error: any) {
    console.log(error.message);
  }
};
