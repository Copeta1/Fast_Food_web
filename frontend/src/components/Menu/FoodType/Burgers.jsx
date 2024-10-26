import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const burgers = [
  {
    name: "Classic Burger",
    description: "Juicy beef patty with fresh lettuce and tomatoes.",
    price: "5.99€",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Deluxe Burger",
    description: "Double beef patty, melted cheese, and crispy bacon.",
    price: "8.99€",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Vegan Burger",
    description: "Plant-based patty with fresh avocado and arugula.",
    price: "6.99€",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "BBQ Burger",
    description: "Smoky beef patty with BBQ sauce and cheddar cheese.",
    price: "7.99€",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Spicy Burger",
    description: "Beef patty with jalapeños and hot sauce.",
    price: "6.49€",
    image: "https://via.placeholder.com/150",
  },
];

const Burgers = () => {
  const [currentBurger, setCurrentBurger] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("right");

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection("right");
    setTimeout(() => {
      setCurrentBurger((prev) => (prev + 1) % burgers.length);
      setIsAnimating(false);
    }, 300);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection("left");
    setTimeout(() => {
      setCurrentBurger((prev) => (prev - 1 + burgers.length) % burgers.length);
      setIsAnimating(false);
    }, 300);
  };

  const getBurgerIndex = (indexOffset) => {
    return (currentBurger + indexOffset + burgers.length) % burgers.length;
  };

  return (
    <div className="flex justify-center items-center space-x-6 py-10 relative overflow-hidden">
      {/* Left */}
      <div className="flex space-x-4 w-1/4">
        {[getBurgerIndex(-2), getBurgerIndex(-1)].map((index) => (
          <div
            key={index}
            className={`flex flex-col items-center transform scale-75 transition-transform duration-300 ${
              isAnimating && direction === "right" ? "translate-x-10" : ""
            }`}
          >
            <img
              src={burgers[index].image}
              alt={burgers[index].name}
              className="w-32 h-32 object-cover rounded-lg mb-2"
            />
            <h3 className="text-md font-semibold">{burgers[index].name}</h3>
            <p className="text-gray-600 text-center mt-1">
              {burgers[index].description}
            </p>
            <span className="text-red-500 font-bold mt-1">
              {burgers[index].price}
            </span>
          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="border-2 rounded-full hover:border-red-500 text-gray-500 hover:text-red-500 transition duration-300"
        disabled={isAnimating}
      >
        <FiChevronLeft size={30} />
      </button>

      {/* Main Center Burger */}
      <div
        className={`flex flex-col items-center w-1/4 transform transition-transform duration-300 ${
          isAnimating
            ? direction === "right"
              ? "scale-75 translate-x-20"
              : "scale-75 -translate-x-20"
            : "scale-100"
        } `}
      >
        <img
          src={burgers[currentBurger].image}
          alt={burgers[currentBurger].name}
          className="w-52 h-52 object-cover rounded-lg mb-2"
        />
        <h3 className="text-xl font-bold">{burgers[currentBurger].name}</h3>
        <p className="text-gray-600 text-center mt-1">
          {burgers[currentBurger].description}
        </p>
        <span className="text-red-500 font-bold mt-1 mb-2 text-lg">
          {burgers[currentBurger].price}
        </span>
        <button className="border-2 px-6 py-2 rounded-full bg-red-500 text-white">
          Order
        </button>
      </div>
      <button
        onClick={handleNext}
        className="border-2 rounded-full hover:border-red-500 text-gray-500 hover:text-red-500 transition duration-300"
        disabled={isAnimating}
      >
        <FiChevronRight size={30} />
      </button>

      {/*Right*/}
      <div className="flex space-x-4 w-1/4">
        {[getBurgerIndex(1), getBurgerIndex(2)].map((index) => (
          <div
            key={index}
            className={`flex flex-col items-center transform scale-75 transition-transform duration-300 ${
              isAnimating && direction === "left" ? "-translate-x-10" : ""
            }`}
          >
            <img
              src={burgers[index].image}
              alt={burgers[index].name}
              className="w-32 h-32 object-cover rounded-lg mb-2"
            />
            <h3 className="text-md font-semibold">{burgers[index].name}</h3>
            <p className="text-gray-600 text-center mt-1">
              {burgers[index].description}
            </p>
            <span className="text-red-500 font-bold mt-1">
              {burgers[index].price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Burgers;
