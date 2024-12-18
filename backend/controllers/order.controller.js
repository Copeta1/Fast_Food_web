import Order from "../models/order.model.js";

export const addOrder = async (req, res) => {
  try {
    const { customer, items, total } = req.body;

    if (!customer || !items || !total) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const order = new Order({
      customer: {
        ...customer,
        userId: req.userId,
      },
      items,
      total,
    });

    await order.save();

    res.status(201).json({ message: "Order placed successfully", order });
  } catch (error) {
    console.error("Error placing order:", error.message);
    res.status(500).json({ error: "Failed to place the order." });
  }
};

export const getOrder = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch orders." });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const { status } = req.body;

    if (
      !["Pending", "In Progress", "Completed", "Cancelled"].includes(status)
    ) {
      return res.status(400).json({ error: "Invalid status value." });
    }

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ error: "Order not found." });
    }

    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update order status." });
  }
};

export const myOrder = async (req, res) => {
  try {
    const userId = req.userId;
    console.log("Fetching orders for userId:", userId);

    const orders = await Order.find({ "customer.userId": userId });

    if (!orders || orders.length === 0) {
      return res
        .status(404)
        .json({ message: "No orders found for this user." });
    }

    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching user orders:", error.message);
    res.status(500).json({ error: "Failed to fetch orders." });
  }
};
