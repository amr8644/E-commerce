import { Schema } from "mongoose";
import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const usersSchema = new Schema(
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
        ref: "Product",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const User =
  mongoose.models?.User || mongoose.model("User", usersSchema);
