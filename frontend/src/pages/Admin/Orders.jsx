import { useState, useEffect } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("/api/orders", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch orders.");
        }

        const data = await response.json();

        // Sort orders by `createdAt` in descending order (newest first)
        const sortedOrders = data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        setOrders(sortedOrders);
      } catch (error) {
        console.error(error);
        alert("Error loading orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const updateOrderStatus = async (orderId, status) => {
    try {
      const response = await fetch(`/api/orders/${orderId}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) {
        throw new Error("Failed to update order status.");
      }

      const updatedOrder = await response.json();
      setOrders(
        (prevOrders) =>
          prevOrders
            .map((order) =>
              order._id === updatedOrder._id ? updatedOrder : order
            )
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Maintain sorting after update
      );
    } catch (error) {
      console.error(error);
      alert("Failed to update order status.");
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800"; // Green background for Completed
      case "Cancelled":
        return "bg-red-100 text-red-800"; // Red background for Cancelled
      default:
        return "bg-gray-100 text-gray-800"; // Gray background for Pending/In Progress
    }
  };

  if (loading) {
    return <p>Loading orders...</p>;
  }

  if (orders.length === 0) {
    return <p>No orders available.</p>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map((order) => (
          <div key={order._id} className="p-4 border rounded-lg bg-gray-50">
            <h2 className="text-lg font-bold mb-2">
              Order from {order.customer.firstName} {order.customer.lastName}
            </h2>
            <p className="text-gray-700 mb-1">
              <strong>Address:</strong> {order.customer.address}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Email:</strong> {order.customer.email}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Phone:</strong> {order.customer.phone}
            </p>
            <div className="mt-4">
              <h3 className="font-bold mb-2">Items:</h3>
              <ul className="list-disc pl-5 space-y-2">
                {order.items.map((item) => (
                  <li key={item.id} className="text-gray-800">
                    {item.name} - {item.quantity} × {item.price}€
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-left font-bold mt-4">
              Total: {order.total.toFixed(2)}€
            </p>
            <div className="flex space-x-4 mt-4">
              <button
                onClick={() => updateOrderStatus(order._id, "Completed")}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                disabled={order.status === "Completed"}
              >
                {order.status === "Completed" ? "Completed" : "Mark Complete"}
              </button>
              <button
                onClick={() => updateOrderStatus(order._id, "Cancelled")}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                disabled={order.status === "Cancelled"}
              >
                {order.status === "Cancelled" ? "Cancelled" : "Cancel Order"}
              </button>
            </div>
            <p
              className={`mt-4 p-2 rounded text-center font-bold ${getStatusClass(
                order.status
              )}`}
            >
              {order.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
