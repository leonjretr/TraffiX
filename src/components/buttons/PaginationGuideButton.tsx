import {FC} from "react";

interface PaginationGuideButton {
    bgCurrent: boolean;
}
const PaginationGuideButton:FC<PaginationGuideButton> = ({bgCurrent}) => {
    return (
        <div className="w-3 h-3 rounded-full"
             style={bgCurrent ? {backgroundColor:"white"} : {backgroundColor:"gray"}}>
        </div>
    );
};

export default PaginationGuideButton;