import { useState, useEffect } from "react";

const useFetchCategory = (category) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE_URL = import.meta.env.VITE_APP_API_URL;

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/api/food?category=${category}`
        );
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(
            `Failed to fetch data: ${response.status} ${response.statusText}. Response: ${errorText}`
          );
        }
        const data = await response.json();
        setItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, [category]);

  return { items, loading, error };
};

export default useFetchCategory;
