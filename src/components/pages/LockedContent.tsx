import {motion} from "framer-motion";

const LockedContent = () => {
    const lockUrl = new URL("/imgs/lock.png", import.meta.url).href;
    // const [isAnimating, setAnimating] = useState(false);
    // const handleTap = () => {
    //     setAnimating(true);
    //     console.log(isAnimating);
    // }
    return (
        <div
            className="absolute inset-x-5 inset-y-28 bg-bgNew rounded-3xl blur-sm flex place-items-center items-center justify-center">
            <motion.button className={"flex justify-center items-center place-items-center z-10"}
                           whileHover={{scale: 1.3}}
                           whileTap={{scale:1.25, rotate:60}}
                           // animate={isAnimating && {rotate: [0, 80, -30, 0]}}
                           // onTap={handleTap}
                           // onAnimationComplete={() => setAnimating(false)}
            >
                <img className={"w-20 h-20"}
                     src={lockUrl}
                     alt={"Locked Content"}/>
            </motion.button>
        </div>
    );
};

export default LockedContent;