// import {motion} from "framer-motion";
import {motion} from "framer-motion";
import {FC, useEffect, useState} from "react";

interface CoinButtonProps {
    profitphour: number
}

const CoinButton: FC<CoinButtonProps> = () => {

    const Imgs = {
        coinImg: new URL("/imgs/coin.png", import.meta.url).href,
    };
    const [positionX, setPositionX] = useState<number>(0);
    const [positionY, setPositionY] = useState<number>(0);
    const [isVisible, setIsVisible] = useState(false);
    // let profitptap = profitphour / 1200;

    let startTouchX: number = 0;
    let startTouchY: number = 0;

    const handleClick = () => {
        const clickbutton = document.getElementById("coinbutton");

        if (clickbutton) {
            clickbutton.addEventListener("touchstart", (event) => {
                startTouchX = event.changedTouches[0].pageX;
                startTouchY = event.changedTouches[0].pageY;
                setPositionX(startTouchX);
                setPositionY(startTouchY);
                console.log(positionY);
                setIsVisible(true);
            })
        }
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
                <div className={"relative inline-block mt-14 sm:mt-8"}>
                    <img src={Imgs.coinImg} alt={"TapCoin"}
                         className={
                             "flex w-72 h-72 mob1:w-80 mob1:h-80 mob2:w-96 mob2:h-96 mob3:w-100 mob3:h-100 mx-auto"
                         }
                    />
                    <button
                        id={"coinbutton"}
                        className={"absolute inset-0 justify-center rounded-full w-72 h-72 mob1:w-80 mob1:h-80 mob2:w-96 mob2:h-96 mob3:w-100 mob3:h-100 mx-auto bg-transparent"}
                        onClick={handleClick}>
                    </button>

                    {isVisible && (
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: `${positionX*0.05}px`,
                                y: `${positionY*0.05}px`
                            }}
                            animate={{
                                opacity: 3,
                                x: `${positionX*0.05}px`,
                                y: `${positionY*0.05-200}px`
                            }}
                            exit={{
                                opacity: 0,
                                x: `${positionX*0.05}px`,
                                y: `${positionY*0.05}px`
                            }}
                            transition={{duration: 0.1}}
                            className="profit-per-tap bg-transparent text-white text-4xl font-bold font-poppinsFont select-none"
                            style={{top: `${positionY * 0.5}px`, left: `${positionX*0.5}px`, position: 'absolute'}}
                        >
                            +7
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CoinButton;