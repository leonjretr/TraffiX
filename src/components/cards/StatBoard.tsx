import { FC } from "react";
import { IStats } from "../types/types";
import BalanceCard from "./BalanceCard.tsx";

interface MainPageStatCardProps {
  stats: IStats;
}

const StatBoard: FC<MainPageStatCardProps> = ({ stats }) => {
  return (
    <div className="flex columns-2 w-full pl-4 pr-4 justify-evenly mt-4">
      <BalanceCard title="Your balance" amount={stats.balance} currency="GBs" />
      <div className="ml-4" />
      <BalanceCard
        title="Profit per hour"
        amount={stats.profitphour}
        currency="KBs"
      />
    </div>
  );
};

export default StatBoard;
