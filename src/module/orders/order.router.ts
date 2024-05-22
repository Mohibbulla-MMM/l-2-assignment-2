import express from "express";
import { OrderControllers } from "./order.controllers";

const router = express.Router();
// create order
router.post("/", OrderControllers.createOrder);

// 
// router.get("/", OrderControllers.getOrdersByUserEmail);

// get all order and get order by user email
router.get("/", OrderControllers.getAllOrdersOrUserEmail);

export const OrderRouter = router;
