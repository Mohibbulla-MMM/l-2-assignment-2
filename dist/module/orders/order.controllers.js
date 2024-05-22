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
exports.OrderControllers = void 0;
const order_services_1 = require("./order.services");
const order_zod_validation_1 = require("./order.zod.validation");
const order_zod_email_validation_1 = require("./order.zod.email.validation");
// order create
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = req.body;
        const { error, data } = yield order_zod_validation_1.orderZodValidation.safeParse(orderData);
        // console.log(error);
        if (error) {
            throw new Error(error.message);
        }
        // data send order services>fn
        const result = yield order_services_1.OrderServices.createOrder(data);
        // response send
        res.status(200).json({
            success: true,
            message: "Order created successfully!",
            data: result,
        });
    }
    catch (err) {
        console.log(`create order controllers error :>- ${err}`);
        // error send
        res.status(500).json({
            success: false,
            message: err.message || "Something went wrong!",
            data: err,
        });
    }
});
//
const getAllOrdersOrUserEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // get orders by user email  -------------------------------------------
        // data send order services>fn
        const email = req.query;
        // console.log(email, "-----------------------------------");
        if ("email" in email) {
            // console.log("message 1");
            const { error, data } = order_zod_email_validation_1.emailZodValidation.safeParse(email);
            if (error) {
                throw new Error(error.message);
            }
            const result = yield order_services_1.OrderServices.getOrdersByUserEmail(data);
            res.status(200).json({
                success: true,
                message: "Orders fetched successfully for user email!",
                data: result,
            });
        }
        else {
            // console.log("message 2");
            // get all orders -------------------------------------------
            // data send order services>fn
            const result = yield order_services_1.OrderServices.getAllOrders();
            // response send
            res.status(200).json({
                success: true,
                message: "Orders fetched successfully!",
                data: result,
            });
        }
    }
    catch (err) {
        console.log(`order get by user email controllers error :>- ${err}`);
        // error send
        res.status(500).json({
            success: false,
            message: err.message || "Something went wrong!",
            data: err,
        });
    }
});
exports.OrderControllers = {
    createOrder,
    getAllOrdersOrUserEmail,
};
