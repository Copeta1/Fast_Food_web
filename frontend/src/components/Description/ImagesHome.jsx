import waitress from "../../assets/waitress.png";
import outdoor from "../../assets/outdoor.jpg";
import burger from "../../assets/burger.jpg";
import coffee from "../../assets/coffee.jpg";

const ImagesHome = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-1/4">
        <img
          src={waitress}
          alt="Image 1"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/4">
        <img
          src={outdoor}
          alt="Image 2"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/4">
        <img
          src={burger}
          alt="Image 3"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/4">
        <img
          src={coffee}
          alt="Image 4"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ImagesHome;
