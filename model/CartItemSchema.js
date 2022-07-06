import { Schema } from "mongoose";
import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const CartItemSchema = new Schema({
  product: [
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      image: { type: String, required: true },
      category: { type: String, require: true },
    },
  ],
  quantity: Number,
  user: {
    type: ObjectId,
    ref: "User",
  },
});

export default mongoose.model("CartItem", CartItemSchema);
