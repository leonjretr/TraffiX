import { MdInsertChartOutlined } from "react-icons/md";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { CiHome } from "react-icons/ci";
import { FaTasks } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";

const Footer = () => {
    return (
        <div className="bg-mainShade p-4 ml-4 mt-52 rounded-tr-3xl rounded-tl-3xl w-11/12 h-16 select-none">
            <div className={"flex justify-evenly items-center"}>
                <div className={"flex-col inline-block items-center text-white"}>
                    <MdInsertChartOutlined size={"24"}/>
                    <h3 className={"text-xs m-0.5"}>Top</h3>
                </div>
                <div className={"flex flex-col items-center text-white"}>
                    <LiaUserFriendsSolid size={"24"}/>
                    <h3 className={"text-xs m-0.5"}>Friends</h3>
                </div>
                <div className={"flex flex-col items-center text-white"}>
                    <CiHome size={"24"}/>
                    <h3 className={"text-xs m-0.5 "}>Main</h3>
                </div>
                <div className={"flex flex-col items-center text-white"}>
                    <FaTasks size={"24"}/>
                    <h3 className={"text-xs m-0.5"}>Tasks</h3>
                </div>
                <div className={"flex flex-col items-center text-white"}>
                    <MdOutlineShoppingBag size={"24"}/>
                    <h3 className={"text-xs m-0.5"}>Shop</h3>
                </div>
            </div>
        </div>
    );
};

export default Footer;