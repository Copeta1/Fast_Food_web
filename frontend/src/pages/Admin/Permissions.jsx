import { useState } from "react";
import useGetUsers from "../../hooks/useGetUsers.js";
import useUpdateUserRole from "../../hooks/useUpdateUserRole.js";

const roles = ["Admin", "Editor", "Viewer"];

const Permissions = () => {
  const { users, loading, error } = useGetUsers();
  const {
    updateUserRole,
    loading: updating,
    error: updateError,
  } = useUpdateUserRole();
  const [activeTab, setActiveTab] = useState("roles");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState({});

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleToggleRole = async (userId, role) => {
    const roleKey = role.toLowerCase();
    const currentValue =
      selectedRole[userId]?.[role] ??
      users.find((user) => user.id === userId)?.roles[roleKey];

    // Update local state optimistically
    setSelectedRole((prevSelectedRole) => {
      const userRoles = prevSelectedRole[userId] || {};
      return {
        ...prevSelectedRole,
        [userId]: {
          ...userRoles,
          [role]: !currentValue,
        },
      };
    });

    // Call hook to update role in backend
    const success = await updateUserRole(userId, roleKey, !currentValue);

    if (!success) {
      // Revert state change if the API call fails
      setSelectedRole((prevSelectedRole) => {
        const userRoles = prevSelectedRole[userId] || {};
        return {
          ...prevSelectedRole,
          [userId]: {
            ...userRoles,
            [role]: currentValue,
          },
        };
      });
    }
  };

  const getRoleState = (userId, role) => {
    const roleKey = role.toLowerCase();
    const defaultRoleState = users.find((user) => user.id === userId)?.roles[
      roleKey
    ];
    return selectedRole[userId]?.[role] ?? defaultRoleState;
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Roles & Permissions</h1>

      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setActiveTab("roles")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "roles" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Roles
        </button>
        <button
          onClick={() => setActiveTab("permissions")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "permissions"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Permissions
        </button>
        <button
          onClick={() => setActiveTab("adminUsers")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "adminUsers"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Admin Users
        </button>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search users..."
          className="border-2 border-gray-300 rounded-lg p-2 w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {activeTab === "permissions" && (
        <div>
          <h2 className="text-xl font-bold mb-4">Assign Roles</h2>
          {updateError && (
            <p className="text-red-500">Error updating role: {updateError}</p>
          )}
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="py-2 px-4 text-left border-b">Name</th>
                {roles.map((role) => (
                  <th key={role} className="py-2 px-4 text-center border-b">
                    {role}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td className="py-2 px-4 border-b">{user.name}</td>
                  {roles.map((role) => (
                    <td key={role} className="py-2 px-4 border-b text-center">
                      <div className="flex justify-center items-center">
                        <button
                          onClick={() => handleToggleRole(user.id, role)}
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            getRoleState(user.id, role)
                              ? "bg-green-500 text-white"
                              : "bg-red-500 text-white"
                          }`}
                          disabled={updating} // Disable button while updating
                        >
                          {getRoleState(user.id, role) ? "✔️" : "✖️"}
                        </button>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {updating && <p>Updating role...</p>}{" "}
          {/* Display loading indicator */}
        </div>
      )}
    </div>
  );
};

export default Permissions;
