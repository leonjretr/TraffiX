import {motion} from "framer-motion"
import PageBodyWrapperNew from "./PageBodyWrapperNew.tsx";
import CoinButton from "../buttons/CoinButton.tsx";

const MainPageNew = () => {
    return (
        <PageBodyWrapperNew>
            <motion.div
                className={"MainPage bg-bgNew min-h-screen select-none"}
                initial={{opacity: 0}}
                animate={{opacity: 3}}
                exit={{opacity: 0}}
                transition={{duration: 0.2}}
            >
                <CoinButton profitphour={1200}/>
                <div className="flex justify-center text-white font-poppinsFont font-semibold mt-5 items-end gap-2">
                    <div className={"text-4xl"}>Tap</div>
                    <div className={"text-xl"}>and</div>
                    <div className={"text-4xl"}>Earn</div>
                </div>
            </motion.div>
        </PageBodyWrapperNew>
    );
};

export default MainPageNew;