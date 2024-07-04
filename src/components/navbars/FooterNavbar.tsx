import {FaChartSimple} from "react-icons/fa6";
import {FaShoppingBag, FaTasks, FaUserFriends} from "react-icons/fa";
import {TbCoinFilled} from "react-icons/tb";
import {Link, Outlet} from "react-router-dom";

const FooterNavbar = () => {
    return (
        <div className="flex justify-around">
            <Link
                className="flex flex-col items-center text-white text-base mob2:text-lg p-1 mob2:p-0.5 active:bg-main active:ring-1 active:ring-gray-400 focus:ring-1 focus:ring-gray-400 rounded-lg"
                to={"/top"}>
                <FaChartSimple className="text-4xl mob1:text-4xl mob2:text-4xl sm:text-5xl"/>
                Top
            </Link>
            <Link
                className="flex flex-col items-center text-white text-base mob2:text-lg p-1 mob2:p-0.5 active:bg-main active:ring-1 active:ring-gray-400 focus:ring-1 focus:ring-gray-400 rounded-lg"
                to={"/friends"}>
                <FaUserFriends className="text-4xl mob1:text-4xl mob2:text-4xl sm:text-5xl"/>
                Friends
            </Link>
            <Link
                className="flex flex-col items-center text-white text-base mob2:text-lg p-1 mob2:p-0.5 active:bg-main active:ring-1 active:ring-gray-400 focus:ring-1 focus:ring-gray-400 rounded-lg"
                to={"/"}>
                <TbCoinFilled className="text-4xl mob1:text-4xl mob2:text-4xl sm:text-5xl"/>
                Tap
            </Link>
            <Link
                className="flex flex-col items-center text-white text-base mob2:text-lg p-1 mob2:p-0.5 active:bg-main active:ring-1 active:ring-gray-400 focus:ring-1 focus:ring-gray-400 rounded-lg"
                to={"/tasks"}>
                <FaTasks className="text-4xl mob1:text-4xl mob2:text-4xl sm:text-5xl"/>
                Tasks
            </Link>
            <Link
                className="flex flex-col items-center text-white text-base mob2:text-lg p-1 mob2:p-0.5 active:bg-main active:ring-1 active:ring-gray-400 focus:ring-1 focus:ring-gray-400 rounded-lg"
                to={"/shop"}>
                <FaShoppingBag className="text-4xl mob1:text-4xl mob2:text-4xl sm:text-5xl"/>
                Shop
            </Link>
            <Outlet/>
        </div>
    );
};

export default FooterNavbar;
