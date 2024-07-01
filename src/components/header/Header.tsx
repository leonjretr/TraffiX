import {IoIosWallet} from "react-icons/io";
import {IoMdSettings} from "react-icons/io";

const Header = () => {
    const Imgs = {
        avatar : new URL("/imgs/bradpitt.jpg", import.meta.url).href,
    }

    return (
        <div
            className="bg-mainShade p-4 ml-4 rounded-br-3xl rounded-bl-3xl flex items-center justify-between w-11/12 select-none">
            <div className="flex items-center">
                <img className={"w-10 h-10 rounded-md"} id="bradpitt" src={Imgs.avatar}
                     alt={"User Avatar"}/>
                <div className="ml-4 text-white">
                    <div className="text-xl font-semibold">username</div>
                    <div className="text-xs">group/league</div>
                </div>
            </div>
            <div className="flex space-x-2">
                <button className={"text-sandish active:text-wheat focus:ring-wheat"}><IoIosWallet size={"25"}/>
                </button>
                <button className={"text-sandish active:text-wheat focus:ring-wheat"}><IoMdSettings size={"25"}/>
                </button>
            </div>
        </div>

    );
};

export default Header;