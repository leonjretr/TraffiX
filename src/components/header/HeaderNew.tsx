import {motion} from "framer-motion";
import HeaderNavbar from "../navbars/HeaderNavbar.tsx";
import StatBoardNew from "../cards/StatBoardNew.tsx";
import {IStats} from "../types/types.tsx";

const HeaderNew = () => {
    const avatarUrl = new URL("/imgs/bradpitt.jpg", import.meta.url).href;
    const stats: IStats = {balance: 0, profitphour:0};

    return (
        <motion.div
            className="bg-greenNew shadow-lg shadow-greenNew/50 ring-2 ring-greenNew p-4 rounded-br-3xl rounded-bl-3xl w-auto h-64 mob1:h-72 select-none"
            initial={{opacity: 0}}
            animate={{opacity: 5}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}>
            <div className={"flex justify-between"}>
                <div className="flex mt-3 sm:ml-2 md:ml-3">
                    <img
                        className="w-12 h-12 sm:h-14 sm:w-14 md:w-20 md:h-20 rounded-2xl"
                        id="bradpitt"
                        src={avatarUrl}
                        alt="User Avatar"
                    />
                    <div className="ml-4 text-white">
                        <div className="text-sm mob2:text-lg font-poppinsFont font-medium text-grayNew">good afternoon,
                        </div>
                        <div className="text-xl mob2:text-3xl font-poppinsFont font-semibold">Michael</div>
                    </div>
                </div>
                <div className={"mt-6"}>
                    <HeaderNavbar/>
                </div>
            </div>
            <div className="text-white mt-10 ml-2 sm:ml-2 md:ml-3">
                <div className="text-sm md:text-lg font-poppinsFont font-medium text-grayNew">your league</div>
                <div className="text-xl md:text-xl font-poppinsFont font-semibold">developer</div>
            </div>
            <div>
                <StatBoardNew stats={stats}/>
            </div>
        </motion.div>
    );
};

export default HeaderNew;
