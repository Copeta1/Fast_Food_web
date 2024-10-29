import { useState } from "react";

const useUpdateUserRole = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateUserRole = async (userId, role, value) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/auth/${userId}/role`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ role, value }),
      });

      if (!response.ok) throw new Error("Failed to update role");

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
