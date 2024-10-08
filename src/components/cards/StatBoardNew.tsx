import {FC} from "react";
import {IStats} from "../types/types";
import userBalance from "../../stores/userBalance.ts";
import {observer} from "mobx-react-lite";
import BalanceCardNew from "./BalanceCardNew.tsx";
import userStore from "../../stores/userStore.ts";

interface MainPageStatCardProps {
    stats: IStats;
}

const StatBoard: FC<MainPageStatCardProps> = observer(() => {
    return (
        <div className="flex columns-2 w-full px-4 justify-evenly mt-4">
            <BalanceCardNew title="your balance" amount={userStore.balance} currency="KBs"
            bgColor={"black"}
            textColor={"white"}/>
            <div className="ml-4"/>
            <BalanceCardNew
                title="profit per hour"
                amount={userBalance.profitperhour}
                currency="KBs"
                bgColor={"white"}
                textColor={"black"}
            />
        </div>
    );
});

export default StatBoard;
