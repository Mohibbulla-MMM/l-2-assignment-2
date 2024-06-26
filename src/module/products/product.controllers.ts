import { Request, Response } from "express";
import { ProductService } from "./product.services";
import { ProductZodValidation } from "./product.zod.validation";
import { ProductUpdateZodValidation } from "./productUpdate.Zod.validation";

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
const getAllProductOrQueryAnyString = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const result = await ProductService.getAllProductOrQueryAnyString(
      searchTerm as string
    );
    // search term check
    if (searchTerm) {
      // result check
      if (result.length === 0) {
        //  response send
        res.status(200).json({
          success: true,
          message: `Search term '${searchTerm}' matching product not found `,
          data: result,
        });
      } else {
        //  response send
        res.status(200).json({
          success: true,
          message: `Products matching search term '${searchTerm}' fetched successfully!`,
          data: result,
        });
      }
    } else {
      //  response send
      res.status(200).json({
        success: true,
        message: "Products fetched successfully!",
        data: result,
      });
    }
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

//get/fing by id the product
const findProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.findProductById(productId);
    //  response send
    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
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

//delete by id the product
const deleteProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    console.log(productId);
    const result = await ProductService.deleteProductById(productId);
    //  response send
    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: result,
    });
  } catch (err: any) {
    console.log(`Deleted product by id controllers error :>- ${err}`);
    //  response send
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong!",
      error: err,
    });
  }
};

//put by id the product
const putProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const productData = req.body;
    // console.log(productId);
    const { error, data } = ProductUpdateZodValidation.safeParse(productData);
    if (error) {
      throw new Error(error.message);
    }
    const result = await ProductService.putProductById(productId, data);
    //  response send
    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (err: any) {
    console.log(`Update product by id controllers error :>- ${err}`);
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
  getAllProductOrQueryAnyString,
  findProductById,
  deleteProductById,
  putProductById,
};
