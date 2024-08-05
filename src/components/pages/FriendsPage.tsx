import CopyButton from "../buttons/CopyButton.tsx";
import {motion} from "framer-motion";
import OtherPagesWrapper from "./OtherPagesWrapper.tsx";
import ReferralBoard from "../cards/ReferralBoard.tsx";
import {useEffect, useState} from "react";
import {IFriends} from "../types/types.tsx";
import fetchFriends from "../../fetches/fetchFriends.ts";
import {FRIENDS_PER_PAGE} from "../../config/constants.ts";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingScroll from "../animations/LoadingScroll.tsx";

const FriendsPage = () => {
    const [allFriends, setAllFriends] = useState<IFriends[]>([]);
    const [displayedFriends, setDisplayedFriends] = useState<IFriends[]>([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await fetchFriends();
                if (data?.results != undefined) {
                    setAllFriends(data.results);
                    setDisplayedFriends(data.results.slice(0, FRIENDS_PER_PAGE));
                    setHasMore(data.results.length > FRIENDS_PER_PAGE);
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching tasks:", error);
                setLoading(false);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const fetchMoreData = () => {
        if (loading) return; // Prevent multiple fetches
        setLoading(true);
        setTimeout(() => {
            const startIndex = page * FRIENDS_PER_PAGE;
            const newFriends = allFriends.slice(startIndex, startIndex + FRIENDS_PER_PAGE);
            setDisplayedFriends(prevFriends => [...prevFriends, ...newFriends]);
            setPage(prevPage => prevPage + 1);
            setHasMore(startIndex + FRIENDS_PER_PAGE < allFriends.length);
            setLoading(false);
        }, 1000); // Simulate loading delay
    }

    console.log(allFriends);

    const friendsUrl = new URL("/imgs/friends.svg", import.meta.url).href;

    return (
        <OtherPagesWrapper>
            <motion.div
                className={"TopPage bg-bgNewShade min-h-screen overflow-y-auto select-none pb-24"}
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
                    <InfiniteScroll next={fetchMoreData} hasMore={hasMore}
                                    loader={loading && <div className={"flex justify-center"}><LoadingScroll/></div>}
                                    dataLength={displayedFriends.length}>
                        {displayedFriends.map((friend, index) =>
                            <ReferralBoard key={index} friendName={friend.first_name} friendId={friend.friend}/>
                        )}
                    </InfiniteScroll>
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

// <p className="text-center text-white text-base font-poppinsFont font-base mt-6">
//     loading...
// </p>

// <img className={"bg-white w-10 h-10"}
//      src={loadingUrl}
//      alt={"Loading"}/>
// }