import {motion} from "framer-motion";
import {FC, useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import userStore from "../../stores/userStore.ts";

interface CoinButtonProps {
    profitphour: number
}

const CoinButton: FC<CoinButtonProps> = observer(() => {

    const Imgs = {
        coinImg: new URL("/imgs/coin.png", import.meta.url).href,
    };
    const [positionX, setPositionX] = useState<number>(0);
    const [positionY, setPositionY] = useState<number>(0);
    const [isVisible, setIsVisible] = useState(false);
    // let profitptap = profitphour / 1200;

    let startTouchX: number = 0;
    let startTouchY: number = 0;

    const handleClickAnimation = () => {
        const clickbutton = document.getElementById("coinbutton");

        if (clickbutton) {
            clickbutton.addEventListener("touchstart", (event) => {
                startTouchX = event.changedTouches[0].pageX;
                startTouchY = event.changedTouches[0].pageY;
                setPositionX(startTouchX);
                setPositionY(startTouchY);
                setIsVisible(true);
            })
        }
    }

    const handleBalanceIncrease = () => {
        userStore.tapBalance();
    }

    const handleClick = () => {
        handleClickAnimation();
        handleBalanceIncrease();
    }

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 300); // Hide after 2 seconds
            return () => clearTimeout(timer); // Cleanup the timer
        }
    }, [isVisible]);

    return (
        <div className={"MainPageTapCoin"}>
            <div className={"flex justify-center"}>
                <div className={"relative inline-block mt-2 mob1:mt-5 mob2:mt-12"}>
                    <motion.div
                        whileTap={{scale: 0.92}}
                        className={"rounded-full"}>
                        <img src={Imgs.coinImg} alt={"TapCoin"}
                             className={"flex rounded-full w-64 h-64 mob1:w-80 mob1:h-80 mob2:w-90 mob2:h-90 mx-auto"}
                        />
                        <button
                            id={"coinbutton"}
                            className={"absolute rounded-full inset-0 justify-center w-64 h-64 mob1:w-80 mob1:h-80 mob2:w-90 mob2:h-90 mx-auto bg-transparent"}
                            onClick={handleClick}>
                        </button>
                    </motion.div>

                    {isVisible && (
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: `${positionX * 0.05}px`,
                                y: `${positionY * 0.05}px`
                            }}
                            animate={{
                                opacity: 3,
                                x: `${positionX * 0.05}px`,
                                y: `${positionY * 0.05 - 200}px`
                            }}
                            exit={{
                                opacity: 0,
                                x: `${positionX * 0.05}px`,
                                y: `${positionY * 0.05}px`
                            }}
                            transition={{duration: 0.1}}
                            className="profit-per-tap bg-transparent text-white text-4xl font-bold font-poppinsFont select-none"
                            style={{top: `${positionY * 0.5}px`, left: `${positionX * 0.5}px`, position: 'absolute'}}
                        >
                            +1
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
});

export default CoinButton;
