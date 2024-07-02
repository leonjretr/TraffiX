import { FC } from "react";
import { IStats } from "../types/types";

interface MainPageStatCardProps {
  stats: IStats;
}

const MainPageStatCard: FC<MainPageStatCardProps> = ({ stats }) => {
  return (
    <div className="flex columns-2 w-full pl-4 pr-4 justify-evenly mt-4">
      <div className="text-white text-regular text-center w-100 h-20 bg-mainShade rounded-3xl">
        <h5 className="mt-1 text-sm text-1xl">Your balance</h5>
        <h2 className="mt-1 text-2xl">{stats.balance} GBs</h2>
      </div>

      <div className="text-white text-regular text-center w-100 h-20 bg-mainShade rounded-3xl ml-4">
        <h5 className="mt-1 text-sm text-1xl">Profit per hour</h5>
        <h2 className="mt-1 text-2xl">{stats.profitphour} KBs</h2>
      </div>
    </div>
  );
};

export default MainPageStatCard;
