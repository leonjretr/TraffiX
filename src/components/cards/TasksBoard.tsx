import TasksCard from "../cards/TasksCard.tsx";
import {FC} from "react";

interface TaskBoardProps {
    category: string;
}

const TasksBoard: FC<TaskBoardProps> = ({category}) => {

    const avatarUrl = new URL("/imgs/insta.svg", import.meta.url).href;
    const avatarUrl2 = new URL("/imgs/telegram.jpg", import.meta.url).href;
    const avatarUrl3 = new URL("/imgs/bradpitt.jpg", import.meta.url).href;

    return (
        <div className={"TaskBoard"}>
            <h1 className={"text-white text-2xl font-poppinsFont text-center mt-5 select-none"}>{category}</h1>
            <div className="flex flex-col columns-1 px-4">
                <TasksCard avatarUrl={avatarUrl} taskTitle={"Show tits"} taskProfit={"300 KB"} completed={true}/>
                <TasksCard avatarUrl={avatarUrl2} taskTitle={"Show ass"} taskProfit={"300 MB"} completed={false}/>
                <TasksCard avatarUrl={avatarUrl3} taskTitle={"Show pussy"} taskProfit={"1 GB"} completed={false}/>
            </div>
        </div>

    );
};

export default TasksBoard;