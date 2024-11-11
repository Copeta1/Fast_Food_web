import { useRef } from "react";
import useFetchCategory from "../../../hooks/useFetchCategory";

const Sides = () => {
  const { items, loading, error } = useFetchCategory("Sides");

  const scrollRef = useRef(null);

  const scrollTo = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 4 * 300; // 3 items per scroll, each card is about 300px wide
      if (direction === "left") {
        scrollRef.current.scrollLeft -= scrollAmount;
      } else if (direction === "right") {
        scrollRef.current.scrollLeft += scrollAmount;
      }
    }
  };
  if (loading) return <p>Loading burgers...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="relative">
      {/* Left Arrow */}
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
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
              <p className="text-red-500 font-semibold mt-2">{item.price}€</p>

              <button className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200">
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scrollTo("right")}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
      >
        &gt;
      </button>
    </div>
  );
};

export default Sides;
