import { useState } from "react";
import { toast } from "react-hot-toast";

const useOrder = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const placeOrder = async (orderData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://your-api.com/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        const result = await response.json();
        toast.success("Order placed successfully!");
        return result;
      } else {
        const errorMessage = await response.text();
        throw new Error(errorMessage || "Failed to place order.");
      }
    } catch (err) {
      setError(err.message);
      toast.error(err.message || "An error occurred while placing the order.");
    } finally {
      setLoading(false);
    }
  };

  return { placeOrder, loading, error };
};

export default useOrder;
