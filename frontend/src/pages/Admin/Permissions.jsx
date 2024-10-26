import { useState } from "react";

const users = [
  { id: 1, name: "John Doe", role: "Admin" },
  { id: 2, name: "Jane Smith", role: "Editor" },
  { id: 3, name: "Alex Johnson", role: "Viewer" },
  { id: 4, name: "Emily Davis", role: "Editor" },
];

const roles = ["Admin", "Editor", "Viewer"];

const Permissions = () => {
  const [activeTab, setActiveTab] = useState("roles");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState({});

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRoleChange = (userId, newRole) => {
    setSelectedRole({ ...selectedRole, [userId]: newRole });
  };

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

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search users..."
          className="border-2 border-gray-300 rounded-lg p-2 w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Dynamic Content based on activeTab */}
      <div>
        {activeTab === "roles" && (
          <div>
            <h2 className="text-xl font-bold mb-4">All Users with Roles</h2>
            <table className="min-w-full bg-white border">
              <thead>
                <tr>
                  <th className="py-2 px-4 text-left border-b">Name</th>
                  <th className="py-2 px-4 text-left border-b">Role</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td className="py-2 px-4 border-b">{user.name}</td>
                    <td className="py-2 px-4 border-b">{user.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "permissions" && (
          <div>
            <h2 className="text-xl font-bold mb-4">Assign Roles</h2>
            <table className="min-w-full bg-white border">
              <thead>
                <tr>
                  <th className="py-2 px-4 text-left border-b">Name</th>
                  <th className="py-2 px-4 text-left border-b">Current Role</th>
                  <th className="py-2 px-4 text-left border-b">
                    Assign New Role
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td className="py-2 px-4 border-b">{user.name}</td>
                    <td className="py-2 px-4 border-b">{user.role}</td>
                    <td className="py-2 px-4 border-b">
                      <select
                        className="border border-gray-300 rounded p-1"
                        value={selectedRole[user.id] || user.role}
                        onChange={(e) =>
                          handleRoleChange(user.id, e.target.value)
                        }
                      >
                        {roles.map((role) => (
                          <option key={role} value={role}>
                            {role}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "adminUsers" && (
          <div>
            <h2 className="text-xl font-bold mb-4">Admin Users</h2>
            <table className="min-w-full bg-white border">
              <thead>
                <tr>
                  <th className="py-2 px-4 text-left border-b">Name</th>
                  <th className="py-2 px-4 text-left border-b">Role</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers
                  .filter((user) => user.role === "Admin")
                  .map((user) => (
                    <tr key={user.id}>
                      <td className="py-2 px-4 border-b">{user.name}</td>
                      <td className="py-2 px-4 border-b">{user.role}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Permissions;
