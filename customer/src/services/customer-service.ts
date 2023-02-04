import { IcustomerService } from "./interface/ICustomerService";
import { custtomers_service_dto } from "./interface/custtomers-service-dto";

export class CustomerServices implements IcustomerService {
  async signup(userInput: custtomers_service_dto) {}
  async signin(userInput: custtomers_service_dto) {}
  async signout() {}
}
