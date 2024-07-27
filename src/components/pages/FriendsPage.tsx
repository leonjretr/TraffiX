import CopyButton from "../buttons/CopyButton.tsx";
import {motion} from "framer-motion";
import OtherPagesWrapper from "./OtherPagesWrapper.tsx";
import ReferralBoard from "../cards/ReferralBoard.tsx";
import {useEffect, useState} from "react";
import {IFriendsApiResponse} from "../types/types.tsx";
import fetchFriends from "../../fetches/fetchFriends.ts";

const FriendsPage = () => {
    const [friendsData, setFriendsData] = useState<IFriendsApiResponse | undefined>();
    useEffect(() => {
        const fetchData = async () => {
            try {
                fetchFriends().then((data) => setFriendsData(data));
                // const data = await fetchTasks();
                // setCardData(data);
                // if (Array.isArray(data)) {
                //
                // } else {
                //     console.error("Fetched data is not an array:", data);
                // }
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        };
        fetchData();
    }, []);

    const friendsUrl = new URL("/imgs/friends.svg", import.meta.url).href;
    return (
        <OtherPagesWrapper>
            <motion.div
                className={"TopPage bg-bgNewShade min-h-screen overflow-y-auto select-none pb-10"}
                initial={{opacity: 0}}
                animate={{opacity: 2}}
                exit={{opacity: 0}}
                transition={{duration: 0.2}}
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
                <div className={"flex flex-col justify-center text-white m-5"}>
                    <h1 className={"font-poppinsFont font-medium"}>
                        Your friends
                    </h1>
                    {/*тут цикл*/}
                    {friendsData?.results.map((friend, index) =>
                        <ReferralBoard key={index} friendId={friend.id}/>
                    )}

                    {/*<div className={"flex flex-row columns-2"}>*/}
                    {/*    <h1 className={"font-poppinsFont text-sm font-light mt-2"}>*/}
                    {/*        Mark Spencer*/}
                    {/*        <p className={"font-poppinsFont text-xs font-extralight"}>*/}
                    {/*            11 Aug*/}
                    {/*        </p>*/}
                    {/*    </h1>*/}
                    {/*    <h1 className={"flex pl-44 font-poppinsFont text-lg font-bold mt-4"}>*/}
                    {/*        $20*/}
                    {/*    </h1>*/}
                    {/*</div>*/}
                </div>
            </motion.div>
        </OtherPagesWrapper>
    );
};

export default FriendsPage;


{/*<h1 className={"text-white text-5xl font-niceFontSec text-center m-10 select-none"}>Working on*/
}
{/*    it...</h1>*/
}