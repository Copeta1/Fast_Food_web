// Menu.js
import { useState } from "react";
import Burgers from "./FoodType/Burgers";
import Pizzas from "./FoodType/Pizzas";
import Salads from "./FoodType/Salads";
import Sides from "./FoodType/Sides";
import Drinks from "./FoodType/Drinks";
import Desserts from "./FoodType/Desserts";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState("burgers");

  const renderContent = () => {
    switch (selectedMenu) {
      case "burgers":
        return <Burgers />;
      case "pizzas":
        return <Pizzas />;
      case "salads":
        return <Salads />;
      case "sides":
        return <Sides />;
      case "drinks":
        return <Drinks />;
      case "desserts":
        return <Desserts />;
      default:
        return <Burgers />;
    }
  };

  return (
    <>
      <div className="text-center bg-gray-100 pt-10">
        <span className="text-4xl font-bold">Our Menu</span>
        <div className="flex justify-center space-x-4 py-6">
          <button
            onClick={() => setSelectedMenu("burgers")}
            className={`border-2 px-6 py-3 rounded-full hover:border-red-500 hover:text-red-500 transition duration-300 ${
              selectedMenu === "burgers"
                ? "bg-red-500 text-white hover:text-white"
                : "border-gray-400 text-gray-400"
            }`}
          >
            Burgers
          </button>
          <button
            onClick={() => setSelectedMenu("pizzas")}
            className={`border-2 px-6 py-3 rounded-full hover:border-red-500 hover:text-red-500 transition duration-300 ${
              selectedMenu === "pizzas"
                ? "bg-red-500 text-white hover:text-white"
                : "border-gray-400 text-gray-400"
            }`}
          >
            Pizza
          </button>
          <button
            onClick={() => setSelectedMenu("salads")}
            className={`border-2 px-6 py-3 rounded-full hover:border-red-500 hover:text-red-500 transition duration-300 ${
              selectedMenu === "salads"
                ? "bg-red-500 text-white hover:text-white"
                : "border-gray-400 text-gray-400"
            }`}
          >
            Salad
          </button>
          <button
            onClick={() => setSelectedMenu("sides")}
            className={`border-2 px-6 py-3 rounded-full hover:border-red-500 hover:text-red-500 transition duration-300 ${
              selectedMenu === "sides"
                ? "bg-red-500 text-white hover:text-white"
                : "border-gray-400 text-gray-400"
            }`}
          >
            Sides
          </button>
          <button
            onClick={() => setSelectedMenu("drinks")}
            className={`border-2 px-6 py-3 rounded-full hover:border-red-500 hover:text-red-500 transition duration-300 ${
              selectedMenu === "drinks"
                ? "bg-red-500 text-white hover:text-white"
                : "border-gray-400 text-gray-400"
            }`}
          >
            Drinks
          </button>
          <button
            onClick={() => setSelectedMenu("desserts")}
            className={`border-2 px-6 py-3 rounded-full hover:border-red-500 hover:text-red-500 transition duration-300 ${
              selectedMenu === "desserts"
                ? "bg-red-500 text-white hover:text-white"
                : "border-gray-400 text-gray-400"
            }`}
          >
            Desserts
          </button>
        </div>
        <main className="flex-grow p-6 bg-gray-100">{renderContent()}</main>
      </div>
    </>
  );
};

export default Menu;
