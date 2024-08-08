import TasksBoard from "../cards/TasksBoard.tsx";
import {motion} from "framer-motion";
import OtherPagesWrapper from "./OtherPagesWrapper.tsx";
import {fadeIn} from "../animations/PageTransition.ts";

const TasksPageNew = () => {

    return (
        <motion.div
            className={"TasksPage bg-bgNewShade min-h-screen select-none"}
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            exit={fadeIn.exit}
            transition={fadeIn.transition}
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