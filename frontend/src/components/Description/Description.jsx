import { CiClock1 } from "react-icons/ci";
import { SlBag } from "react-icons/sl";
import { SiCodechef } from "react-icons/si";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const Description = () => {
  return (
    <>
      <div className="container mx-auto flex justify-between items-center py-4 mt-20 mb-20">
        <div className="flex flex-col items-center">
          <CiClock1 className="text-6xl mb-2" />
          <span className="">FAST DELIVERY</span>
          <div className="w-16 h-1 bg-yellow-400 mb-2 mt-2"></div>
          <span className="text-gray-400">Fast delivery, fresh food</span>
          <span className="text-gray-400">at your doorstep in no time!</span>
        </div>
        <div className="flex flex-col items-center">
          <SlBag className="text-6xl mb-2" />
          <span>FRESH FOOD</span>
          <div className="w-16 h-1 bg-yellow-400 mb-2 mt-2"></div>
          <span className="text-gray-400">
            Freshly prepared meals made with
          </span>
          <span className="text-gray-400">quality ingredients</span>
        </div>
        <div className="flex flex-col items-center">
          <SiCodechef className="text-6xl mb-2" />
          <span>EXPERIENCE CHEFS</span>
          <div className="w-16 h-1 bg-yellow-400 mb-2 mt-2"></div>
          <span className="text-gray-400">Expert chefs crafting delicious</span>
          <span className="text-gray-400">
            dishes with passion and precision.
          </span>
        </div>
        <div className="flex flex-col items-center">
          <MdOutlineRestaurantMenu className="text-6xl mb-2" />
          <span>A VARIETY OF DISHES</span>
          <div className="w-16 h-1 bg-yellow-400 mb-2 mt-2"></div>
          <span className="text-gray-400">
            Explore a diverse menu featuring a wide range
          </span>
          <span className="text-gray-400">
            of delicious dishes to satisfy every craving.
          </span>
        </div>
      </div>
    </>
  );
};

export default Description;
