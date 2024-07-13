import { motion } from "framer-motion";
import OtherPagesWrapper from "./OtherPagesWrapper.tsx";

const ShopPage = () => {
    return (
        <motion.div
            className={"TopPage bg-bgNewShade min-h-screen select-none"}
            initial={{opacity: 0}}
            animate={{opacity: 3}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}>
            <OtherPagesWrapper>
                <h1 className={"text-white text-5xl font-niceFont text-center m-10 select-none"}>Working on it...</h1>
            </OtherPagesWrapper>
        </motion.div>
    );
};

export default ShopPage;