import TasksCard from "../cards/TasksCard.tsx";
import {useEffect, useState} from "react";
import {ITaskApiResponse, ITasks} from "../types/types.tsx";
import fetchTasks from "../../fetches/fetchTasks.ts";
import {motion} from "framer-motion";
import ModalTasks from "../modals/ModalTasks.tsx";


const TasksBoard = () => {

    const [selectedTask, setSelectedTask] = useState<ITasks | null>(null);
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

    const openModal = (task:ITasks) => {
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
                {cardData?.results.map((card, index) =>
                    <TasksCard openModal={() => openModal(card)}
                               key={index} avatar={card.icon} taskTitle={card.name}
                               taskProfit={card.reward}
                               category={card.category}
                    />
                )}
            </div>
            <ModalTasks showModal={isModalOpened} closeModal={closeModal}>
                <motion.button
                    whileTap={{scale: 0.9}}
                    onClick={closeModal}
                    className="flex float-right -mt-5 -mr-2 pb-1 place-items-center text-black text-3xl font-sans font-medium">
                    &times;
                </motion.button>
                {selectedTask && (
                    <>
                        <h2 className="text-xl text-center text-black font-poppinsFont font-semibold mb-4">
                            Task Description
                        </h2>
                        <h2 className="text-base text-center text-gray-700 font-poppinsFont font-semibold mb-4">
                            {selectedTask.name}
                        </h2>
                        <h2 className="text-sm text-center text-gray-500 font-poppinsFont font-semibold mb-4">
                            Do you want to start this task?
                        </h2>
                    </>
                )}
                <motion.button
                    whileTap={{scale: 0.9}}
                    onClick={closeModal}
                    className="w-auto px-4 py-2 bg-green-500 text-white text-center rounded-md hover:bg-green-600 active:ring active:ring-gray-400 font-sans font-medium">
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