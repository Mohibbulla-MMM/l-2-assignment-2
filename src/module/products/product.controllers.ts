import { Request, Response } from "express";
import { ProductService } from "./product.services";
import { ProductZodValidation } from "./product.zod.validation";

// create product / insert product
const createProduct = async (req: Request, res: Response) => {
  try {
    // product data get form request body
    const productData = req.body;
    const { error, data } = ProductZodValidation.safeParse(productData);
    // product send to services
    if (error) {
      throw new Error(`Zod validation error:> ${error.message}`);
      // return error
    }
    const result = await ProductService.createProduct(data);
    //  response send
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (err: any) {
    console.log(`Create product controllers error :>- ${err}`);
    //  response send
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong!",
      error: err,
    });
  }
};

// get/fetched all  product
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getAllProduct();
    //  response send
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    console.log(`Get/fetched product controllers error :>- ${err}`);
    //  response send
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong!",
      error: err,
    });
  }
};

//get/fing all product
const findProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.findProductById(productId);
    //  response send
    res.status(200).json({
      success: true,
      message: "Single Products fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    console.log(`Get/fetched product by id controllers error :>- ${err}`);
    //  response send
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong!",
      error: err,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProduct,
  findProductById,
};
