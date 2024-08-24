import TasksBoard from "../cards/TasksBoard.tsx";
import {motion} from "framer-motion";
import OtherPagesWrapper from "./OtherPagesWrapper.tsx";
import {fadeIn} from "../animations/PageTransitions.ts";

const TasksPageNew = () => {

    return (
        <OtherPagesWrapper>
            <motion.div
                className={"TasksPage bg-bgNewShade min-h-screen overflow-y-auto select-none pb-24"}
                initial={fadeIn.initial}
                animate={fadeIn.animate}
                exit={fadeIn.exit}
                transition={fadeIn.transition}
            >

                <TasksBoard/>

            </motion.div>
        </OtherPagesWrapper>

    );
};

export default TasksPageNew;