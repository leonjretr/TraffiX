import {motion} from "framer-motion";
import {Link, Outlet} from "react-router-dom";
import PaginationGuideButton from "../buttons/PaginationGuideButton.tsx";

const WelcomingPage3 = () => {
    const app3 = new URL("/imgs/ourApp3.png", import.meta.url).href;
    const text = "Also, you can earn from inviting your friends!".split(" ");
    const text2 = "Each friend can bring you up to 20$".split(" ");

    const textAnim = (textProp:string[]) => {
        return (
            textProp.map((el: string, i: number) => (
                <motion.span initial={{opacity: 0}} animate={{opacity: 1}}
                             transition={{duration: 0.5, delay: i / 10}}
                             key={i}>
                    {el}{" "}
                </motion.span>
            ))
        )
    }

    return (
        <motion.div
            className={"WelcomingPage2 bg-black min-h-screen select-none"}
            initial={{opacity: 0}}
            animate={{opacity: 3}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}>
            <div className={"font-poppinsFont font-semibold text-center pt-12 select-none px-7"}>
                <h1 className={"text-white text-xl mob3:text-3xl"}>{textAnim(text)}</h1>
                <h1 className={"text-gray-400 text-sm mob3:text-lg mt-5"}>{textAnim(text2)}</h1>
            </div>
            <div className={"flex justify-center mt-8"}>
                <img src={app3} alt={"Screen3"}
                     className={"w-2/5 h-2/5 mob1:w-3/5 mob1:h-3/5 mob2:w-3/4 mob2:h-3/4 mob3:w-4/5 mob3:h-4/5 rounded-md border-2 border-black shadow-2xl shadow-purple-700"}/>
            </div>
            <div className={"flex gap-2 justify-center mt-10"}>
                <PaginationGuideButton bgCurrent={false}/>
                <PaginationGuideButton bgCurrent={false}/>
                <PaginationGuideButton bgCurrent={true}/>
            </div>
            <div className={"flex justify-end"}>
                <motion.div whileTap={{scale: 0.85}}>
                    <Link to={"/main"}
                          className={"w-30 h-12 text-base mob3:w-32 mob3:h-20 mob2:text-xl mr-5 mt-5 mob3:mt-15 text-center rounded-lg text-white font-semibold place-items-center font-poppinsFont bg-purple-700 focus:bg-purple-900 focus:ring-4 focus:ring-purple-300 px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"}>
                        Let's dive!
                    </Link>
                </motion.div>
                <Outlet/>
            </div>
        </motion.div>
    );
};

export default WelcomingPage3;