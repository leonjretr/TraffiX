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
import ModalAddFriend from "../modals/ModalAddFriend.tsx";
import AddFriendButton from "../buttons/AddFriendButton.tsx";

const FriendsPage = () => {
    const friendsUrl = new URL("/imgs/friends.svg", import.meta.url).href;

    const [isModalOpened, setIsModalOpened] = useState(false);

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

    const openModal = () => {
        setIsModalOpened(true);
    };
    const closeModal = () => {
        setIsModalOpened(false);
    };
    useEffect(() => {
        if (isModalOpened) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isModalOpened]);


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
                    <div className={"flex flex-row items-center gap-2"}>
                        <h1 className={"font-poppinsFont font-medium"}>
                            Your friends
                        </h1>
                        <div className={"w-fit"}>
                            <AddFriendButton openModal={openModal}/>
                        </div>
                    </div>

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

                <ModalAddFriend showModal={isModalOpened} closeModal={closeModal}>
                    <motion.button
                        whileTap={{scale: 1.3}}
                        onClick={closeModal}
                        className="flex float-right -mt-5 -mr-2 pb-1 place-items-center text-black text-3xl font-sans font-medium">
                        &times;
                    </motion.button>
                    <h2 className="text-xl text-center text-black font-poppinsFont font-semibold mb-3">
                        Add a friend
                    </h2>
                    <h2 className="text-sm text-center text-black font-poppinsFont font-semibold mb-1">
                        You can easily add friends by entering their ID and get a reward of 1000TR!
                    </h2>
                    <div className="mb-5">
                        <label htmlFor="large-input"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Enter your friend's ID
                        </label>
                        <input type="text" id="large-input"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"/>
                    </div>
                    <motion.button
                        whileTap={{scale: 0.9}}
                        onClick={closeModal}
                        className="w-auto px-4 py-2 bg-gray-400 text-white text-center rounded-md hover:bg-gray-500 active:ring active:ring-gray-400 font-sans font-medium">
                        Add
                    </motion.button>
                </ModalAddFriend>
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