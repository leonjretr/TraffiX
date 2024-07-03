import {FC} from "react";

interface BalanceCardProps {
    title: string;
    amount: number;
    currency: string;
}

const BalanceCard: FC<BalanceCardProps> = ({title, amount, currency}) => (
    <div className="text-white font-poppinsFont text-center w-100 h-24 bg-mainShade rounded-3xl">
        <h5 className="mt-1 text-1xl">{title}</h5>
        <h2 className="mt-3 text-3xl">
            {amount} {currency}
        </h2>
    </div>
);

export default BalanceCard;
