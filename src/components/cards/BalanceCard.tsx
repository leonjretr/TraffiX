import { FC } from "react";

interface BalanceCardProps {
  title: string;
  amount: number;
  currency: string;
}

const BalanceCard: FC<BalanceCardProps> = ({ title, amount, currency }) => (
  <div className="text-white text-regular text-center w-100 h-20 bg-mainShade rounded-3xl">
    <h5 className="mt-1 text-sm text-1xl">{title}</h5>
    <h2 className="mt-1 text-2xl">
      {amount} {currency}
    </h2>
  </div>
);

export default BalanceCard;
