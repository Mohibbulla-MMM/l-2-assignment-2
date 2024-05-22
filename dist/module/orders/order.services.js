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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderServices = void 0;
const order_module_1 = require("./order.module");
const mongoose_1 = __importDefault(require("mongoose"));
// order create
const createOrder = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = new order_module_1.Order(payload);
        if (mongoose_1.default.Types.ObjectId.isValid(payload.productId)) {
            const data = yield order_module_1.Order.findByOrderProductId(payload);
            console.log(data);
            // if()
            if (data === true) {
                const result = yield order.save();
                return result;
            }
            else {
                return data;
            }
        }
        else {
            return "product id is not valid";
        }
        // result send
    }
    catch (err) {
        console.log(`Order create serviece error :>- ${err}`);
        return err;
    }
});
// get/find all oder
const getAllOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_module_1.Order.find();
        return result;
    }
    catch (err) {
        console.log(`Get all order service error :>- ${err}`);
        return err;
    }
});
// get/find   oder by user email
const getOrdersByUserEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_module_1.Order.find(email);
        // result check
        if (result.length == 0) {
            return "No orders have been placed yet with this email";
        }
        else {
            return result;
        }
    }
    catch (err) {
        console.log(`Get order by user email service error :>- ${err}`);
        return err;
    }
});
exports.OrderServices = {
    createOrder,
    getAllOrders,
    getOrdersByUserEmail,
};
// if (mongoose.Types.ObjectId.isValid(payload.productId)) {
//   const data = await Order.findIdByProduct(payload.productId);
//   // console.log({ data });
//   if (data) {
//     // const productInventoryNo = data.inventory.quantity
//     // const productInventoryIsStock = data.inventory.quantity
//     // console.log("1", data);
//   } else {
//     // console.log("2", data);
//     return "There are no products with this ID";
//   }
// } else {
//   return "product id not valid";
// }
