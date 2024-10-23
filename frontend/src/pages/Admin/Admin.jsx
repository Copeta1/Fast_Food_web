import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ManageDishes from "./ManageDishes";
import Orders from "./Orders";
import Permissions from "./Permissions";

const Admin = () => {
  const [selectedMenu, setSelectedMenu] = useState("addDish");

  const renderContent = () => {
    switch (selectedMenu) {
      case "manageDishes":
        return <ManageDishes />;
      case "orders":
        return <Orders />;
      case "permissions":
        return <Permissions />;
      default:
        return <ManageDishes />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-grow">
        <aside className="w-64 bg-gray-800 text-white min-h-screen py-5">
          <ul className="space-y-4 px-4">
            <li>
              <button
                onClick={() => setSelectedMenu("manageDishes")}
                className={`block w-full text-left p-2 rounded-lg ${
                  selectedMenu === "manageDishes"
                    ? "bg-red-500"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                Manage Dishes
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedMenu("orders")}
                className={`block w-full text-left p-2 rounded-lg ${
                  selectedMenu === "orders"
                    ? "bg-red-500"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                Orders
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedMenu("permissions")}
                className={`block w-full text-left p-2 rounded-lg ${
                  selectedMenu === "permissions"
                    ? "bg-red-500"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                Permissions
              </button>
            </li>
          </ul>
        </aside>

        <main className="flex-grow p-6 bg-gray-100">{renderContent()}</main>
      </div>
    </div>
  );
};

export default Admin;
