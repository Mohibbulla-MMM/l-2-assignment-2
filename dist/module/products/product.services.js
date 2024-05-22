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
exports.ProductService = void 0;
const product_module_1 = require("./product.module");
// product create/insert in to db
const createProduct = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_module_1.Product.create(payload);
        return result;
    }
    catch (err) {
        console.log(`Create Product service error :>- ${err}`);
        return `${err}`;
    }
});
//get/fing all product
const getAllProductOrQueryAnyString = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (searchTerm) {
            const result = yield product_module_1.Product.find({
                $or: [
                    { name: new RegExp(searchTerm, "i") },
                    { tags: new RegExp(searchTerm, "i") },
                    { category: new RegExp(searchTerm, "i") },
                    { description: new RegExp(searchTerm, "i") },
                ],
            });
            return result;
        }
        else {
            const result = yield product_module_1.Product.find();
            return result;
        }
    }
    catch (err) {
        console.log(`Get all Product service error :>- ${err}`);
        return `${err}`;
    }
});
//get/fing by id the product
const findProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // console.log({id})
        const result = yield product_module_1.Product.findById(id);
        return result;
    }
    catch (err) {
        console.log(`find Product by id service error :>- ${err}`);
        return `${err}`;
    }
});
//delete by id the product
const deleteProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log({ id });
        const result = yield product_module_1.Product.deleteOne({ _id: id });
        console.log({ result });
        return result;
    }
    catch (err) {
        console.log(`delete Product by id service error :>- ${err}`);
        return `${err}`;
    }
});
// update/put by id product
const putProductById = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //  update data send to db
        const result = yield product_module_1.Product.findOneAndUpdate({ _id: id }, updateData, {
            new: true,
        });
        // console.log({ result });
        return result;
    }
    catch (err) {
        console.log(`Update/put Product by id service error :>- ${err}`);
        return `${err}`;
    }
});
exports.ProductService = {
    createProduct,
    getAllProductOrQueryAnyString,
    findProductById,
    deleteProductById,
    putProductById,
};
