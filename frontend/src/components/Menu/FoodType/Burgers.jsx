import { useRef, useState } from "react";
import useFetchCategory from "../../../hooks/useFetchCategory";

const Burgers = () => {
  const { items, loading, error } = useFetchCategory("Burger");
  const scrollRef = useRef(null);

  const [orderCounts, setOrderCounts] = useState({});

  const scrollTo = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 4 * 300;
      if (direction === "left") {
        scrollRef.current.scrollLeft -= scrollAmount;
      } else if (direction === "right") {
        scrollRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  const handleOrderClick = (id) => {
    setOrderCounts((prevCounts) => ({
      ...prevCounts,
      [id]: prevCounts[id] ? prevCounts[id] : 1,
    }));
  };

  const incrementCount = (id) => {
    setOrderCounts((prevCounts) => ({
      ...prevCounts,
      [id]: prevCounts[id] + 1,
    }));
  };

  const decrementCount = (id) => {
    setOrderCounts((prevCounts) => ({
      ...prevCounts,
      [id]: prevCounts[id] > 1 ? prevCounts[id] - 1 : 0,
    }));
  };

  if (loading) return <p>Loading burgers...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="relative">
      <button
        onClick={() => scrollTo("left")}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
      >
        &lt;
      </button>

      <div className="flex justify-center py-4">
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scroll-smooth transition-transform max-w-full"
        >
          {items.map((item) => (
            <div
              key={item._id}
              className="bg-white p-4 rounded-lg shadow-md flex-shrink-0 w-64"
            >
              <img
                src={item.image || "https://via.placeholder.com/150"}
                alt={item.name}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold text-center">{item.name}</h3>
              <p className="text-gray-600 mt-2 text-center">
                {item.description}
              </p>
              <p className="text-red-500 font-semibold mt-2 text-center">
                {item.price}€
              </p>

              {orderCounts[item._id] ? (
                <div className="flex items-center justify-center mt-4">
                  <button
                    onClick={() => decrementCount(item._id)}
                    className="bg-gray-300 text-gray-800 p-2 rounded-l-lg"
                  >
                    -
                  </button>
                  <span className="px-4">{orderCounts[item._id]}</span>
                  <button
                    onClick={() => incrementCount(item._id)}
                    className="bg-gray-300 text-gray-800 p-2 rounded-r-lg"
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => handleOrderClick(item._id)}
                  className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200"
                >
                  Order Now
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => scrollTo("right")}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
      >
        &gt;
      </button>
    </div>
  );
};

export default Burgers;
