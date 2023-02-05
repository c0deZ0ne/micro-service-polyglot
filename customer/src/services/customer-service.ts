import { CustomerRepository } from "../database";
import { GeneratSignature, GeneratePassword, formatData } from "../utils";
import { IcustomerService } from "./interface/ICustomerService";
import { custtomers_service_dto } from "./interface/custtomers-service-dto";

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
        const { userPassword, salt } = await GeneratePassword(password);
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

  async signin(userInput: custtomers_service_dto) {}
  async signout() {}
}
