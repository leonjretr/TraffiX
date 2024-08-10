import {motion} from "framer-motion";
import Divider from "../Divider.tsx";
import {FC} from "react";

interface FarmCardProps {
    cardTitle: string;
    features: string[];
    featuresProfit?: number;
    featuresTotal?: number;
}


const FarmCard: FC<FarmCardProps> = ({cardTitle, features, featuresProfit, featuresTotal}) => {
    const iconURL = new URL("/imgs/trump.jpg", import.meta.url).href
    const coinURL = new URL("/imgs/coin.png", import.meta.url).href
    return (
        <motion.div className="flex flex-col bg-bgNew w-40 h-28 rounded-lg select-none"
                    whileTap={{scale: 0.87}}>
            <div className="flex">
                <div className={"flex justify-start m-2"}>
                    <img src={iconURL} alt="Icon" className={"w-10 h-14 rounded-lg"}/>
                </div>
                <Divider classname={"border-l border-bgNewShade h-full"}/>
                <div className={"ml-2 mt-2 flex-col font-poppinsFont text-left text-white"}>
                    <h1 className={"text-xs font-medium"}>{cardTitle}</h1>
                    {features.map((feature) => (
                        <div className={"flex text-xxxs font-normal gap-3"}>
                            <h1>{feature}</h1>
                            <div className={"flex gap-0.5 items-center"}>
                                <h1>+{featuresProfit}</h1>
                                <img className={"w-2 h-2"} src={coinURL} alt={"Coin"}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={"flex flex-col"}>
                <Divider classname={"border-t-2 border-bgNewShade w-full"}/>
            </div>
            <div
                className={"ml-2 mt-1 grid grid-flow-col grid-rows-2  text-white font-poppinsFont font-medium"}>
                {features.map((feature) => (
                    <div className={"flex text-xxxs font-normal gap-3 "}>
                        <h1>{feature}</h1>
                        <div className={"flex gap-0.5 items-center"}>
                            <h1>{featuresTotal}</h1>
                            <img className={"w-2 h-2"} src={coinURL} alt={"Coin"}/>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default FarmCard;