import { motion } from "framer-motion";
import FarmCard from "./FarmCard.tsx";
import {fadeIn} from "../animations/PageTransitions.ts";

const FarmBoard = () => {
    const features = [
        "Energy 3x",
        "Money 2x",
    ];
    return (
        <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            exit={fadeIn.exit}
            transition={fadeIn.transition}
            className="flex flex-col justify-start">
            <div className={"grid grid-flow-row grid-cols-2 gap-x-3 gap-y-3 mx-5 mt-3"}>
                <FarmCard cardTitle={"4GB"} features={features} featuresProfit={300} featuresTotal={1200}/>
                <FarmCard cardTitle={"8GB"} features={features} featuresProfit={200} featuresTotal={990}/>
                <FarmCard cardTitle={"12GB"} features={features} featuresProfit={100} featuresTotal={733}/>
            </div>

        </motion.div>
    );
};

export default FarmBoard;