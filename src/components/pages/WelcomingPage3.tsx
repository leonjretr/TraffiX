import { motion } from "framer-motion";
import {Link, Outlet} from "react-router-dom";

const WelcomingPage3 = () => {
    const app3 = new URL("/imgs/ourApp3.png", import.meta.url).href;
    return (
        <motion.div
            className={"WelcomingPage2 bg-black h-screen"}
            initial={{opacity: 0}}
            animate={{opacity: 3}}
            exit={{opacity:0}}
            transition={{duration:0.2}}>
            <div className={"font-poppinsFont font-semibold text-center pt-16 select-none px-7"}>
                <h1 className={"text-white text-2xl mob3:text-3xl"}>Also, you can earn from inviting your friends!</h1>
                <h1 className={"text-gray-400 text-sm mob3:text-lg mt-5"}>Each friend can bring you up to 2000TR</h1>
            </div>
            <div className={"flex justify-center mt-8"}>
                <img src={app3} alt={"Screen3"}
                     className={"w-4/6 h-4/6 mob2:w-2/4 mob2:h-2/4 mix-blend-lighten rounded-md border-2 border-black shadow-2xl shadow-purple-700"}/>
            </div>
            <div className={"flex justify-end"}>
                <Link to={"/"}
                    className={"w-36 h-12 mob3:w-32 mob3:h-20 mob2:text-2xl mr-5 mt-7 mob1:mt-12 text-center rounded-lg text-white font-semibold place-items-center text-lg font-poppinsFont bg-purple-700 focus:bg-purple-900 focus:ring-4 focus:ring-purple-300 px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"}>
                    Let's dive!
                </Link>
                <Outlet/>
            </div>
        </motion.div>
    );
};

export default WelcomingPage3;