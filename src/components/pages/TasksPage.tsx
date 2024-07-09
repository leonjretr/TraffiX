import PageBodyWrapper from "./PageBodyWrapper.tsx";
import TasksBoard from "../cards/TasksBoard.tsx";
import { motion } from "framer-motion";

const TasksPage = () => {
    return (
        <motion.div
            className={"TasksPage bg-main min-h-screen select-none pb-24"}
            initial={{opacity: 0}}
            animate={{opacity: 3}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}
        >
            <PageBodyWrapper>
                <div className={"bg-main overflow-y-auto pb-24"}>
                    <TasksBoard category={"Instagram tasks"}/>
                    <TasksBoard category={"Telegram tasks"}/>
                    <TasksBoard category={"Youtube tasks"}/>
                </div>
            </PageBodyWrapper>
        </motion.div>
    );
};

export default TasksPage;