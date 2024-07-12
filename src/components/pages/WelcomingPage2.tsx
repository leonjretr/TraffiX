import { motion } from "framer-motion";
import {Link, Outlet} from "react-router-dom";
import PaginationGuideButton from "../buttons/PaginationGuideButton.tsx";

const WelcomingPage2 = () => {
    const app2 = new URL("/imgs/ourApp2.png", import.meta.url).href;
    return (
        <motion.div
            className={"WelcomingPage2 bg-black min-h-screen select-none"}
            initial={{opacity: 0}}
            animate={{opacity: 3}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}>
            <div className={"font-poppinsFont font-semibold text-center pt-12 select-none px-10"}>
                <h1 className={"text-white text-xl mob3:text-2xl"}>You can perform tasks and earn easy coins</h1>
                <h1 className={"text-white text-lg mob3:text-xl mt-4"}>Easier tasks bring you less coins, harder - more
                    coins</h1>
            </div>
            <div className={"flex justify-center mt-8"}>
                <img src={app2} alt={"Screen2"}
                     className={"w-2/5 h-2/5 mob1:w-3/5 mob1:h-3/5 mob2:w-3/4 mob2:h-3/4 mob3:w-4/5 mob3:h-4/5 rounded-md border-2 border-black shadow-2xl shadow-purple-700"}/>
            </div>
            <div className={"flex gap-2 justify-center mt-10"}>
                <PaginationGuideButton bgCurrent={false}/>
                <PaginationGuideButton bgCurrent={true}/>
                <PaginationGuideButton bgCurrent={false}/>
            </div>
            <div className={"flex justify-end"}>
                <Link to={"/guide3"}
                      className={"w-24 h-12 mob3:w-32 mob3:h-20 mob3:text-2xl mr-5 mt-5 mob3:mt-14 mob3:pt-6 mob3:px-6 px-5 py-2.5 rounded-lg text-white font-semibold place-items-center text-lg font-poppinsFont bg-purple-700 focus:bg-purple-900 focus:ring-4 focus:ring-purple-300 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"}>
                    Got it!
                </Link>
                <Outlet/>
            </div>
        </motion.div>
    );
};

export default WelcomingPage2;