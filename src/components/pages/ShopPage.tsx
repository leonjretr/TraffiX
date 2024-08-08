import {motion} from "framer-motion";
import OtherPagesWrapper from "./OtherPagesWrapper.tsx";
import LockedContent from "./LockedContent.tsx";
import {cubeRotation} from "../animations/PageTransition.ts";

const ShopPage = () => {
    return (
        <motion.div
            className={"TopPage bg-bgNewShade min-h-screen select-none"}
            initial={cubeRotation.initial}
            animate={cubeRotation.animate}
            exit={cubeRotation.exit}
            transition={cubeRotation.transition}>

            <OtherPagesWrapper>
                <LockedContent/>
            </OtherPagesWrapper>
        </motion.div>
    );
};

export default ShopPage;