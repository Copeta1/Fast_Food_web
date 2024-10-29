import { useState, useEffect } from "react";

const useGetUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/auth"); // Adjust URL if necessary
        if (!response.ok) throw new Error("Failed to fetch users");

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
