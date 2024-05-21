import express, { Request, Response } from "express";
import cors from "cors";
import { ProductRouter } from "./module/products/product.router";
import { OrderRouter } from "./module/orders/order.router";
const app = express();
// middleware/parser
app.use(express.json());
app.use(cors());

// product router
app.use("/api/products", ProductRouter);
//order router
app.use("/api/orders", OrderRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
export default app;
