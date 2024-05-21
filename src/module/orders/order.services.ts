import { TOrder } from "./order.interface";
import { Order } from "./order.module";

const createOrder = async (payload: TOrder) => {
  try {
    const result = await Order.create(payload);
    return result;
  } catch (err) {
    console.log(`Order create serviece error :>- ${err}`);
  }
};

export const OrderServices = {
  createOrder,
};
