import {motion} from "framer-motion";
import OtherPagesWrapper from "./OtherPagesWrapper.tsx";
import LockedContent from "./LockedContent.tsx";
import {fadeIn} from "../animations/PageTransition.ts"

const TopPage = () => {
    return (
        <motion.div
            className={"TopPage bg-bgNewShade min-h-screen select-none pb-24"}
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            exit={fadeIn.exit}
            transition={fadeIn.transition}>

            <OtherPagesWrapper>
                <LockedContent/>
            </OtherPagesWrapper>
        </motion.div>
    );
};

export default TopPage;