import express from "express";
import { Order } from "./order.module";
import { OrderControllers } from "./order.controllers";

const router = express.Router();

router.post("/", OrderControllers.createOrder);

export const OrderRouter = router;
