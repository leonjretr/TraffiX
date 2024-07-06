import StatBoard from "../cards/StatBoard.tsx";
import {IStats} from "../types/types.tsx";
import CoinButton from "../buttons/CoinButton.tsx";
import PageBodyWrapper from "./PageBodyWrapper.tsx";
import {motion} from "framer-motion";

const MainPage = () => {
    const stats: IStats = {balance: 1200, profitphour: 100};

    return (
        <motion.div
            className={"MainPage"}
            initial={{opacity: 0}}
            animate={{opacity: 5}}
            exit={{opacity:0}}
            transition={{duration:0.5}}
        >
            <PageBodyWrapper>
                <div className={"pb-24"}>
                    <StatBoard stats={stats}/>
                    <CoinButton/>
                </div>
            </PageBodyWrapper>
        </motion.div>
    );
};

export default MainPage;
