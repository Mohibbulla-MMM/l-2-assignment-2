import { Request, Response } from "express";
import { OrderServices } from "./order.services";
// order create
const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const result = await OrderServices.createOrder(order);
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (err: any) {
    console.log(`create product controllers error :>- ${err}`);
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
