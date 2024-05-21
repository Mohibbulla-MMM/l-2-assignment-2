import { TOrder } from "./order.interface";
import { Order } from "./order.module";

// order create
const createOrder = async (payload: TOrder) => {
  try {
    const result = await Order.create(payload);
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
