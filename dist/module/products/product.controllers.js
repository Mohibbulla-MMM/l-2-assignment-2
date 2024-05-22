"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductControllers = void 0;
const product_services_1 = require("./product.services");
const product_zod_validation_1 = require("./product.zod.validation");
const productUpdate_Zod_validation_1 = require("./productUpdate.Zod.validation");
// create product / insert product
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // product data get form request body
        const productData = req.body;
        const { error, data } = product_zod_validation_1.ProductZodValidation.safeParse(productData);
        // product send to services
        if (error) {
            throw new Error(`Zod validation error:> ${error.message}`);
            // return error
        }
        const result = yield product_services_1.ProductService.createProduct(data);
        //  response send
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    }
    catch (err) {
        console.log(`Create product controllers error :>- ${err}`);
        //  response send
        res.status(500).json({
            success: false,
            message: err.message || "Something went wrong!",
            error: err,
        });
    }
});
// get/fetched all  product
const getAllProductOrQueryAnyString = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        const result = yield product_services_1.ProductService.getAllProductOrQueryAnyString(searchTerm);
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
            }
            else {
                //  response send
                res.status(200).json({
                    success: true,
                    message: `Products matching search term '${searchTerm}' fetched successfully!`,
                    data: result,
                });
            }
        }
        else {
            //  response send
            res.status(200).json({
                success: true,
                message: "Products fetched successfully!",
                data: result,
            });
        }
    }
    catch (err) {
        console.log(`Get/fetched product controllers error :>- ${err}`);
        //  response send
        res.status(500).json({
            success: false,
            message: err.message || "Something went wrong!",
            error: err,
        });
    }
});
//get/fing by id the product
const findProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_services_1.ProductService.findProductById(productId);
        //  response send
        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        console.log(`Get/fetched product by id controllers error :>- ${err}`);
        //  response send
        res.status(500).json({
            success: false,
            message: err.message || "Something went wrong!",
            error: err,
        });
    }
});
//delete by id the product
const deleteProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        console.log(productId);
        const result = yield product_services_1.ProductService.deleteProductById(productId);
        //  response send
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: result,
        });
    }
    catch (err) {
        console.log(`Deleted product by id controllers error :>- ${err}`);
        //  response send
        res.status(500).json({
            success: false,
            message: err.message || "Something went wrong!",
            error: err,
        });
    }
});
//put by id the product
const putProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const productData = req.body;
        // console.log(productId);
        const { error, data } = productUpdate_Zod_validation_1.ProductUpdateZodValidation.safeParse(productData);
        if (error) {
            throw new Error(error.message);
        }
        const result = yield product_services_1.ProductService.putProductById(productId, data);
        //  response send
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result,
        });
    }
    catch (err) {
        console.log(`Update product by id controllers error :>- ${err}`);
        //  response send
        res.status(500).json({
            success: false,
            message: err.message || "Something went wrong!",
            error: err,
        });
    }
});
exports.ProductControllers = {
    createProduct,
    getAllProductOrQueryAnyString,
    findProductById,
    deleteProductById,
    putProductById,
};
