import {motion} from "framer-motion";
import OtherPagesWrapper from "./OtherPagesWrapper.tsx";
import LockedContent from "./LockedContent.tsx";

const TopPage = () => {
    return (
        <motion.div
            className={"TopPage bg-bgNewShade min-h-screen select-none pb-24"}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}>

            <OtherPagesWrapper>
                {/*<h1 className={"text-white text-5xl font-niceFontSec text-center m-10 select-none"}>Working on*/}
                {/*    it...</h1>*/}
                <LockedContent/>
            </OtherPagesWrapper>
        </motion.div>
    );
};

export default TopPage;