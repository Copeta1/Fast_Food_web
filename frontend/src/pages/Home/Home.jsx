import Navbar from "../../components/navbar";
import pizzabanner from "../../assets/pizzabanner.jpg";
import hamburger from "../../assets/hamburger.jpg";

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
        <div className="w-1/3 h-42 p-2">
          <img
            src={hamburger}
            alt="Hamburger"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/3 h-42 p-2">
          <img
            src={hamburger}
            alt="Hamburger"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/3 h-42 p-2">
          <img
            src={hamburger}
            alt="Hamburger"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
