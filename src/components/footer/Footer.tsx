import { FaChartSimple } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { TbCoinFilled } from "react-icons/tb";
import { FaTasks } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-mainShade p-4 rounded-tr-3xl rounded-tl-3xl w-screen h-20 fixed bottom-0 select-none">
            <div className={"flex justify-around"}>
                <button className={"flex flex-col items-center text-white text-xs p-2 active:bg-main active:ring-1 active:ring-gray-400 focus:ring-1 focus:ring-gray-400 rounded-lg"}>
                    <FaChartSimple size={"28"}/>
                    Top
                </button>
                <button className={"flex flex-col items-center text-white text-xs p-2 active:bg-main active:ring-1 active:ring-gray-400 focus:ring-1 focus:ring-gray-400 rounded-lg"}>
                    <FaUserFriends size={"28"}/>
                    Friends
                </button>
                <button className={"flex flex-col items-center text-white text-xs p-2 active:bg-main active:ring-1 active:ring-gray-400 focus:ring-1 focus:ring-gray-400 rounded-lg"}>
                    <TbCoinFilled size={"28"}/>
                    Tap
                </button>
                <button className={"flex flex-col items-center text-white text-xs p-2 active:bg-main active:ring-1 active:ring-gray-400 focus:ring-1 focus:ring-gray-400 rounded-lg"}>
                    <FaTasks size={"28"}/>
                    Tasks
                </button>
                <button className={"flex flex-col items-center text-white text-xs p-2 active:bg-main active:ring-1 active:ring-gray-400 focus:ring-1 focus:ring-gray-400 rounded-lg"}>
                    <FaShoppingBag size={"28"}/>
                    Shop
                </button>
            </div>
        </div>
    );
};

export default Footer;