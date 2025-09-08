import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    category: String,
    imgUrl: String,
    stock: Number
  },
  { timestamps: true }
);

export default mongoose.model("Item", itemSchema);
