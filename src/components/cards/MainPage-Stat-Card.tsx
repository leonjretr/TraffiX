import {FC} from "react";
import {IStats} from "../types/types";

interface MainPageStatCardProps {
    stats: IStats;
}

const MainPageStatCard: FC<MainPageStatCardProps> = ({stats}) => {
    return (
        <div
            className={"flex columns-2 select-none justify-evenly"}>
            <div className={"UserBalance w-32 h-24 m-5 bg-sandish text-center rounded-2xl shadow-md shadow-sandish/50 font-poppinsFont"}>
                <h5 className={"pt-2 text-xs"}>Your balance</h5>
                <h2 className={"pt-3 text-2xl"}> {stats.balance} GBs </h2>
            </div>
            <div className={"UserProfit w-32 h-24 m-5 bg-sandish text-center rounded-2xl shadow-md shadow-sandish/50 font-poppinsFont"}>
                <h5 className={"pt-2 text-xs"}> Profit per hour</h5>
                <h2 className={"pt-3 text-2xl"}> {stats.profitphour} KBs</h2>
            </div>
        </div>

    );
};

export default MainPageStatCard;