import PageBodyWrapper from "./PageBodyWrapper.tsx";
import TasksBoard from "../cards/TasksBoard.tsx";
import { motion } from "framer-motion";

const TasksPage = () => {
    return (
        <motion.div
            className={"TasksPage bg-main min-h-screen select-none"}
            initial={{opacity: 0}}
            animate={{opacity: 3}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}
        >
            <PageBodyWrapper>
                <div className={"bg-main overflow-y-auto pb-24"}>
                    <TasksBoard/>
                    <TasksBoard/>
                    <TasksBoard/>
                </div>
            </PageBodyWrapper>
        </motion.div>
    );
};

export default TasksPage;