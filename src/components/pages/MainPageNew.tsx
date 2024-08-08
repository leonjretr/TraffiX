import {motion} from "framer-motion"
import MainPageWrapper from "./MainPageWrapper.tsx";
import CoinButton from "../buttons/CoinButton.tsx";
import {fadeIn} from "../animations/PageTransition.ts";

const MainPageNew = () => {
    return (
        <MainPageWrapper>
            <motion.div
                className={"MainPage bg-bgNewShade h-full select-none"}
                initial={fadeIn.initial}
                animate={fadeIn.animate}
                exit={fadeIn.exit}
                transition={fadeIn.transition}
            >
                <CoinButton profitphour={1200}/>
                <div className="flex justify-center text-white font-poppinsFont font-semibold mt-1 mob1:mt-3 mob2:mt-5 items-end gap-2">
                    <div className={"text-3xl"}>Tap</div>
                    <div className={"text-xl"}>and</div>
                    <div className={"text-3xl"}>Earn</div>
                </div>
            </motion.div>
        </MainPageWrapper>
    );
};

export default MainPageNew;