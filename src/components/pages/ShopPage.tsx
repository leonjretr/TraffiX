import {motion} from "framer-motion";
import OtherPagesWrapper from "./OtherPagesWrapper.tsx";
// import LockedContent from "./LockedContent.tsx";
import {fadeIn} from "../animations/PageTransitions.ts";
import FarmBoard from "../cards/FarmBoard.tsx";

const ShopPage = () => {
    return (

        <motion.div
            className={"TopPage bg-bgNewShade min-h-screen overflow-y-auto select-none pb-28"}
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            exit={fadeIn.exit}
            transition={fadeIn.transition}>

            <OtherPagesWrapper>
                {/*<LockedContent/>*/}
                <FarmBoard/>
            </OtherPagesWrapper>
        </motion.div>

    );
};

export default ShopPage;