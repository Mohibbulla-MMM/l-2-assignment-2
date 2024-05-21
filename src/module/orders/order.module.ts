import { model } from "mongoose";
import { OrderModel, TOrder } from "./order.interface";
import { orderSchema } from "./order.pre.SchemaAndMethods";

const Order = model<TOrder, OrderModel>("Orders", orderSchema);
export { Order };
