import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["Burger", "Pizza", "Salad", "Sides", "Drinks", "Desserts"],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

const Food = mongoose.model("Food", foodSchema);

export default Food;
