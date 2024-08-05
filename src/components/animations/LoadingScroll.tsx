import {motion} from "framer-motion";

const LoadingScroll = () => {
    return (
        <div className="mt-5">
            <motion.div
                animate={{rotate: 360}}
                transition={{loop: Infinity, duration: 1, ease: "linear"}}
                className={"flex float-right h-8 w-8 border-white border-solid border-4 border-t-4 border-t-green-500 border-t-solid rounded-full box-border"}>
            </motion.div>
        </div>
    );
};

export default LoadingScroll;