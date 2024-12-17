import { useState, useEffect } from "react";

const YourOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserOrders = async () => {
      try {
        const response = await fetch("/api/orders/myOrder", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch orders.");
        }

        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Error loading user orders:", error.message);
        alert("Error loading your orders.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserOrders();
  }, []);

  if (loading) {
    return <p>Loading your orders...</p>;
  }

  if (orders.length === 0) {
    return <p>You have no orders.</p>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Your Orders</h1>
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order._id} className="p-4 border rounded-lg bg-gray-50">
            <h2 className="text-lg font-bold mb-2">Order ID: {order._id}</h2>
            <p className="text-gray-700 mb-1">
              <strong>Total:</strong> {order.total}€
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
            <p className="text-gray-700 mt-2">
              <strong>Status:</strong> {order.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourOrders;
