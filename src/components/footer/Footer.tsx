import { FaChartSimple } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { TbCoinFilled } from "react-icons/tb";
import { FaTasks } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-mainShade p-4 rounded-tr-3xl rounded-tl-3xl w-screen h-20 sm:h-24 fixed bottom-0 select-none">
            <div className={"flex justify-around"}>
                <button className={"flex flex-col items-center text-white text-sm p-1 active:bg-main active:ring-1 active:ring-gray-400 focus:ring-1 focus:ring-gray-400 rounded-lg"}>
                    <FaChartSimple className={"text-3xl mob1:text-3xl mob2:text-4xl sm:text-5xl"}/>
                    Top
                </button>
                <button className={"flex flex-col items-center text-white text-sm p-1 active:bg-main active:ring-1 active:ring-gray-400 focus:ring-1 focus:ring-gray-400 rounded-lg"}>
                    <FaUserFriends className={"text-3xl mob1:text-3xl mob2:text-4xl sm:text-5xl"}/>
                    Friends
                </button>
                <button className={"flex flex-col items-center text-white text-sm p-1 active:bg-main active:ring-1 active:ring-gray-400 focus:ring-1 focus:ring-gray-400 rounded-lg"}>
                    <TbCoinFilled className={"text-3xl mob1:text-3xl mob2:text-4xl sm:text-5xl"}/>
                    Tap
                </button>
                <button className={"flex flex-col items-center text-white text-sm p-1 active:bg-main active:ring-1 active:ring-gray-400 focus:ring-1 focus:ring-gray-400 rounded-lg"}>
                    <FaTasks className={"text-3xl mob1:text-3xl mob2:text-4xl sm:text-5xl"}/>
                    Tasks
                </button>
                <button className={"flex flex-col items-center text-white text-sm p-1 active:bg-main active:ring-1 active:ring-gray-400 focus:ring-1 focus:ring-gray-400 rounded-lg"}>
                    <FaShoppingBag className={"text-3xl mob1:text-3xl mob2:text-4xl sm:text-5xl"}/>
                    Shop
                </button>
            </div>
        </div>
    );
};

export default Footer;