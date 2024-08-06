import TasksCard from "../cards/TasksCard.tsx";
import {useEffect, useState} from "react";
import {ITasks} from "../types/types.tsx";
import fetchTasks from "../../fetches/fetchTasks.ts";
import {motion} from "framer-motion";
import ModalTasks from "../modals/ModalTasks.tsx";
import {TASKS_PER_PAGE} from "../../config/constants.ts";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingScroll from "../animations/LoadingScroll.tsx";

const TasksBoard = () => {

    const [allTasks, setAllTasks] = useState<ITasks[]>([]);
    const [displayedTasks, setDisplayedTasks] = useState<ITasks[]>([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(true);

    const [selectedTask, setSelectedTask] = useState<ITasks | null>(null);
    const [isModalOpened, setIsModalOpened] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await fetchTasks();
                if (data?.results != undefined) {
                    setAllTasks(data.results);
                    setDisplayedTasks(data.results.slice(0, TASKS_PER_PAGE));
                    setHasMore(data.results.length > TASKS_PER_PAGE);
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
            const startIndex = page * TASKS_PER_PAGE;
            const newTasks = allTasks.slice(startIndex, startIndex + TASKS_PER_PAGE);
            setDisplayedTasks(prevTasks => [...prevTasks, ...newTasks]);
            setPage(prevPage => prevPage + 1);
            setHasMore(startIndex + TASKS_PER_PAGE < allTasks.length);
            setLoading(false);
        }, 500); // Simulate loading delay
    }

    const openModal = (task: ITasks) => {
        setIsModalOpened(true);
        setSelectedTask(task);
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
        <div className={"TaskBoard pb-5"}>
            <h1 className={"text-white text-2xl font-poppinsFont text-center mt-5 select-none"}>Your tasks</h1>
            <div className="flex flex-col columns-1 px-6">
                <InfiniteScroll next={fetchMoreData} hasMore={hasMore}
                                loader={loading && <div className={"flex justify-center"}><LoadingScroll/></div>}
                                dataLength={displayedTasks.length}>
                    {displayedTasks.map((task, index) =>
                        <TasksCard openModal={() => openModal(task)}
                                   key={index} avatar={task.icon} taskTitle={task.name}
                                   taskProfit={task.reward}
                                   category={task.category}
                        />
                    )}
                </InfiniteScroll>
            </div>

            <ModalTasks showModal={isModalOpened} closeModal={closeModal}>
                <motion.button
                    whileTap={{scale: 1.3}}
                    onClick={closeModal}
                    className="flex float-right -mt-5 -mr-2 pb-1 place-items-center text-black text-3xl font-sans font-medium">
                    &times;
                </motion.button>

                {selectedTask && (
                    <>
                        <h2 className="text-xl text-center text-black font-poppinsFont font-semibold mb-4">
                            Task Description
                        </h2>
                        <h2 className="text-base text-center text-gray-800 font-poppinsFont font-semibold mb-2">
                            {selectedTask.name}
                        </h2>
                        <div className={"flex justify-center items-center mb-4"}>
                            <h2 className="text-base text-center text-gray-800 font-poppinsFont font-semibold">
                                And get: &nbsp;
                            </h2>
                            <h2 className="text-lg text-center text-black font-poppinsFont font-bold">
                                {selectedTask.reward} TR coins
                            </h2>
                        </div>
                        <h2 className="text-sm text-center text-gray-500 font-poppinsFont font-semibold mb-4">
                            Do you want to start this task?
                        </h2>
                    </>
                )}

                <motion.button
                    whileTap={{scale: 0.9}}
                    onClick={closeModal}
                    className="w-auto px-4 py-2 bg-gray-400 text-white text-center rounded-md hover:bg-gray-500 active:ring active:ring-gray-400 font-sans font-medium">
                    Start the task!
                </motion.button>
            </ModalTasks>
        </div>
    );
};

export default TasksBoard;

// const avatarUrl = new URL("/imgs/insta.svg", import.meta.url).href;
// const avatarUrl2 = new URL("/imgs/telegram.jpg", import.meta.url).href;
// const avatarUrl3 = new URL("/imgs/bradpitt.jpg", import.meta.url).href;
// const cardsData = [
//     {avatar: avatarUrl2, taskTitle: "Show tits", taskProfit: "300 KB", completed: true},
//     {avatar: avatarUrl, taskTitle: "Show pussy", taskProfit: "300 GB", completed: false},
//     {avatar: avatarUrl3, taskTitle: "Show ass", taskProfit: "300 MB", completed: true}
// ]


// const data = await fetchTasks();
// setCardData(data);
// if (Array.isArray(data)) {
//
// } else {
//     console.error("Fetched data is not an array:", data);
// }