import {FC} from "react";
import {FaCheck} from "react-icons/fa6";
import {MdArrowForwardIos} from "react-icons/md";

interface TasksCardProps {
    avatar: string;
    taskTitle: string;
    taskProfit: string;
    completed: boolean;
}

const TasksCard: FC<TasksCardProps> = ({avatar, taskTitle, taskProfit, completed}) => {

    const coinUrl = new URL("/imgs/coin.png", import.meta.url).href;

    return (
        <div className="TasksCard flex columns-2 flex-row justify-center select-none">
            <div
                className="flex w-100 pl-3 items-center text-white font-poppinsFont text-left h-14 mob1:w-72 mob2:w-96 mob3:w-110 mob3:h-20 bg-mainShade rounded-l-xl mt-6">
                <img
                    className="w-10 h-10 sm:h-14 sm:w-14 md:w-16 md:h-16 rounded-full"
                    id="taskAvatar"
                    src={avatar}
                    alt="Task Avatar"
                />
                <div className="pl-3">
                    <h5 className="texl-lg text-left">{taskTitle}</h5>
                    <div className="flex flex-row">
                        <img src={coinUrl} alt="" className="h-5 w-5"/>
                        <h2 className="text-sm text-left ml-1">{taskProfit}</h2>
                    </div>
                </div>
            </div>
            {completed ? (
                <div className="flex w-24 h-14 mob3:h-20 mt-6 rounded-r-xl bg-green-500 place-items-center mob1:pl-3 mob2:pl-5 mob3:pl-5">
                    <FaCheck className="ml-2 mt-2" size="40px"/>
                </div>
            ) : (
                <div className="flex w-24 h-14 mob3:h-20 mt-6 rounded-r-xl bg-neutral-700 place-items-center mob1:pl-3 mob2:pl-5 mob3:pl-5">
                    <MdArrowForwardIos className="ml-2" size="40px" color="gray"/>
                </div>
            )}
        </div>
    );
};

export default TasksCard;
