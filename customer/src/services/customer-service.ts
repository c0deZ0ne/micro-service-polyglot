import { genSalt } from "bcrypt";
import { CustomerRepository } from "../database";
import {
  GeneratSignature,
  GeneratePassword,
  formatData,
  validatePassword,
} from "../utils";
import { IcustomerService } from "./interface/ICustomerService";
import {
  custtomers_service_dto,
  custtomers_service_dto_signin,
} from "./interface/custtomers-service-dto";
import ICustomer from "../database/Interfaces/ICustomer";

export class CustomerServices implements IcustomerService {
  repository: CustomerRepository;
  constructor() {
    this.repository = new CustomerRepository();
  }
  async signup(userInput: custtomers_service_dto) {
    try {
      const { password, email, phone } = userInput;
      const customer = await this.repository.Find({ email });
      console.log("fund", customer);
      if (!customer) {
        const salt = await genSalt();
        const { userPassword } = await GeneratePassword(password, salt);
        const newCustome = await this.repository.create({
          email,
          password: await userPassword,
          salt,
          phone: phone,
        });
        const token = await GeneratSignature({ email });
        return await formatData({ token, newCustome });
      }
      return new Error("cutomer already exit");
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async signin(userInput: custtomers_service_dto_signin) {
    const { email, password } = userInput;
    try {
      const isEist: ICustomer | null = await this.repository.Find({ email });
      if (isEist) {
        const valid = await validatePassword(
          password,
          isEist.password,
          isEist.salt
        );
        if (!valid) return new Error("Email or Password is incorrect");
        const signnature = await GeneratSignature({ email });
        return formatData({ signnature });
      } else {
        throw new Error("Email or Password is incorect");
      }
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
  async signout() {}
}
