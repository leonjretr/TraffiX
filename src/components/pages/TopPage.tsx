import {motion} from "framer-motion";
import PageBodyWrapper from "./PageBodyWrapper.tsx";

const TopPage = () => {
    return (
        <motion.div
            className={"TopPage bg-main h-screen"}
            initial={{opacity: 0}}
            animate={{opacity: 3}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}>

            <PageBodyWrapper>
                <h1 className={"text-white text-5xl font-niceFontSec text-center m-10 select-none"}>Working on
                    it...</h1>
            </PageBodyWrapper>
        </motion.div>
    );
};

export default TopPage;