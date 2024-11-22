import { useState, useContext } from "react";
import { LuChefHat } from "react-icons/lu";
import { RiContactsLine } from "react-icons/ri";
import { IoImageOutline, IoPeopleOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { FiChevronDown, FiShoppingCart } from "react-icons/fi";
import { CartContext } from "../../context/cart";

const Navbar = () => {
  const { authUser, setAuthUser } = useAuthContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("food-user");
    setAuthUser(null);
  };

  const handlePlaceOrder = () => {
    // Navigate to the checkout page
    navigate("/checkout");
  };

  return (
    <>
      <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent"
            >
              FastFood American
            </Link>

            <nav className="md:flex space-x-4 items-center">
              <Link
                to="/"
                className="text-sm text-gray-700 hover:text-red-400 hover:shadow-red-400 transition duration-300 flex items-center"
              >
                <LuChefHat className="text-2xl mr-2" />
                HOME
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                to="/contactus"
                className="text-sm text-gray-700 hover:text-red-400 hover:shadow-red-400 transition duration-300 flex items-center"
              >
                <RiContactsLine className="text-2xl mr-2" />
                CONTACT US
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                to="/imageGallery"
                className="text-sm text-gray-700 hover:text-red-400 hover:shadow-red-400 transition duration-300 flex items-center"
              >
                <IoImageOutline className="text-2xl mr-2" />
                IMAGE GALLERY
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                to="/aboutUs"
                className="text-sm text-gray-700 hover:text-red-400 hover:shadow-red-400 transition duration-300 flex items-center"
              >
                <IoPeopleOutline className="text-2xl mr-2" />
                ABOUT US
              </Link>
            </nav>

            <div className="md:flex items-center space-x-1">
              <span className="text-lg text-gray-700">📞</span>
              <span className="text-lg font-medium text-gray-800">
                +385 91 123 4567
              </span>
            </div>

            {authUser ? (
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <button
                    onClick={() => setIsCartOpen(!isCartOpen)}
                    className="flex items-center space-x-2 bg-gray-200 p-2 rounded-full focus:outline-none"
                  >
                    <FiShoppingCart className="text-2xl text-gray-700" />
                    <span className="bg-red-500 text-white text-xs px-2 rounded-full">
                      {cartItems.length}
                    </span>
                  </button>
                  {isCartOpen && (
                    <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg py-2 z-50">
                      {cartItems.length > 0 ? (
                        <>
                          {cartItems.map((item) => (
                            <div
                              key={item.id}
                              className="flex justify-between items-center px-4 py-2 border-b"
                            >
                              <div>
                                <h4 className="text-sm font-bold">
                                  {item.name}
                                </h4>
                                <p className="text-xs text-gray-600">
                                  {item.quantity} × {item.price}€
                                </p>
                              </div>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 text-xs font-bold"
                              >
                                Remove
                              </button>
                            </div>
                          ))}
                          <div className="px-4 py-2">
                            <button
                              onClick={() => handlePlaceOrder()}
                              className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-200"
                            >
                              Place Order
                            </button>
                          </div>
                        </>
                      ) : (
                        <p className="text-center text-gray-500">
                          Cart is empty.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="md:block">
              {authUser ? (
                <div className="relative inline-block text-left">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center space-x-2 bg-gray-200 p-2 rounded-full focus:outline-none"
                  >
                    <div className="w-8 h-8 bg-gray-500 text-white rounded-full flex items-center justify-center font-bold">
                      {authUser.firstName.charAt(0).toUpperCase()}
                    </div>
                    <FiChevronDown className="text-gray-600" />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                      {(authUser.admin || authUser.editor) && (
                        <Link
                          to="/admin"
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                          Admin
                        </Link>
                      )}

                      <Link
                        to="/"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Profile
                      </Link>

                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/login"
                  className="btn bg-red-400 hover:bg-red-500 text-white"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="pt-16"></div>
    </>
  );
};

export default Navbar;
