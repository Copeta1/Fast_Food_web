import { useState, useEffect, useRef } from "react";
import useFetchCategory from "../../hooks/useFetchCategory";
import { useProductStore } from "../../store/product";

const ManageDishes = () => {
  const categories = [
    "Burger",
    "Pizza",
    "Salad",
    "Sides",
    "Drinks",
    "Desserts",
  ];
  const [selectedCategory, setSelectedCategory] = useState("Burger");
  const [newDish, setNewDish] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const { items, loading, error } = useFetchCategory(selectedCategory);
  const { createProduct, deleteProduct, updateProduct, fetchProduct } =
    useProductStore();
  const formRef = useRef(null);

  useEffect(() => {
    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory, refresh]);

  const resetForm = () => {
    setNewDish({ name: "", description: "", price: "", image: "" });
    setIsEditing(false);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleAddDish = async () => {
    const result = await createProduct(newDish);
    if (result.success) {
      resetForm();
      setRefresh((prev) => !prev);
    } else {
      console.error(result.message);
    }
  };

  const handleDeleteDish = async (dishId) => {
    const result = await deleteProduct(dishId);
    if (result.success) {
      setConfirmDelete(null);
      setRefresh((prev) => !prev);
    } else {
      console.error(result.message);
    }
  };

  const handleEditDish = (dishId) => {
    const dishToEdit = items.find((dish) => dish._id === dishId);
    setNewDish({
      _id: dishToEdit._id,
      name: dishToEdit.name,
      description: dishToEdit.description,
      price: dishToEdit.price,
      image: dishToEdit.image,
    });
    setIsEditing(true);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleUpdateDish = async () => {
    const result = await updateProduct(newDish._id, newDish);
    if (result.success) {
      resetForm();
      setRefresh((prev) => !prev);
    } else {
      console.error(result.message);
    }
  };

  if (loading) return <p>Loading dishes...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-6">
      <div className="flex justify-center mb-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-6 py-2 mx-2 rounded-full ${
              selectedCategory === category
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {items.length > 0 ? (
          items.map((dish) => (
            <div
              key={dish._id}
              className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
            >
              <div>
                <img
                  src={dish.image || "https://via.placeholder.com/150"}
                  alt={dish.name}
                  className="w-24 h-24 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-bold">{dish.name}</h3>
                <p className="text-gray-600 mt-2">{dish.description}</p>
                <p className="text-red-500 font-semibold mt-2">{dish.price}€</p>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleEditDish(dish._id)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
                >
                  Edit
                </button>
                {confirmDelete === dish._id ? (
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleDeleteDish(dish._id)}
                      className="bg-red-700 text-white px-4 py-2 rounded-lg"
                    >
                      Yes, Delete
                    </button>
                    <button
                      onClick={() => setConfirmDelete(null)}
                      className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setConfirmDelete(dish._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No dishes available in this category.</p>
        )}
      </div>

      <div ref={formRef} className="mt-8">
        <h3 className="text-xl font-bold mb-4">Edit Dish</h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Dish Name"
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={newDish.name}
            onChange={(e) => setNewDish({ ...newDish, name: e.target.value })}
          />
          <textarea
            placeholder="Dish Description"
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={newDish.description}
            onChange={(e) =>
              setNewDish({ ...newDish, description: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Dish Price"
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={newDish.price}
            onChange={(e) => setNewDish({ ...newDish, price: e.target.value })}
          />
          <input
            type="text"
            placeholder="Dish Image URL"
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={newDish.image}
            onChange={(e) => setNewDish({ ...newDish, image: e.target.value })}
          />
          <button
            onClick={isEditing ? handleUpdateDish : handleAddDish}
            className="bg-green-500 text-white px-6 py-2 rounded-lg mt-4"
          >
            Update Dish
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageDishes;
