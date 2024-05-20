import { Schema, model } from "mongoose";
import {
  TProduct,
  TProductInventory,
  TProductVariants,
} from "./product.interface";
// product varient schema
const productVariantsSchema = new Schema<TProductVariants>({
  type: {
    type: String,
    maxlength: 100,
    required: [true, "Product variants type field is required"],
  },
  value: {
    type: String,
    maxlength: 200,
    required: [true, "Product variants value field is requird"],
  },
});
//product inventory schema
const productInventorySchema = new Schema<TProductInventory>({
  quantity: {
    type: Number,
    maxlength: 20,
    required: [true, "Product inventory quantity field is required"],
  },
  inStock: {
    type: Boolean,
    required: [true, "Product inventory inStock field is required"],
  },
});

const productSchema = new Schema<TProduct>({
  name: {
    type: String,
    maxlength: 100,
    required: [true, "Product name field is required"],
  },
  description: {
    type: String,
    maxlength: 1500,
    required: [true, "Product description field is required"],
  },
  price: {
    type: Number,
    maxlength: 20,
    required: [true, "Product price field is required"],
  },
  category: {
    type: String,
    maxlength:200,
    required: [true, "Product category field is required"],
  },
  tags: {
    type: [String],
    validate: {
      validator: function (V: String[]) {
        if (Array.isArray(V) && V?.length > 0) {
          return V;
        } else {
          throw new Error(
            "{VALUE} is not valid data, please insert valid string inside in array. minimum 1 tag required"
          );
        }
      },
      message:
        "{VALUE} is not valid data, please insert valid string inside in array.  minimum 1 tag required",
    },
    required: [true, "Product tags field is required"],
  },
  variants: {
    type: [productVariantsSchema],
    required: [true, "Product variants field is required"],
  },
  inventory: {
    type: productInventorySchema,
    required: [true, "Product inventory field is required"],
  },
});

const Product = model("Products", productSchema);
export { Product };
