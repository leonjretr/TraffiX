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
        <div className="font-poppinsFont text-center w-100 h-18 mob1:h-20 mob2:h-24 rounded-3xl select-none"
        style={{backgroundColor:bgColor}}>
            <h5 className="mt-1 text-xs mob1:text-sm mob2:text-base" style={{color:textColor}}>{title}</h5>
            <h2 className="mt-2 text-2xl mob1:mt-3 mob2:mt-4 mob2:text-3xl" style={{color:textColor}}>
                {amount} {currency}
            </h2>
        </div>
    );
};

export default BalanceCard;
