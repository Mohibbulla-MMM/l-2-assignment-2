import { TProduct } from "./product.interface";
import { Product } from "./product.module";

// product create/insert in to db
const createProduct = async (payload: TProduct) => {
  try {
    const result = await Product.create(payload);
    return result;
  } catch (err) {
    console.log(`Create Product service error :>- ${err}`);
    return err;
  }
};

export const ProductService = {
  createProduct,
};
