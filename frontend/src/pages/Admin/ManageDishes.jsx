import { useState } from "react";
import { FiUpload, FiX } from "react-icons/fi";
import toast from "react-hot-toast";
import { useProductStore } from "../../store/product";

const ManageDishes = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    image: "",
    isAvailable: true,
  });

  const removeImage = () => {
    setNewProduct({ ...newProduct, image: "" });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setNewProduct({ ...newProduct, image: file });
  };

  const toggleAvailability = () => {
    setNewProduct({ ...newProduct, isAvailable: !newProduct.isAvailable });
  };

  const { createProduct } = useProductStore();

  const handleAddProduct = async (e) => {
    e.preventDefault();
    console.log("Product being submitted:", newProduct);
    const { success, message } = await createProduct(newProduct);

    if (!success) {
      toast.error(`Error: ${message}`, {
        duration: 5000,
      });
    } else {
      toast.success(`Success: ${message}`, {
        duration: 5000,
      });
      setNewProduct({
        name: "",
        category: "",
        description: "",
        price: "",
        image: "",
        isAvailable: true,
      });
      console.log("Product reset after submission:", newProduct);
    }
  };
  return (
    <div className="flex justify-center bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Manage Dishes</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Dish Name
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter dish name"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Category
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            value={newProduct.category}
            onChange={(e) =>
              setNewProduct({ ...newProduct, category: e.target.value })
            }
          >
            <option value="Burger">Burger</option>
            <option value="Pizza">Pizza</option>
            <option value="Salad">Salad</option>
            <option value="Sides">Sides</option>
            <option value="Drinks">Drinks</option>
            <option value="Desserts">Desserts</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter description"
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Upload Image
          </label>
          <div className="flex items-center space-x-2">
            <label className="bg-gray-200 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-300 flex items-center space-x-2">
              <FiUpload className="text-gray-600" />
              <span>Upload Image</span>
              <input
                type="file"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
            {newProduct.image && (
              <div className="flex items-center space-x-2">
                <span className="text-gray-600 text-sm">
                  {newProduct.image.name}
                </span>
                <button
                  type="button"
                  onClick={removeImage}
                  className="text-red-500 hover:text-red-700"
                >
                  <FiX className="text-lg" />
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Price in €
          </label>
          <input
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
          />
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="isAvailable"
            checked={!newProduct.isAvailable}
            onChange={toggleAvailability}
            className="mr-2"
          />
          <label className="text-gray-700 text-md" htmlFor="isAvailable">
            Unavailable
          </label>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300"
            onClick={handleAddProduct}
          >
            Add Dish
          </button>
        </div>
      </form>
    </div>
  );
};

export default ManageDishes;
