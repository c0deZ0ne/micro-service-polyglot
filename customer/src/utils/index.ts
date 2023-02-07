import { genSalt, hash } from "bcrypt";
import { sign, verify } from "jsonwebtoken";
import { APP_SECRETE } from "../config";

export const GenerateSalt = async () => {
  return await genSalt();
};

export const GeneratePassword = async (password: string, salt: string) => {
  const hashpassword = await hash(password, salt);
  return hashpassword as string;
};

export const GeneratSignature = async (payload: string | object | Buffer) => {
  return sign(payload, APP_SECRETE as string, { expiresIn: "1d" });
};

export const formatData = async (data: any) => {
  if (data) {
    return data;
  }
  throw new Error("Data doesn't exist ");
};

export async function ValidateSignature(req: Request | any) {
  try {
    const signature = req.get("Authorization");
    const payload = verify(signature.split(" ")[1], APP_SECRETE as string);
    req.user = payload;
    return true;
  } catch (err) {
    return false;
  }
}

export const validatePassword = async (
  EnterdPassword: string,
  savedPassword: string,
  salt: string
) => {
  const genpassword = await GeneratePassword(EnterdPassword, salt);
  return savedPassword === genpassword;
};
