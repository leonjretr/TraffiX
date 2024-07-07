import { motion } from "framer-motion";
import {Link, Outlet} from "react-router-dom";
// import {MdOutlineArrowForwardIos} from "react-icons/md";

const WelcomingPage1 = () => {
    const app1 = new URL("/imgs/ourApp.png", import.meta.url).href;
    return (
        <motion.div
            className={"WelcomingPage1 bg-black flex flex-col flex-grow h-screen"}
            initial={{opacity: 0}}
            animate={{opacity: 3}}
            exit={{opacity:0}}
            transition={{duration:0.2}}>
            <div className={"font-poppinsFont font-semibold text-center pt-16 select-none"}>
                <h1 className={"text-white text-2xl mob3:text-3xl"}>Welcome to our app!</h1>
                <h1 className={"text-white text-xl mob3:text-2xl mt-3"}>Everything is easy:</h1>
                <h1 className={"text-white text-xl mob3:text-2xl font-bold"}>Tap the button - earn a coin</h1>
                <h1 className={"text-gray-400 text-xs mt-5"}>Additional things like boosts will be added soon...</h1>
            </div>
            <div className={"flex justify-center mt-10"}>
                <img src={app1} alt={"Screen1"}
                     className={"w-3/4 h-3/4 mob3:w-2/4 mob3:h-2/4 mix-blend-lighten rounded-md border-2 border-black shadow-2xl shadow-purple-700"}/>
            </div>
            <div className={"flex justify-end"}>
                <Link to={"/guide2"}
                    className={"w-24 h-12 mob3:w-32 mob3:h-20 mob3:text-2xl text-center mr-5 mt-7 mob3:mt-12 mob3:pt-6 rounded-lg text-white font-semibold px-5 py-2.5 mob2:py-5 text-lg font-poppinsFont bg-purple-700 focus:bg-purple-900 focus:ring-4 focus:ring-purple-300 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"}>
                    {/*<MdOutlineArrowForwardIos className={"text-2xl text-white"}/>*/}
                    Got it!
                </Link>
                <Outlet/>
            </div>
        </motion.div>
    );
};

export default WelcomingPage1;