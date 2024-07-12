import {Outlet} from "react-router-dom";
import {FaChartSimple} from "react-icons/fa6";
import {FaShoppingBag, FaTasks, FaUserFriends} from "react-icons/fa";
import {TbCoinFilled} from "react-icons/tb";
import FooterButtonsNew from "../buttons/FooterButtonsNew.tsx";

const FooterNavbarNew = () => {
    return (
        <div className="flex justify-around">
            <FooterButtonsNew routingPath="/top" icon={<FaChartSimple />} label="Top" />
            <FooterButtonsNew routingPath="/friends" icon={<FaUserFriends/>} label="Friends" />
            <FooterButtonsNew routingPath="/" icon={<TbCoinFilled/>} label="Tap" />
            <FooterButtonsNew routingPath="/tasks" icon={<FaTasks />} label="Tasks" />
            <FooterButtonsNew routingPath="/shop" icon={<FaShoppingBag />} label="Shop" />
            <Outlet/>
        </div>
    );
};

export default FooterNavbarNew;