import { Schema } from "mongoose";
import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const CartSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: [
    {
      type: ObjectId,
      ref: "CartProduct",
    },
  ],
});

export default model("Cart", CartSchema);
