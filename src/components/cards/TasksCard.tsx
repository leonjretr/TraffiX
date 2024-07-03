import {FC} from "react";

interface TasksCardProps {
    avatarUrl: string;
    taskTitle: string;
    taskProfit: string;
    completed: boolean;
}

const TasksCard: FC<TasksCardProps> = ({avatarUrl, taskTitle, taskProfit, completed}) => {

    const bgCompletedOrNot = {
        backgroundColor: completed ? "green" : "red"
    }

    return (
        <div className={"TasksCard flex columns-2 flex-row justify-start select-none"}>
            <div
                className="flex items-center pl-7 text-white font-poppinsFont text-left w-64 h-20 mob1:w-72 mob2:w-96 mob3:w-110 mob3:h-24 bg-mainShade rounded-tl-full rounded-bl-full mt-6">
                <img
                    className="w-10 h-10 sm:h-14 sm:w-14 md:w-20 md:h-20 rounded-full"
                    id="taskAvatar"
                    src={avatarUrl}
                    alt="Task Avatar"
                />
                <div className={"pl-3"}>
                    <h5 className="texl-lg text-left">{taskTitle}</h5>
                    <h2 className="text-sm text-left">{taskProfit}</h2>
                </div>

            </div>
            <div className={"flex w-16 h-20 mob3:h-24 mt-6 rounded-tr-full rounded-br-full"}
                 style={bgCompletedOrNot}>
            </div>
        </div>
    );
};

export default TasksCard;