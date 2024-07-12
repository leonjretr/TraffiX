import StatBoard from "../cards/StatBoard.tsx";
import {IStats} from "../types/types.tsx";
import CoinButton from "../buttons/CoinButton.tsx";
import PageBodyWrapper from "./PageBodyWrapper.tsx";
import {motion} from "framer-motion";

const MainPage = () => {
    const stats: IStats = {balance: 1200, profitphour: 100};

    return (
        <PageBodyWrapper>
            <motion.div
                className={"MainPage bg-main min-h-dvh select-none overflow-hidden pb-10"}
                initial={{opacity: 0}}
                animate={{opacity: 3}}
                exit={{opacity: 0}}
                transition={{duration: 0.2}}
            >

                <div className={"min-h-screen"}>
                    <StatBoard stats={stats}/>
                    <CoinButton profitphour={stats.profitphour}/>
                </div>
            </motion.div>
        </PageBodyWrapper>
    );
};

export default MainPage;
