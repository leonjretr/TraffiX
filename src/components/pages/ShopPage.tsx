import { motion } from "framer-motion";
import PageBodyWrapper from "./PageBodyWrapper.tsx";

const ShopPage = () => {
    return (
        <motion.div
            className={"TopPage bg-main min-h-screen select-none pb-24"}
            initial={{opacity: 0}}
            animate={{opacity: 3}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}>
            <PageBodyWrapper>
                <h1 className={"text-white text-5xl font-niceFont text-center m-10 select-none"}>Working on it...</h1>
            </PageBodyWrapper>
        </motion.div>
    );
};

export default ShopPage;