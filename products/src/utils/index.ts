import { genSalt, hash } from "bcrypt";
import { sign, verify } from "jsonwebtoken";
import { APP_SECRETE } from "../config";
export const GenerateSalt = async () => {
  return await genSalt();
};

export const GeneratePassword = async (password: string) => {
  const salt = await GenerateSalt();
  return {
    salt: await GenerateSalt(),
    userPassword: hash(password, salt),
  };
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

export async function ValidateSignature(req: Request | unknown | any) {
  try {
    const signature = req.get("Authorization");
    const payload = verify(signature.split(" ")[1], APP_SECRETE as string);

    req.user = payload;

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
