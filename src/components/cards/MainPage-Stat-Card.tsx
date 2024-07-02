import {FC} from "react";
import {IStats} from "../types/types";

interface MainPageStatCardProps {
    stats: IStats;
}

const MainPageStatCard: FC<MainPageStatCardProps> = ({stats}) => {
    return (
        <div
            className={"flex columns-2 select-none justify-evenly mt-8 mob1:mt-10 mob2:mt-14"}>
            <div className={"UserBalance w-36 h-20 mob1:w-44 mob1:h-24 mob2:w-48 mob2:h-28 mob3:w-56 mob3:h-32 sm:w-64 sm:h-36 bg-mainShade text-white font-medium text-center rounded-2xl shadow-sm shadow-sandish/50 font-poppinsFont"}>
                <h5 className={"pt-1 mob1:pt-2 mob2:pt-2 mob3:pt-3 text-sm mob2:text-xl"}>Your balance</h5>
                <h2 className={"pt-2 mob1:pt-4 mob2:pt-5 mob3:pt-7 text-2xl mob1:text-3xl mob2:text-4xl mob3:text-5xl"}> {stats.balance} GBs </h2>
            </div>
            <div className={"UserProfit w-36 h-20 mob1:w-44 mob1:h-24 mob2:w-48 mob2:h-28 mob3:w-56 mob3:h-32 sm:w-64 sm:h-36 bg-mainShade text-white font-medium text-center rounded-2xl shadow-sm shadow-sandish/50 font-poppinsFont"}>
                <h5 className={"pt-1 mob1:pt-2 mob2:pt-2 mob3:pt-3 text-sm mob2:text-xl"}> Profit per hour</h5>
                <h2 className={"pt-2 mob1:pt-4 mob2:pt-5 mob3:pt-7 text-2xl mob1:text-3xl mob2:text-4xl mob3:text-5xl"}> {stats.profitphour} KBs</h2>
            </div>
        </div>

    );
};

export default MainPageStatCard;