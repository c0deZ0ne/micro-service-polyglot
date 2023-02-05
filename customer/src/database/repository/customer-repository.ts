import ICustomer from "../Interfaces/ICustomer";
import { CustomerModel } from "../models";

export class CustomerRepository {
  async createCustomer({ email, password, salt, phone }: ICustomer) {
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
      console.log(error);
    }
  }

  async FindCustomer({ email }: { email: string }) {
    const customer = await CustomerModel.findOne({ email });
    return customer;
  }
}
