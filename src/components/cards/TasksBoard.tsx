import TasksCard from "../cards/TasksCard.tsx";
import {useEffect, useState} from "react";
import {ITaskApiResponse} from "../types/types.tsx";
import fetchTasks from "../../fetches/fetchTasks.ts";
import ModalTasks from "../modals/ModalTasks.tsx";
import {motion} from "framer-motion";


const TasksBoard = () => {
    const [isModalOpened, setIsModalOpened] = useState(false);

    const [cardData, setCardData] = useState<ITaskApiResponse | undefined>();
    useEffect(() => {
        const fetchData = async () => {
            try {
                fetchTasks().then((data) => setCardData(data));
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
        <div className={"TaskBoard pb-5"}>
            <h1 className={"text-white text-2xl font-poppinsFont text-center mt-5 select-none"}>Your tasks</h1>
            <motion.div
                whileTap={{scale:0.9}}
                className="flex flex-col columns-1 px-6">
                {cardData?.results.map((card, index) =>
                    <TasksCard openModal={openModal} key={index} avatar={card.icon} taskTitle={card.name} taskProfit={card.reward}
                    category={card.category}/>
                )}
            </motion.div>
            <ModalTasks showModal={isModalOpened} closeModal={closeModal}>
                <h2 className="text-sm text-center text-gray-500 font-poppinsFont font-semibold mb-4">
                    Do you want to start this task?
                </h2>
                <motion.button
                    whileTap={{scale: 0.9}}
                    onClick={closeModal}
                    className="w-auto px-4 py-2 bg-green-500 text-white text-center rounded-md hover:bg-green-600 active:ring active:ring-gray-400 font-sans font-medium">
                    Yep
                </motion.button>
                <motion.button
                    whileTap={{scale: 0.9}}
                    onClick={closeModal}
                    className="w-auto px-4 py-2 bg-red-600 text-white text-center rounded-md hover:bg-red-700 active:ring active:ring-gray-400 font-sans font-medium">
                    Nope, a bit later
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