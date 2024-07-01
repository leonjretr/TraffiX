import MainPageStatCard from "../cards/MainPage-Stat-Card.tsx";
import {IStats} from "../types/types.tsx";
import MainPageTapCoin from "../buttons/MainPage-TapCoin.tsx";

const MainPageBody = () => {

    const stats:IStats = {balance: 1200, profitphour: 100};

    return (
        <div className={"MainPage"}>
            <MainPageStatCard stats={stats}/>
            <MainPageTapCoin/>
        </div>
    );
};

export default MainPageBody;