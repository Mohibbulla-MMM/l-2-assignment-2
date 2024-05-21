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

//get/fing all product
const getAllProduct = async () => {
  try {
    const result = await Product.find();
    return result;
  } catch (err) {
    console.log(`Get all Product service error :>- ${err}`);
    return `${err}`;
  }
};
//get/fing all product
const findProductById = async (id: string) => {
  try {
    console.log({id})
    const result = await Product.findById(id);
    return result;
  } catch (err) {
    console.log(`find Product by id service error :>- ${err}`);
    return `${err}`;
  }
};

export const ProductService = {
  createProduct,
  getAllProduct,
  findProductById,
};
