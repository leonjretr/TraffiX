import HeaderNavbar from "../navbars/HeaderNavbar.tsx";

const Header = () => {
    const avatarUrl = new URL("/imgs/bradpitt.jpg", import.meta.url).href;

    return (
            <div
                className="flex items-center justify-between bg-mainShade p-4 mx-4 rounded-br-3xl rounded-bl-3xl w-auto h-24 sm:h-28 md:h-32 select-none">
                <div className="flex items-center">
                    <img
                        className="w-12 h-12 sm:h-14 sm:w-14 md:w-20 md:h-20 rounded-md ring-2 ring-main"
                        id="bradpitt"
                        src={avatarUrl}
                        alt="User Avatar"
                    />
                    <div className="ml-4 text-white">
                        <div className="text-xl md:text-3xl text-regular">username</div>
                        <div className="text-xs md:text-base text-regular">group/league</div>
                    </div>
                </div>
                <HeaderNavbar/>
            </div>
    );
};

export default Header;
