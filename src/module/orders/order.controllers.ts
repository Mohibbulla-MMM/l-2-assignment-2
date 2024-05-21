import { Request, Response } from "express";
import { OrderServices } from "./order.services";
import { orderZodValidation } from "./order.zod.validation";
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
    console.log(`create product controllers error :>- ${err}`);
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
};
