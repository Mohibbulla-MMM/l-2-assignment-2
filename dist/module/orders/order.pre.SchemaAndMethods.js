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
exports.orderSchema = void 0;
const mongoose_1 = require("mongoose");
const product_module_1 = require("../products/product.module");
const orderSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, "email field is required, and value string type"],
        trim: true,
        maxlength: [100, "Value Maxlenth 100 characters "],
    },
    productId: {
        type: String,
        required: [true, "productId field is required, and value string type"],
        trim: true,
        maxlength: [100, "Value Maxlenth 100 characters "],
    },
    price: {
        type: Number,
        required: [true, "price field is required, and value number type"],
        trim: true,
        maxlength: [10, "Value Maxlenth 10 characters "],
    },
    quantity: {
        type: Number,
        required: [true, "quantity field is required, and value number type"],
        trim: true,
        maxlength: [10, "Value Maxlenth 10 characters "],
    },
});
exports.orderSchema = orderSchema;
// order pre condition / static method
orderSchema.static("findByOrderProductId", function findByOrderProductId(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield product_module_1.Product.findById(payload.productId);
            // console.log(result)
            if (result) {
                const quantity = result.inventory.quantity;
                const inStock = result.inventory.inStock;
                const orderquantity = payload.quantity;
                // console.log(inStock);
                // stock chekc
                if (quantity >= orderquantity) {
                    // quantity check
                    // console.log(quantity);
                    if (inStock) {
                        // console.log(quantity);
                        return true;
                    }
                    else {
                        return `Insufficient quantity available in inventory. inStock false`;
                    }
                }
                else {
                    return `Insufficient quantity available in inventory. The stock number of the product is ${result.inventory.quantity}. Your product number is ${payload.quantity}.`;
                }
            }
            else {
                return `No products were found with this ID`;
            }
        }
        catch (err) {
            // console.log(err);
            return err;
        }
    });
});
orderSchema.post("save", function (doc, next) {
    return __awaiter(this, void 0, void 0, function* () {
        // console.log("order save success and post call --- ", doc);
        const id = doc.productId;
        const productData = yield product_module_1.Product.findById(id);
        if (productData) {
            const quantity = productData.inventory.quantity - doc.quantity;
            const inStock = productData.inventory.inStock;
            const stock = inStock ? (quantity == 0 ? false : true) : false;
            yield product_module_1.Product.findByIdAndUpdate(id, {
                "inventory.quantity": quantity,
                "inventory.inStock": stock,
            }, { new: true });
        }
        next();
    });
});
