import PageBodyWrapper from "./PageBodyWrapper.tsx";
import TasksBoard from "../cards/TasksBoard.tsx";

const TasksPage = () => {
    return (
        <div className={"TasksPage bg-main h-dvh"}>
            <PageBodyWrapper>
                <div className={"bg-main"}>
                    <TasksBoard category={"Instagram tasks"}/>
                    <TasksBoard category={"Telegram tasks"}/>
                    <TasksBoard category={"Sex tasks"}/>
                </div>
            </PageBodyWrapper>
        </div>
    );
};

export default TasksPage;