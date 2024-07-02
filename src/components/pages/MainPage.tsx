import StatBoard from "../cards/StatBoard.tsx";
import { IStats } from "../types/types.tsx";
import CoinButton from "../buttons/CoinButton.tsx";
import PageBodyWrapper from "./PageWrapper.tsx";

const MainPage = () => {
  const stats: IStats = { balance: 1200, profitphour: 100 };

  return (
    <div className={"MainPage"}>
      <PageBodyWrapper>
        <StatBoard stats={stats} />
        <CoinButton />
      </PageBodyWrapper>
    </div>
  );
};

export default MainPage;
