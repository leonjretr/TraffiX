import {FC} from "react";

interface BalanceCardProps {
    title: string;
    amount: number;
    currency: string;
    bgColor:string;
    textColor:string;
}

const BalanceCard: FC<BalanceCardProps> = ({title, amount, currency, bgColor, textColor}) => {

    return (
        <div className="font-poppinsFont text-center w-100 h-24 rounded-3xl select-none"
        style={{backgroundColor:bgColor}}>
            <h5 className="mt-1 text-1xl" style={{color:textColor}}>{title}</h5>
            <h2 className="mt-3 text-3xl" style={{color:textColor}}>
                {amount} {currency}
            </h2>
        </div>
    );
};

export default BalanceCard;
