import Navbar from "../../components/Navbar/Navbar";
import pizzabanner from "../../assets/pizzabanner.jpg";
import hamburger from "../../assets/hamburger.jpg";
import Menu from "../../components/Menu/Menu";
import Description from "../../components/Description/Description";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="relative">
        <img
          src={pizzabanner}
          alt="Pizza"
          className="w-full h-[400px] object-cover"
        />
      </div>
      <div className="flex justify-center items-center w-full h-full p-4 space-x-4">
        <div className="w-1/3 h-full p-5">
          <img
            src={hamburger}
            alt="Hamburger"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/3 h-full p-5">
          <img
            src={hamburger}
            alt="Hamburger"
            className="w-auto h-auto object-cover"
          />
        </div>
        <div className="w-1/3 h-full p-5">
          <img
            src={hamburger}
            alt="Hamburger"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <Menu />

      <Description />

      <footer className="bg-white shadow-md p-4 px-48">
        <div className="flex  items-center text-gray-600 justify-between">
          &copy; 2024 FastFood American. All rights reserved.
          <div className="flex justify-center items-center text-gray-600">
            <a
              className="hover:border-red-500 hover:text-red-500 transition duration-300"
              href="/"
            >
              Privacy Policy
            </a>
            <span className="mx-4">|</span>
            <a
              className="hover:border-red-500 hover:text-red-500 transition duration-300"
              href="/"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
