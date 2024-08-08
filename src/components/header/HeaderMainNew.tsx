import {motion} from "framer-motion";
import HeaderNavbar from "../navbars/HeaderNavbar.tsx";
import StatBoardNew from "../cards/StatBoardNew.tsx";
import {IStats} from "../types/types.tsx";
import {fadeIn} from "../animations/PageTransition.ts"

const HeaderMainNew = () => {
    const avatarUrl = new URL("/imgs/bradpitt.jpg", import.meta.url).href;
    const stats: IStats = {balance: 0, profitphour: 0};

    const tg = window.Telegram.WebApp;
    const userok = tg.initDataUnsafe?.user;

    return (
        <motion.div
            className="bg-greenNew top-0 p-4 rounded-br-3xl rounded-bl-3xl w-auto h-60 mob1:h-64 mob2:h-72 mob3:h-80 select-none"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            exit={fadeIn.exit}
            transition={fadeIn.transition}>
            <div className={"flex justify-between"}>
                <div className="flex mt-3 sm:ml-2 md:ml-3">
                    <img
                        className="w-12 h-12 sm:h-14 sm:w-14 md:w-20 md:h-20 rounded-2xl"
                        id="bradpitt"
                        src={avatarUrl}
                        alt="User Avatar"
                    />
                    <div className="ml-4 text-white">

                        <div className="text-sm mob3:text-lg font-poppinsFont font-medium text-grayNew">
                            good afternoon,
                        </div>

                        <div className="text-xl mob3:text-3xl font-poppinsFont font-semibold">{userok?.username}</div>
                    </div>
                </div>
                <div className={"mt-6"}>
                    <HeaderNavbar/>
                </div>
            </div>
            <div className="text-white mt-5 mob1:mt-7 ml-2 sm:ml-2 md:ml-3">
                <div className="text-sm md:text-base font-poppinsFont font-medium text-grayNew">your league</div>
                <div className="text-xl md:text-lg font-poppinsFont font-semibold">developer</div>
            </div>
            <div>
                <StatBoardNew stats={stats}/>
            </div>
        </motion.div>
    );
};

export default HeaderMainNew;