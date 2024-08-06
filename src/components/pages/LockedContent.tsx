import {motion, useAnimation} from "framer-motion";

const LockedContent = () => {
    const lockUrl = new URL("/imgs/lock.png", import.meta.url).href;
    const controls = useAnimation();

    const handleTap = async () => {
        await controls.start({ rotateZ: [0, -20, 20, -20, 20, -20, 20, 0] });
    }

    return (
        <div
            className="absolute inset-x-5 inset-y-28 bg-bgNew rounded-3xl blur-sm flex place-items-center items-center justify-center">
            <motion.button className={"flex justify-center items-center place-items-center z-10"}
                           onClick={handleTap}
                           animate={controls}
                           transition={{duration: 0.5}}
            >
                <img className={"w-20 h-20"}
                     src={lockUrl}
                     alt={"Locked Content"}/>
            </motion.button>
        </div>
    );
};

export default LockedContent;