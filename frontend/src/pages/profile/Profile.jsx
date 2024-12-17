import { useState } from "react";
import YourOrders from "./YourOrders";
import YourProfile from "./yourProfile";
import Navbar from "../../components/Navbar/Navbar";

const Profile = () => {
  const [selectedMenu, setSelectedMenu] = useState("yourProfile");

  const renderContent = () => {
    switch (selectedMenu) {
      case "yourProfile":
        return <YourProfile />;
      case "yourOrders":
        return <YourOrders />;
      default:
        return <YourProfile />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-glow">
        <aside className="w-64 bg-gray-800 text-white min-h-screen py-5">
          <h1 className="text-2xl font-bold mb-6 px-16">About Me</h1>
          <ul className="space-y-4 px-4">
            <li>
              <button
                onClick={() => setSelectedMenu("yourProfile")}
                className={`block w-full text-left p-2 rounded-lg ${
                  selectedMenu === "yourProfile"
                    ? "bg-red-500"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                Your Profile
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedMenu("yourOrders")}
                className={`block w-full text-left p-2 rounded-lg ${
                  selectedMenu === "yourOrders"
                    ? "bg-red-500"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                Your Orders
              </button>
            </li>
          </ul>
        </aside>

        <main className="flex-grow p-6 bg-gray-100">{renderContent()}</main>
      </div>
    </div>
  );
};

export default Profile;
