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

      if (!customer) {
        const salt = await genSalt();
        const userPassword = await GeneratePassword(password, salt);
        const custome = await this.repository.create({
          email,
          password: userPassword,
          salt,
          phone: phone,
          cart: [],
        });
        const signnature = await GeneratSignature({ email });
        return await formatData({ signnature, custome });
      }
      throw { error: "cutomer already exit" };
    } catch (error: any) {
      return error;
    }
  }

  async signin(userInput: custtomers_service_dto_signin) {
    const { email, password } = userInput;
    try {
      const isEixt: ICustomer | null = await this.repository.Find({ email });
      if (isEixt) {
        const valid = await validatePassword(
          password,
          isEixt.password,
          isEixt.salt
        );
        if (!valid) throw { message: "Email or Password is incorect" };
        const signnature = await GeneratSignature({ email });
        return formatData({ signnature });
      } else {
        throw { message: "Email or Password is incorect" };
      }
    } catch (error) {
      return error;
    }
  }
  async signout() {}
}
