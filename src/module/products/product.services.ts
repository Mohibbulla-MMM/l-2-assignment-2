import { IProduct } from "./product.interface";
import { Product } from "./product.module";

// product create/insert in to db
const createProduct = async (payload: IProduct) => {
  try {
    const result = await Product.create(payload);
    return result;
  } catch (err: any) {
    console.log(`Create Product service error :>- ${err}`);
    return `${err}`;
  }
};

export const ProductService = {
  createProduct,
};
