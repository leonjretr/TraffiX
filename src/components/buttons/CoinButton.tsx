import {motion} from "framer-motion";
import React, {FC, useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import userStore from "../../stores/userStore.ts";

interface CoinButtonProps {
    profitphour: number
}

const CoinButton: FC<CoinButtonProps> = observer(() => {

    const Imgs = {
        coinImg: new URL("/imgs/coin.png", import.meta.url).href,
    };
    const [touches, setTouches] = useState<Array<{id: number, x: number, y: number}>>([]);

    const handleTouchStart = (event: React.TouchEvent<HTMLButtonElement>) => {
        const newTouches = Array.from(event.changedTouches).map(touch => ({
            id: touch.identifier,
            x: touch.pageX,
            y: touch.pageY,
        }));
        setTouches(prevTouches => [...prevTouches, ...newTouches]);
        userStore.tapBalance();
    };

    useEffect(() => {
        if (touches.length > 0) {
            const timer = setTimeout(() => {
                setTouches([]);
            }, 250); // Hide after 0.3 seconds
            return () => clearTimeout(timer); // Cleanup the timer
        }
    }, [touches]);

    return (
        <div className={"MainPageTapCoin"}>
            <div className={"flex justify-center"}>
                <div className={"relative inline-block mt-4 mob1:mt-8 mob2:mt-14"}>
                    <motion.div
                        whileTap={{scale: 0.92}}
                        className={"rounded-full"}>
                        <img src={Imgs.coinImg} alt={"TapCoin"}
                             className={"flex rounded-full w-64 h-64 mob1:w-80 mob1:h-80 mob2:w-90 mob2:h-90 mx-auto"}
                        />
                        <button
                            id={"coinbutton"}
                            className={"absolute rounded-full inset-0 justify-center w-64 h-64 mob1:w-80 mob1:h-80 mob2:w-90 mob2:h-90 mx-auto bg-transparent"}
                            onTouchStart={handleTouchStart}>
                        </button>
                    </motion.div>

                    {touches.map((touch) => (
                        <motion.div
                            key={touch.id}
                            initial={{
                                opacity: 0,
                                x: `${touch.x * 0.05}px`,
                                y: `${touch.y * 0.05}px`
                            }}
                            animate={{
                                opacity: 1,
                                x: `${touch.x * 0.05}px`,
                                y: `${touch.y * 0.05 - 200}px`
                            }}
                            exit={{
                                opacity: 0,
                                x: `${touch.x * 0.05}px`,
                                y: `${touch.y * 0.05}px`
                            }}
                            transition={{duration: 0.1}}
                            className="profit-per-tap bg-transparent text-white text-4xl font-bold font-poppinsFont select-none"
                            style={{top: `${touch.y * 0.5}px`, left: `${touch.x * 0.5}px`, position: 'absolute'}}
                        >
                            +1
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
});

export default CoinButton;
