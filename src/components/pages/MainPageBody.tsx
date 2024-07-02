import MainPageStatCard from "../cards/MainPage-Stat-Card.tsx";
import {IStats} from "../types/types.tsx";
import CoinButton from "../buttons/CoinButton.tsx";

const MainPageBody = () => {

    const stats:IStats = {balance: 1200, profitphour: 100};

    return (
        <div className={"MainPage"}>
            <MainPageStatCard stats={stats}/>
            <CoinButton/>
        </div>
    );
};

export default MainPageBody;