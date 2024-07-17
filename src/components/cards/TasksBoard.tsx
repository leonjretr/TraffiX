import TasksCard from "../cards/TasksCard.tsx";
import {useEffect, useState} from "react";
import {ITaskApiResponse} from "../types/types.tsx";
import fetchTasks from "../fetches/fetchTasks.ts";


const TasksBoard = () => {

    // const avatarUrl = new URL("/imgs/insta.svg", import.meta.url).href;
    // const avatarUrl2 = new URL("/imgs/telegram.jpg", import.meta.url).href;
    // const avatarUrl3 = new URL("/imgs/bradpitt.jpg", import.meta.url).href;
    // const cardsData = [
    //     {avatar: avatarUrl2, taskTitle: "Show tits", taskProfit: "300 KB", completed: true},
    //     {avatar: avatarUrl, taskTitle: "Show pussy", taskProfit: "300 GB", completed: false},
    //     {avatar: avatarUrl3, taskTitle: "Show ass", taskProfit: "300 MB", completed: true}
    // ]
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

    return (
        <div className={"TaskBoard pb-5"}>
            <h1 className={"text-white text-2xl font-poppinsFont text-center mt-5 select-none"}>Your tasks</h1>
            <div className="flex flex-col columns-1 px-6">
                {cardData?.results.map((card, index) =>
                    <TasksCard key={index} avatar={card.icon} taskTitle={card.name} taskProfit={card.reward}
                    category={card.category}/>
                )}
            </div>
        </div>

    );
};

export default TasksBoard;
