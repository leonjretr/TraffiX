import {motion} from "framer-motion"
import MainPageWrapper from "./MainPageWrapper.tsx";
import CoinButton from "../buttons/CoinButton.tsx";
import {cubeRotation} from "../animations/PageTransition.ts";

const MainPageNew = () => {
    return (
        <MainPageWrapper>
            <motion.div
                className={"MainPage bg-bgNewShade h-full select-none"}
                initial={cubeRotation.initial}
                animate={cubeRotation.animate}
                exit={cubeRotation.exit}
                transition={cubeRotation.transition}
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