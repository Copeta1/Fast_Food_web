import { useState } from "react";
import { toast } from "react-hot-toast";

const API_BASE_URL = import.meta.env.VITE_APP_API_URL;

const useOrder = () => {
  const [loading, setLoading] = useState(false);

  const placeOrder = async (orderData) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Failed to place the order. Status: ${response.status}. Response: ${errorText}`
        );
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
