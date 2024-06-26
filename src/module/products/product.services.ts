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
const getAllProductOrQueryAnyString = async (searchTerm: string) => {
  try {
    if (searchTerm) {
      const result = await Product.find({
        $or: [
          { name: new RegExp(searchTerm, "i") },
          { tags: new RegExp(searchTerm, "i") },
          { category: new RegExp(searchTerm, "i") },
          { description: new RegExp(searchTerm, "i") },
        ],
      });
      return result;
    } else {
      const result = await Product.find();
      return result;
    }
  } catch (err) {
    console.log(`Get all Product service error :>- ${err}`);
    return `${err}`;
  }
};

//get/fing by id the product
const findProductById = async (id: string) => {
  try {
    // console.log({id})
    const result = await Product.findById(id);
    return result;
  } catch (err) {
    console.log(`find Product by id service error :>- ${err}`);
    return `${err}`;
  }
};

//delete by id the product
const deleteProductById = async (id: string | null) => {
  try {
    console.log({ id });
    const result = await Product.deleteOne({ _id: id });
    console.log({ result });
    return result;
  } catch (err) {
    console.log(`delete Product by id service error :>- ${err}`);
    return `${err}`;
  }
};

// update/put by id product
const putProductById = async (id: string, updateData: any) => {
  try {
    //  update data send to db
    const result = await Product.findOneAndUpdate({ _id: id }, updateData, {
      new: true,
    });
    // console.log({ result });
    return result;
  } catch (err) {
    console.log(`Update/put Product by id service error :>- ${err}`);
    return `${err}`;
  }
};

export const ProductService = {
  createProduct,
  getAllProductOrQueryAnyString,
  findProductById,
  deleteProductById,
  putProductById,
};

 