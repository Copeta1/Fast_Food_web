import Order from "../models/order.model.js";

export const addOrder = async (req, res) => {
  try {
    const { customer, items, total } = req.body;

    if (!customer || !items || !total) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const order = new Order({ customer, items, total });
    await order.save();

    res.status(201).json({ message: "Order placed successfully", order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to place the order." });
  }
};
