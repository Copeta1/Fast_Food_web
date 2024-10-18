import { useState } from "react";
import { LuChefHat } from "react-icons/lu";
import { RiContactsLine } from "react-icons/ri";
import { IoImageOutline, IoPeopleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { FiChevronDown } from "react-icons/fi";

const Navbar = () => {
  const { authUser, setAuthUser } = useAuthContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("food-user");
    setAuthUser(null);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent"
          >
            FastFood American
          </Link>

          <nav className=" md:flex space-x-4 items-center">
            <a
              href="/"
              className="text-sm text-gray-700 hover:text-red-400 hover:shadow-red-400 transition duration-300 flex items-center"
            >
              <LuChefHat className="text-2xl mr-2" />
              MENU
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="/"
              className="text-sm text-gray-700 hover:text-red-400  hover:shadow-red-400 transition duration-300 flex items-center"
            >
              <RiContactsLine className="text-2xl mr-2" />
              CONTACT US
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="/"
              className="text-sm text-gray-700 hover:text-red-400 hover:shadow-red-400 transition duration-300 flex items-center"
            >
              <IoImageOutline className="text-2xl mr-2" />
              IMAGE GALLERY
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="/"
              className="text-sm text-gray-700 hover:text-red-400 hover:shadow-red-400 transition duration-300 flex items-center"
            >
              <IoPeopleOutline className="text-2xl mr-2" />
              ABOUT US
            </a>
          </nav>

          <div className="md:flex items-center space-x-1">
            <span className="text-lg text-gray-700">📞</span>
            <span className="text-lg font-medium text-gray-800">
              +385 91 123 4567
            </span>
          </div>

          <div className="md:block">
            {authUser ? (
              // If user is logged in, display avatar and dropdown
              <div className="relative inline-block text-left">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-2 bg-gray-200 p-2 rounded-full focus:outline-none"
                >
                  <img
                    src={authUser.avatar || "/default-avatar.png"} // Use user's avatar if available, or a default one
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <FiChevronDown className="text-gray-600" />
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                    <Link
                      to="/profile"
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
              // If user is not logged in, display login button
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
  );
};

export default Navbar;
