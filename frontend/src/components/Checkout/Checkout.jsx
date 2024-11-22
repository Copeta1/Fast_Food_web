import { useState, useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { CartContext } from "../../context/cart";
import { toast } from "react-hot-toast";
import useOrder from "../../hooks/useOrder"; // Import the custom hook

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phone: "",
  });

  const { cartItems } = useContext(CartContext);
  const { placeOrder, loading } = useOrder(); // Use the custom hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, address, email, phone } = formData;

    // Basic Validation
    if (!firstName || !lastName || !address || !email || !phone) {
      toast.error("Please fill out all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!/^\+?\d{7,15}$/.test(phone)) {
      toast.error("Please enter a valid phone number.");
      return;
    }

    // Prepare order data
    const orderData = {
      customer: formData,
      items: cartItems,
      total: cartItems.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
      ),
    };

    // Place the order using the hook
    const result = await placeOrder(orderData);

    if (result) {
      setFormData({
        firstName: "",
        lastName: "",
        address: "",
        email: "",
        phone: "",
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h1 className="text-2xl font-bold text-center mb-4">Checkout</h1>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg p-6"
          >
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                disabled={loading}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                disabled={loading}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                disabled={loading}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                disabled={loading}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                disabled={loading}
              />
            </div>
            <button
              type="submit"
              className={`w-full bg-green-500 text-white py-2 rounded ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:bg-green-600"
              } transition`}
              disabled={loading}
            >
              {loading ? "Placing Order..." : "Place Order"}
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Your Cart</h2>
          {cartItems.length > 0 ? (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center p-4 border rounded-lg"
                >
                  <div>
                    <h4 className="font-bold">{item.name}</h4>
                    <p className="text-sm text-gray-600">
                      {item.quantity} × {item.price}€
                    </p>
                  </div>
                  <div className="text-right font-bold text-gray-800">
                    {(item.quantity * item.price).toFixed(2)}€
                  </div>
                </div>
              ))}
              <div className="text-right font-bold text-lg">
                Total:{" "}
                {cartItems
                  .reduce((acc, item) => acc + item.quantity * item.price, 0)
                  .toFixed(2)}
                €
              </div>
            </div>
          ) : (
            <p className="text-gray-500">Your cart is empty.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Checkout;
