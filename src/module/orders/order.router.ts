import express from "express";
import { OrderControllers } from "./order.controllers";

const router = express.Router();
// create order
router.post("/", OrderControllers.createOrder);

// get order by user email
router.get("/", OrderControllers.getOrdersByUserEmail);

// get all order 
router.get("/", OrderControllers.getAllOrders);

export const OrderRouter = router;
