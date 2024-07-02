import { FaChartSimple } from "react-icons/fa6";
import { FaShoppingBag, FaTasks, FaUserFriends } from "react-icons/fa";
import { TbCoinFilled } from "react-icons/tb";

const FooterNavbar = () => {
  return (
    <div className="flex justify-around">
      <button className="flex flex-col items-center text-white text-sm p-1 active:bg-main active:ring-1 active:ring-gray-400 focus:ring-1 focus:ring-gray-400 rounded-lg text-regular">
        <FaChartSimple className="text-3xl mob1:text-3xl mob2:text-4xl sm:text-5xl" />
        Top
      </button>
      <button className="flex flex-col items-center text-white text-sm p-1 active:bg-main active:ring-1 active:ring-gray-400 focus:ring-1 focus:ring-gray-400 rounded-lg  text-regular">
        <FaUserFriends className="text-3xl mob1:text-3xl mob2:text-4xl sm:text-5xl" />
        Friends
      </button>
      <button className="flex flex-col items-center text-white text-sm p-1 active:bg-main active:ring-1 active:ring-gray-400 focus:ring-1 focus:ring-gray-400 rounded-lg  text-regular">
        <TbCoinFilled className="text-3xl mob1:text-3xl mob2:text-4xl sm:text-5xl" />
        Tap
      </button>
      <button className="flex flex-col items-center text-white text-sm p-1 active:bg-main active:ring-1 active:ring-gray-400 focus:ring-1 focus:ring-gray-400 rounded-lg  text-regular">
        <FaTasks className="text-3xl mob1:text-3xl mob2:text-4xl sm:text-5xl" />
        Tasks
      </button>
      <button className="flex flex-col items-center text-white text-sm p-1 active:bg-main active:ring-1 active:ring-gray-400 focus:ring-1 focus:ring-gray-400 rounded-lg  text-regular">
        <FaShoppingBag className="text-3xl mob1:text-3xl mob2:text-4xl sm:text-5xl" />
        Shop
      </button>
    </div>
  );
};

export default FooterNavbar;
