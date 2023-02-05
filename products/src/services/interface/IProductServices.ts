import { products_service_dto } from "./procusts-service-dto";

export interface IProductServices {
  create: (data: products_service_dto) => Promise<any>;
}
