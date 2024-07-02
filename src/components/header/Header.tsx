import {IoIosWallet} from "react-icons/io";
import {IoMdSettings} from "react-icons/io";

const Header = () => {
    const Imgs = {
        avatar : new URL("/imgs/bradpitt.jpg", import.meta.url).href,
    }

    return (
        <div
            className="bg-mainShade p-4 mx-4 rounded-br-3xl rounded-bl-3xl flex items-center justify-between w-auto h-24 sm:h-28 md:h-32 select-none">
            <div className="flex items-center">
                <img className={"w-12 h-12 sm:h-14 sm:w-14 md:w-20 md:h-20 rounded-md ring-2 ring-sandish"} id="bradpitt" src={Imgs.avatar}
                     alt={"User Avatar"}/>
                <div className="ml-4 text-white">
                    <div className="text-xl md:text-3xl font-semibold">username</div>
                    <div className="text-xs md:text-base">group/league</div>
                </div>
            </div>
            <div className="flex space-x-2">
                <button className={"text-white active:text-wheat focus:ring-wheat text-3xl sm:text-4xl md:text-5xl"}><IoIosWallet/>
                </button>
                <button className={"text-white active:text-wheat focus:ring-wheat text-3xl sm:text-4xl md:text-5xl"}><IoMdSettings />
                </button>
            </div>
        </div>

    );
};

export default Header;