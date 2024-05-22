import express, { Request, Response } from "express";
import cors from "cors";
import { ProductRouter } from "./module/products/product.router";
import { OrderRouter } from "./module/orders/order.router";
import config from "./config";
const app = express();
// middleware/parser
app.use(express.json());
app.use(cors());

// product router
app.use("/api/products", ProductRouter);
//order router
app.use("/api/orders", OrderRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Ecommers assignment-2 server ");
});

// wrong all api error
app.all("*", (req: Request, res: Response) => {
  const url = `${req.protocol}://${req.hostname}:${config.port}${req.path}`;
  res.status(400).json({
    success: false,
    message: "Route not found",
    path: url,
  });
});

export default app;
