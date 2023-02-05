import { IProductServices } from "../../services/interface";
import IProduct from "../Interfaces/IProducts";
import { ProductsModel } from "../models";

export class ProductRepository implements IProductServices {
  async create({
    name,
    banner,
    supplier,
    price,
    unit,
    availability,
    desc,
  }: IProduct) {
    try {
      const product = new ProductsModel({
        name,
        banner,
        supplier,
        price,
        unit,
        availability,
        desc,
      });
      const result = await product.save();
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async FindProduct({ name }: { name: string }) {
    const product = await ProductsModel.findOne({ name });
    return product;
  }
}
