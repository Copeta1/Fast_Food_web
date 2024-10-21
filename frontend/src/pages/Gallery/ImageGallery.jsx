import { useState } from "react";
import image1 from "../../assets/Gallery/image1.jpg";
import image2 from "../../assets/Gallery/image2.jpg";
import image3 from "../../assets/Gallery/image3.jpg";
import image4 from "../../assets/Gallery/image4.jpg";
import image5 from "../../assets/Gallery/image5.jpg";

import Navbar from "../../components/Navbar/Navbar";

const images = [image1, image2, image3, image4, image5];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-center mb-8">Image Gallery</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => openModal(image)}
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 rounded-lg"></div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
            onClick={closeModal}
          >
            <div className="relative">
              <img
                src={selectedImage}
                alt="Selected"
                className="max-w-full max-h-full rounded-lg"
              />
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 bg-white text-black rounded-full p-2"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ImageGallery;
