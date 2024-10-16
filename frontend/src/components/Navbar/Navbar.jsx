import { LuChefHat } from "react-icons/lu";
import { RiContactsLine } from "react-icons/ri";
import { IoImageOutline, IoPeopleOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-red-400">
            FastFood American
          </a>

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

          <div className=" md:block">
            <a href="/" className="btn bg-red-400 hover:bg-red-500 text-white">
              Login
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
