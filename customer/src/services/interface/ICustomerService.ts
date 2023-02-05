import ICustomer from "../../database/Interfaces/ICustomer";
import { custtomers_service_dto } from "./custtomers-service-dto";

export interface IcustomerService {
  signup: (data: custtomers_service_dto) => Promise<any>;
  signin: (data: custtomers_service_dto) => Promise<void>;
  signout: () => Promise<void>;
}
