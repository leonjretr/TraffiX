import {FC} from "react";

interface ReferralBoardProps {
    friendId:number
}

const ReferralBoard:FC<ReferralBoardProps> = ({friendId}) => {
    return (
        <div className={"select-none"}>
            <div className={"flex flex-row columns-2"}>
                <h1 className={"font-poppinsFont text-sm text-white font-light mt-2"}>
                    {friendId}
                </h1>
                <h1 className={"flex pl-44 font-poppinsFont text-lg font-bold mt-4"}>
                    500TR
                </h1>
            </div>
        </div>
    );
};

export default ReferralBoard;


{/*<p className={"font-poppinsFont text-xs font-extralight"}>*/}
{/*    11 Aug*/}
{/*</p>*/}