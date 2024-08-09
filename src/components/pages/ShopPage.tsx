import {motion} from "framer-motion";
import OtherPagesWrapper from "./OtherPagesWrapper.tsx";
import LockedContent from "./LockedContent.tsx";
import {fadeIn} from "../animations/PageTransitions.ts";

const ShopPage = () => {
    return (

        <motion.div
            className={"TopPage bg-bgNewShade min-h-screen select-none"}
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

export default ShopPage;