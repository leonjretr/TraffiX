import TasksBoard from "../cards/TasksBoard.tsx";
import {motion} from "framer-motion";
import OtherPagesWrapper from "./OtherPagesWrapper.tsx";
import {cubeRotation} from "../animations/PageTransition.ts";

const TasksPageNew = () => {

    return (
        <motion.div
            className={"TasksPage bg-bgNewShade min-h-screen select-none"}
            initial={cubeRotation.initial}
            animate={cubeRotation.animate}
            exit={cubeRotation.exit}
            transition={cubeRotation.transition}
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