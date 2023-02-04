import { custtomers_service_dto } from "./custtomers-service-dto";

export interface IcustomerService {
  signup: (data: custtomers_service_dto) => Promise<void>;
  signin: (data: custtomers_service_dto) => Promise<void>;
  signout: () => Promise<void>;
}
