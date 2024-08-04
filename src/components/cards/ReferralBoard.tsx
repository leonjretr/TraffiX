import {FC} from "react";

interface ReferralBoardProps {
    friendName: string | null;
    friendId: number;
}

const ReferralBoard: FC<ReferralBoardProps> = ({friendId}) => {
    const userUrl = new URL("/imgs/bradpitt.jpg", import.meta.url).href;
    return (
        <div className={"select-none"}>
            <div
                className={"flex pl-3 items-center text-white font-poppinsFont text-left h-12 mob3:h-24 bg-bgNew rounded-xl mt-4"}>
                {/*<h1 className={"font-poppinsFont text-sm text-white font-light mt-2"}>*/}
                {/*    {friendName}*/}
                {/*</h1>*/}
                <img
                    className="w-10 h-10 sm:h-14 sm:w-14 md:w-16 md:h-16 rounded-xl ring-2 ring-bgNewShade"
                    id="taskAvatar"
                    src={userUrl}
                    alt="Task Avatar"
                />

                <h1 className={"flex font-poppinsFont text-white font-light mt-1 ml-3 text-sm"}>
                    {friendId}
                </h1>
                {/*<h1 className={"font-poppinsFont text-lg font-bold mt-4 justify-end ml-3"}>*/}
                {/*    500TR*/}
                {/*</h1>*/}
                {/*<div className={"flex font-poppinsFont text-white font-light mt-1 ml-3 float-right"}>*/}
                {/*    <h1 className={"text-lg"}>*/}
                {/*        500TR*/}
                {/*    </h1>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default ReferralBoard;