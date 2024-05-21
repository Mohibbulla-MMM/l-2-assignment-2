import { Schema } from "mongoose";
import { OrderModel, TOrder } from "./order.interface";
import { Product } from "../products/product.module";

const orderSchema = new Schema<TOrder, OrderModel>({
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
// order pre condition / static method
orderSchema.static(
  "findByOrderProductId",
  async function findByOrderProductId(payload) {
    try {
      const result = await Product.findById(payload.productId);
      // console.log(result)
      if (result) {
        const quantity = result.inventory.quantity;
        const inStock = result.inventory.inStock;
        const orderquantity = payload.quantity;
        // console.log(inStock);
        // stock chekc
        if (quantity >= orderquantity) {
          // quantity check
          // console.log(quantity);
          if (inStock) {
            // console.log(quantity);
            return true;
          } else {
            return `Insufficient quantity available in inventory. inStock false`;
          }
        } else {
          return `Insufficient quantity available in inventory. The stock number of the product is ${result.inventory.quantity}. Your product number is ${payload.quantity}.`;
        }
      } else {
        return `No products were found with this ID`;
      }
    } catch (err) {
      // console.log(err);
      return err;
    }
  }
);

orderSchema.post("save", async function (doc, next) {
  // console.log("order save success and post call --- ", doc);
  const id = doc.productId;
  const productData = await Product.findById(id);
  if (productData) {
    const quantity = productData.inventory.quantity - doc.quantity;
    const inStock = productData.inventory.inStock;
    const stock = inStock ? (quantity == 0 ? false : true) : false;
    const product = await Product.findByIdAndUpdate(
      id,
      {
        "inventory.quantity": quantity,
        "inventory.inStock": stock,
      },
      { new: true }
    );
  }

  next();
});

export { orderSchema };
