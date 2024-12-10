import { useState } from "react";
import { toast } from "react-hot-toast";

const useOrder = () => {
  const [loading, setLoading] = useState(false);

  const placeOrder = async (orderData) => {
    setLoading(true);
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error("Failed to place the order.");
      }

      const data = await response.json();
      toast.success("Order placed successfully!");
      return data.order;
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Something went wrong.");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { placeOrder, loading };
};

export default useOrder;
