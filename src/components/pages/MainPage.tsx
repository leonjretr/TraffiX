import StatBoard from "../cards/StatBoard.tsx";
import { IStats } from "../types/types.tsx";
import CoinButton from "../buttons/CoinButton.tsx";
import PageBodyWrapper from "./PageBodyWrapper.tsx";

const MainPage = () => {
  const stats: IStats = { balance: 1200, profitphour: 100 };

  return (
    <div className={"MainPage"}>
      <PageBodyWrapper>
        <div>
          <StatBoard stats={stats} />
          <CoinButton />
        </div>
      </PageBodyWrapper>
    </div>
  );
};

export default MainPage;
