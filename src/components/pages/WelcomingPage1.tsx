import { motion } from "framer-motion";
import {Link, Outlet} from "react-router-dom";

const WelcomingPage1 = () => {
    const app1 = new URL("/imgs/ourApp2.png", import.meta.url).href;
    return (
        <motion.div
            className={"WelcomingPage1 bg-black min-h-screen"}
            initial={{opacity: 0}}
            animate={{opacity: 3}}
            exit={{opacity:0}}
            transition={{duration:0.2}}>
            <div className={"font-poppinsFont font-semibold text-center pt-16 select-none px-10"}>
                <h1 className={"text-white text-2xl mob3:text-3xl sm:text-4xl"}>Welcome to our app!</h1>
                <h1 className={"text-white text-xl mob3:text-2xl sm:text-3xl mt-4"}>Everything is easy:</h1>
                <h1 className={"text-white text-lg mob3:text-2xl sm:text-3xl font-bold"}>Tap the button - earn a coin</h1>
                <h1 className={"text-gray-400 text-xs mob3:text-base sm:text-xl mt-5"}>Additional things like boosts will be added
                    soon...</h1>
            </div>
            <div className={"flex justify-center mt-8"}>
                <img src={app1} alt={"Screen1"}
                     className={"w-2/5 h-2/5 mob1:w-4/6 mob1:h-4/6 mob2:w-3/4 mob2:h-3/4 mob3:w-4/5 mob3:h-4/5 rounded-md border-2 border-black shadow-2xl shadow-purple-700"}/>
            </div>
            <div className={"flex justify-end"}>
                <Link to={"/guide2"}
                      className={"w-24 h-12 mob3:w-32 mob3:h-20 mob3:text-2xl mr-5 mt-12 mob3:mt-15 mob3:pt-6 mob3:px-6 px-5 py-2.5 rounded-lg text-white font-semibold place-items-center text-lg font-poppinsFont bg-purple-700 focus:bg-purple-900 focus:ring-4 focus:ring-purple-300 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"}>
                    Got it!
                </Link>
                <Outlet/>
            </div>
        </motion.div>
    );
};

export default WelcomingPage1;