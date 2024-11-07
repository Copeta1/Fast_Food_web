import { useRef } from "react";
import Flickity from "react-flickity-component";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "flickity/css/flickity.css";

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

const flickityOptions = {
  initialIndex: 0,
  wrapAround: true,
  prevNextButtons: false,
  pageDots: false,
  cellAlign: "center",
};

const Burgers = () => {
  const flickityRef = useRef(null);

  const handlePrev = () => {
    if (flickityRef.current) flickityRef.current.previous();
  };

  const handleNext = () => {
    if (flickityRef.current) flickityRef.current.next();
  };

  return (
    <div className="flex flex-col items-center py-10">
      <div className="flex space-x-4 justify-center mb-4">
        <button
          onClick={handlePrev}
          aria-label="Previous Burger"
          className="border-2 rounded-full p-2 hover:border-red-500 text-gray-500 hover:text-red-500 transition duration-300"
        >
          <FiChevronLeft size={30} />
        </button>
        <button
          onClick={handleNext}
          aria-label="Next Burger"
          className="border-2 rounded-full p-2 hover:border-red-500 text-gray-500 hover:text-red-500 transition duration-300"
        >
          <FiChevronRight size={30} />
        </button>
      </div>
      <Flickity
        flickityRef={(ref) => (flickityRef.current = ref)}
        options={flickityOptions}
        className="w-full"
        reloadOnUpdate
        static
      >
        {burgers.map((burger, index) => (
          <div
            key={index}
            className="carousel-cell mx-2 flex flex-col items-center text-center transition-transform duration-300"
            style={{
              width: "20%",
            }}
          >
            <img
              src={burger.image}
              alt={burger.name}
              className="w-32 h-32 object-cover rounded-lg mb-2"
            />
            <h3 className="text-md font-bold">{burger.name}</h3>
            <p className="text-gray-600 mt-1">{burger.description}</p>
            <span className="text-red-500 font-bold mt-1 mb-2 text-lg">
              {burger.price}
            </span>
            <button className="border-2 px-6 py-2 rounded-full bg-red-500 text-white transition hover:bg-red-600">
              Order
            </button>
          </div>
        ))}
      </Flickity>
    </div>
  );
};

export default Burgers;
