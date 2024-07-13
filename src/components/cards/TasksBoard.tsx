import TasksCard from "../cards/TasksCard.tsx";
import {FC} from "react";

interface TaskBoardProps {
    category: string;
}

const TasksBoard: FC<TaskBoardProps> = ({category}) => {

    const avatarUrl = new URL("/imgs/insta.svg", import.meta.url).href;
    const avatarUrl2 = new URL("/imgs/telegram.jpg", import.meta.url).href;
    const avatarUrl3 = new URL("/imgs/bradpitt.jpg", import.meta.url).href;
    // фетчу апиху
    // заполняю cardsData
    // внизу мапом отрисовываю
    const cardsData = [
        {avatar: avatarUrl2, taskTitle: "Show tits", taskProfit: "300 KB", completed: true},
        {avatar: avatarUrl, taskTitle: "Show pussy", taskProfit: "300 GB", completed: false},
        {avatar: avatarUrl3, taskTitle: "Show ass", taskProfit: "300 MB", completed: true}
    ]
    return (
        <div className={"TaskBoard pb-5"}>
            <h1 className={"text-white text-2xl font-poppinsFont text-center mt-5 select-none"}>{category}</h1>
            <div className="flex flex-col columns-1 px-6">

                {cardsData.map((card, index) =>
                    <TasksCard key={index} avatar={card.avatar} taskTitle={card.taskTitle} taskProfit={card.taskProfit}
                               completed={card.completed}/>
                )}
            </div>
        </div>

    );
};

export default TasksBoard;
