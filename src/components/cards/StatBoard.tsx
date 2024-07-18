import {FC} from "react";
import {IStats} from "../types/types";
import BalanceCard from "./BalanceCard.tsx";
import userBalance from "../../stores/userBalance.ts";
import {observer} from "mobx-react-lite";

interface MainPageStatCardProps {
    stats: IStats;
}

const StatBoard: FC<MainPageStatCardProps> = observer(() => {
    return (
        <div className="flex columns-2 w-full px-4 justify-evenly mt-4">
            <BalanceCard title="Your balance" amount={userBalance.balance} currency="KBs"/>
            <div className="ml-4"/>
            <BalanceCard
                title="Profit per hour"
                amount={userBalance.profitperhour}
                currency="KBs"
            />
        </div>
    );
});

export default StatBoard;
