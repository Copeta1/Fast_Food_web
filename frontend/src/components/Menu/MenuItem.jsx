const MenuItem = () => {
  return (
    <>
      <span className="text-4xl font-bold">Our Menu</span>
      <div className="flex justify-center space-x-4 py-6">
        <button className="border-2 border-gray-400 text-gray-400 px-6 py-3 rounded-full hover:border-red-500 hover:text-red-500 transition duration-300">
          Burgers
        </button>
        <button className="border-2 border-gray-400 text-gray-400 px-6 py-3 rounded-full hover:border-red-500 hover:text-red-500 transition duration-300">
          Pizza
        </button>
        <button className="border-2 border-gray-400 text-gray-400 px-6 py-3 rounded-full hover:border-red-500 hover:text-red-500 transition duration-300">
          Salad
        </button>
        <button className="border-2 border-gray-400 text-gray-400 px-6 py-3 rounded-full hover:border-red-500 hover:text-red-500 transition duration-300">
          Sides
        </button>
        <button className="border-2 border-gray-400 text-gray-400 px-6 py-3 rounded-full hover:border-red-500 hover:text-red-500 transition duration-300">
          Drinks
        </button>
        <button className="border-2 border-gray-400 text-gray-400 px-6 py-3 rounded-full hover:border-red-500 hover:text-red-500 transition duration-300">
          Desserts
        </button>
      </div>
    </>
  );
};

export default MenuItem;
