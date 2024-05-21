import { Order } from "./order.module";
import { TOrder } from "./order.interface";
import mongoose from "mongoose";

// order create
const createOrder = async (payload: TOrder) => {
  try {
    const order = new Order(payload);
    if (mongoose.Types.ObjectId.isValid(payload.productId)) {
      const data = await Order.findByOrderProductId(payload);
      // return data;
    } else {
      return "product is not valid id";
    }

    // result send
    const result = await order.save();
    return result;
  } catch (err) {
    console.log(`Order create serviece error :>- ${err}`);
    return err;
  }
};
// get/find all oder
const getAllOrders = async () => {
  try {
    const result = await Order.find();
    return result;
  } catch (err) {
    console.log(`Get all order service error :>- ${err}`);
    return err;
  }
};
// get/find   oder by user email
const getOrdersByUserEmail = async (email: object) => {
  try {
    const result = await Order.find(email);
    // result check
    if (result.length == 0) {
      return "No orders have been placed yet with this email";
    } else {
      return result;
    }
  } catch (err) {
    console.log(`Get order by user email service error :>- ${err}`);
    return err;
  }
};

export const OrderServices = {
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
