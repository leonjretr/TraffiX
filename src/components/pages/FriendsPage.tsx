import PageBodyWrapper from "./PageBodyWrapper.tsx";
import CopyButton from "../buttons/CopyButton.tsx";
import { motion } from "framer-motion";


const FriendsPage = () => {

    const friendsUrl = new URL("/imgs/friends.svg", import.meta.url).href;
    return (
        <PageBodyWrapper>
            <motion.div
                className={"TopPage bg-main min-h-screen select-none pb-10"}
                initial={{opacity: 0}}
                animate={{opacity: 2}}
                exit={{opacity:0}}
                transition={{duration:0.2}}
            >
                    <div className="flex flex-col items-center justify-center overflow-y-auto">
                        <img src={friendsUrl} alt={"Referral"}
                             className={"w-56 h-56 mob1:w-60 mob1:h-60 mob2:w-72 mob2:h-72 mob3:w-96 mob3:h-96 mt-5"}/>
                        <h1 className={"text-white text-3xl mob2:text-4xl mob3:text-5xl font-poppinsFont font-semibold text-center m-2 select-none"}>
                            Refer & Earn
                        </h1>
                        <h1 className={"text-gray-50 text-base mob2:text-lg mob3:text-2xl font-poppinsFont font-normal text-center ml-10 mr-10 select-none"}>
                            Share the code with your friend and get up to 1000 traffiX coins!
                        </h1>
                        <CopyButton/>
                    </div>
                    <div className={"text-white m-5"}>
                        <h1 className={"font-poppinsFont font-medium"}>
                            People you've already invited:
                        </h1>
                        {/*тут цикл*/}
                        <div className={"select-none"}>
                            <div className={"flex flex-row columns-2"}>
                                <h1 className={"font-poppinsFont text-sm font-light mt-2"}>
                                    Mark Spencer
                                    <p className={"font-poppinsFont text-xs font-extralight"}>
                                        11 Aug
                                    </p>
                                </h1>
                                <h1 className={"flex pl-44 font-poppinsFont text-lg font-bold mt-4"}>
                                    500TR
                                </h1>
                            </div>
                            <div className={"flex flex-row columns-2"}>
                                <h1 className={"font-poppinsFont text-sm font-light mt-2"}>
                                    Mark Spencer
                                    <p className={"font-poppinsFont text-xs font-extralight"}>
                                        11 Aug
                                    </p>
                                </h1>
                                <h1 className={"flex pl-44 font-poppinsFont text-lg font-bold mt-4"}>
                                    $20
                                </h1>
                            </div>
                        </div>
                    </div>
            </motion.div>
        </PageBodyWrapper>
    );
};

export default FriendsPage;


{/*<h1 className={"text-white text-5xl font-niceFontSec text-center m-10 select-none"}>Working on*/
}
{/*    it...</h1>*/
}