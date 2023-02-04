import { genSalt, hash } from "bcrypt";
export const GenerateSalt = async () => {
  return await genSalt();
};
