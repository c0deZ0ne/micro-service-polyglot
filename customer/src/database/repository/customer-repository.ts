import ICustomer from "../Interfaces/ICustomer";
import { CustomerModel } from "../models";

export class CustomerRepository {
  async create({ email, password, salt, phone }: ICustomer) {
    try {
      const customer = new CustomerModel({
        email,
        password,
        salt,
        phone,
      });
      const result = await customer.save();
      return result;
    } catch (error) {
      return error;
    }
  }

  async Find({ email }: { email: string }) {
    const customer = await CustomerModel.findOne({ email });
    return customer;
  }
}
