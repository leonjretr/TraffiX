import {motion} from "framer-motion";
import Divider from "../dividers/Divider.tsx";
import {FC} from "react";

interface FarmCardProps {
    cardTitle: string;
    features: string[];
    featuresProfit?: number;
    featuresTotal?: number;
}


const FarmCard: FC<FarmCardProps> = ({cardTitle, features, featuresProfit, featuresTotal}) => {
    const iconURL = new URL("/imgs/pc.jpg", import.meta.url).href
    const coinURL = new URL("/imgs/coin.png", import.meta.url).href

    // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    // const handleModalOpen = () => {
    //     setIsModalOpen(true);
    // }
    // const handleModalClose = () => {
    //     setIsModalOpen(false);
    // }

    return (
        <motion.div className="flex flex-col bg-bgNew w-full h-28 mob1:h-36 rounded-lg select-none"
                    whileTap={{scale: 0.87}}
        >
            <div className="flex">
                <div className={"flex justify-start m-2"}>
                    <img src={iconURL} alt="Icon" className={"w-12 h-16 rounded-lg"}/>
                </div>
                <Divider classname={"border-l border-bgNewShade h-full"}/>
                <div className={"ml-2 mt-2 flex-col font-poppinsFont text-left text-white mr-2"}>
                    <h1 className={"text-xs mob1:text-sm mob2:text-base font-medium"}>{cardTitle}</h1>
                    <div className={"flex"}>
                        <div className={"flex flex-col"}>
                            {features.map((feature, index) => (
                                <div key={index} className={"flex text-xxxs mob1:text-xxs font-normal gap-3"}>
                                    <h1>{feature}</h1>
                                </div>
                            ))}
                        </div>
                        <div className={"flex flex-col ml-3"}>
                            {features.map((index) => (
                                <div key={index}
                                     className={"flex gap-0.5 items-center text-xxxs mob1:text-xxs font-normal"}>
                                    <h1>+{featuresProfit}</h1>
                                    <img className={"w-2 h-2"} src={coinURL} alt={"Coin"}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className={"flex flex-col"}>
                <Divider classname={"border-t-2 border-bgNewShade w-full"}/>
            </div>
            <div className={"flex mt-1 mob1:mt-2 ml-2 text-white font-poppinsFont font-medium"}>
                <div
                    className={"flex flex-col"}>
                    {features.map((feature, index) => (
                        <div key={index} className={"flex text-xxxs mob1:text-xxs font-normal"}>
                            <h1>{feature}</h1>
                        </div>
                    ))}
                </div>
                <div className={"flex flex-col"}>
                    {features.map((index) => (
                        <div key={index}
                             className={"flex ml-3 gap-0.5 items-center text-xxxs mob1:text-xxs font-normal"}>
                            <h1>{featuresTotal}</h1>
                            <img className={"w-2 h-2"} src={coinURL} alt={"Coin"}/>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default FarmCard;