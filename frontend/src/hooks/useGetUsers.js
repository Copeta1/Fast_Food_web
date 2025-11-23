import { useState, useEffect } from "react";

const API_BASE_URL = import.meta.env.VITE_APP_API_URL;

const useGetUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API_BASE_URL}/api/auth`);
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(
            `Failed to fetch users: ${response.status} ${response.statusText}. Response: ${errorText}`
          );
        }

        const data = await response.json();
        const formattedUsers = data.map((user) => ({
          id: user._id,
          name: `${user.firstName} ${user.lastName}`,
          roles: {
            admin: user.admin,
            editor: user.editor,
            viewer: user.viewer,
          },
        }));

        setUsers(formattedUsers);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, loading, error };
};

export default useGetUsers;
