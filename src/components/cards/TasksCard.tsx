import { FC } from "react";
import { FaCheck } from "react-icons/fa6";
import { MdArrowForwardIos } from "react-icons/md";

interface TasksCardProps {
  avatarUrl: string;
  taskTitle: string;
  taskProfit: string;
  completed: boolean;
}

const TasksCard: FC<TasksCardProps> = ({
  avatarUrl,
  taskTitle,
  taskProfit,
  completed,
}) => {
  const coinUrl = new URL("/imgs/coin.png", import.meta.url).href;

  return (
    <div className="TasksCard flex columns-2 flex-row justify-center select-none">
      <div className="flex w-100 items-center pl-7 text-white font-poppinsFont text-left h-20 mob1:w-72 mob2:w-96 mob3:w-110 mob3:h-24 bg-mainShade rounded-l-3xl mt-6">
        <img
          className="w-10 h-10 sm:h-14 sm:w-14 md:w-20 md:h-20 rounded-full"
          id="taskAvatar"
          src={avatarUrl}
          alt="Task Avatar"
        />
        <div className="pl-3">
          <h5 className="texl-lg text-left">{taskTitle}</h5>
          <div className="flex flex-row">
            <img src={coinUrl} alt="" className="h-5 w-5" />
            <h2 className="text-sm text-left ml-1">{taskProfit}</h2>
          </div>
        </div>
      </div>
      {completed ? (
        <div className="flex w-24 h-20 mob3:h-24 mt-6 rounded-r-3xl bg-green-500 items-center">
          <FaCheck className="ml-2 mt-2" size="40px" />
        </div>
      ) : (
        <div className="flex w-24 h-20 mob3:h-24 mt-6 rounded-r-3xl bg-neutral-700 items-center">
          <MdArrowForwardIos className="ml-2" size="40px" color="gray" />
        </div>
      )}
    </div>
  );
};

export default TasksCard;
