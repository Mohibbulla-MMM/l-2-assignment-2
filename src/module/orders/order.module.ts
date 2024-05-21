// email: string;
// productId: string;
// price: number;
// quantity: number;

import { Schema, model } from "mongoose";
import { TOrder } from "./order.interface";

const orderSchema = new Schema<TOrder>({
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

const Order = model("Orders", orderSchema);
export { Order };
