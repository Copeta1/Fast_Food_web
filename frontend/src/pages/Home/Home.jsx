import Navbar from "../../components/Navbar/Navbar";

import pizzabanner from "../../assets/pizzabanner.jpg";
import hamburger from "../../assets/hamburger.jpg";
import online from "../../assets/online.jpg";
import muffin from "../../assets/muffin.jpg";

import Menu from "../../components/Menu/Menu";
import Description from "../../components/Description/Description";
import ImagesHome from "../../components/Description/ImagesHome";
import Footer from "./Footer";

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
      <div className="flex justify-center items-center w-full h-full p-4 space-x-4 relative">
        <div className="relative w-1/3 h-full p-5">
          <img
            src={hamburger}
            alt="Hamburger"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-end items-center text-white pb-20">
            <div className="bg-black bg-opacity-50 px-4 py-2 rounded-lg text-center">
              <h1 className="text-4xl font-bold">Burger Lovers</h1>
              <p className="text-lg mt-2">
                We have burgers for all your needs.
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-1/3 h-full p-5">
          <img
            src={online}
            alt="Order Online"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-end items-center text-white pb-20">
            <div className="bg-black bg-opacity-50 px-4 py-2 rounded-lg text-center">
              <h1 className="text-4xl font-bold">Order Online</h1>
              <p className="text-lg mt-2">
                Available every day from 9:00 - 23:00.
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-1/3 h-full p-5">
          <img
            src={muffin}
            alt="Muffins"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-end items-center text-white pb-20">
            <div className="bg-black bg-opacity-50 px-4 py-2 rounded-lg text-center">
              <h1 className="text-4xl font-bold">Desserts Special</h1>
              <p className="text-lg mt-2">Every Friday one dessert is 0.99€</p>
            </div>
          </div>
        </div>
      </div>

      <Menu />

      <Description />

      <ImagesHome />

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d177882.87201062537!2d15.799556471577874!3d45.84289547339543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d692c902cc39%3A0x3a45249628fbc28a!2sZagreb!5e0!3m2!1shr!2shr!4v1729081039722!5m2!1shr!2shr"
          width="100%"
          height="350"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Footer />
    </>
  );
};

export default Home;
