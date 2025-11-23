import { useState } from "react";

const API_BASE_URL = import.meta.env.VITE_APP_API_URL;

const useUpdateUserRole = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateUserRole = async (userId, role, value) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/${userId}/role`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ role, value }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Failed to update role. Status: ${response.status}. Response: ${errorText}`
        );
      }

      return true;
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { updateUserRole, loading, error };
};

export default useUpdateUserRole;
