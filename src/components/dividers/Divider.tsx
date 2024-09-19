import {FC} from "react";

interface DividerProps {
    classname: string;
}
const Divider:FC<DividerProps> = ({classname}) => {
    return (
        <div className={classname}></div>
    );
};

export default Divider;