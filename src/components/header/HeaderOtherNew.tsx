import { motion } from "framer-motion";
import HeaderNavbar from "../navbars/HeaderNavbar.tsx";

const Header = () => {
    const avatarUrl = new URL("/imgs/bradpitt.jpg", import.meta.url).href;

    return (
            <motion.div
                className="flex items-center top-0 justify-between bg-greenNew p-4 rounded-br-3xl rounded-bl-3xl w-auto h-24 sm:h-28 md:h-32 select-none"
                initial={{opacity: 0}}
                animate={{opacity: 5}}
                exit={{opacity:0}}
                transition={{duration:0.5}}>
                <div className="flex items-center">
                    <img
                        className="w-12 h-12 sm:h-14 sm:w-14 md:w-20 md:h-20 rounded-2xl"
                        id="bradpitt"
                        src={avatarUrl}
                        alt="User Avatar"
                    />
                    <div className="ml-4 text-white">
                        <div className="text-sm md:text-base font-poppinsFont font-medium text-grayNew">developer</div>
                        <div className="text-xl md:text-3xl font-poppinsFont font-semibold">Michael</div>
                    </div>
                </div>
                <HeaderNavbar/>
            </motion.div>
    );
};

export default Header;
