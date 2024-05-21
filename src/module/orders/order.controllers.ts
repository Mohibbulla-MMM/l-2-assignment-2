import { Request, Response } from "express";
import { OrderServices } from "./order.services";
import { orderZodValidation } from "./order.zod.validation";
import { emailZodValidation } from "./order.zod.email.validation";
// order create
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const { error, data } = await orderZodValidation.safeParse(orderData);
    // console.log(error);
    if (error) {
      throw new Error(error.message);
    }
    // data send order services>fn
    const result = await OrderServices.createOrder(data);
    // response send
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (err: any) {
    console.log(`create order controllers error :>- ${err}`);
    // error send
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong!",
      data: err,
    });
  }
};
// get all order
const getAllOrders = async (req: Request, res: Response) => {
  try {
    // data send order services>fn
    const result = await OrderServices.getAllOrders();
    // response send
    res.status(200).json({
      success: true,
      message: "Orders fetched successfully!",
      data: result,
    });
    // TODO order not found if logic and send not found message
  } catch (err: any) {
    console.log(`find Order controllers error :>- ${err}`);
    // error send
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong!",
      data: err,
    });
  }
};
// get all order
const getOrdersByUserEmail = async (req: Request, res: Response) => {
  try {
    // data send order services>fn
    const email = req.query;
    const { error, data } = emailZodValidation.safeParse(email);
    if (error) {
      throw new Error(error.message);
    }

    const result = await OrderServices.getOrdersByUserEmail(data);
   
    res.status(200).json({
      success: true,
      message: "Orders fetched successfully for user email!",
      data: result,
    });
    // TODO order not found if logic and send not found message
  } catch (err: any) {
    console.log(`order get by user email controllers error :>- ${err}`);
    // error send
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong!",
      data: err,
    });
  }
};

export const OrderControllers = {
  createOrder,
  getAllOrders,
  getOrdersByUserEmail,
};
