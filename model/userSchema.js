import { Schema } from "mongoose";
import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const userSchema = new Schema(
  {
    username: {
      type: String,
      default: "Guest",
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    products: [
      {
        type: ObjectId,
        ref: "CartProduct",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
