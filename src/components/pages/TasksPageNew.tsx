import TasksBoard from "../cards/TasksBoard.tsx";
import {motion} from "framer-motion";
import OtherPagesWrapper from "./OtherPagesWrapper.tsx";

const TasksPageNew = () => {

    return (
        <motion.div
            className={"TasksPage bg-bgNewShade min-h-screen select-none"}
            initial={{opacity: 0}}
            animate={{opacity: 3}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}
        >
            <OtherPagesWrapper>
                <div className={"bg-bgNewShade overflow-y-auto pb-24"}>
                    <TasksBoard/>
                </div>
            </OtherPagesWrapper>
        </motion.div>
    );
};

export default TasksPageNew;