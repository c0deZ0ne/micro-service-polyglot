import { ProductRepository } from "../database";
import { formatData } from "../utils";
import { products_service_dto } from "./interface";
import { IProductServices } from "./interface/IProductServices";

export class ProductServices implements IProductServices {
  repository: ProductRepository;
  constructor() {
    this.repository = new ProductRepository();
  }
  async create(userInput: products_service_dto) {
    try {
      const { name, banner, supplier, price, unit, availability, desc } =
        userInput;
      const newProduct = await this.repository.create({
        name,
        banner,
        supplier,
        price,
        unit,
        availability,
        desc,
      });
      return await formatData({ newProduct });
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}
