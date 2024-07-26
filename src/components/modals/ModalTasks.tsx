import React, {FC} from "react";

interface ModalTasksProps {
    showModal: boolean;
    closeModal: () => void;
    children: React.ReactNode;
}

const ModalTasks: FC<ModalTasksProps> = ({showModal, closeModal, children}) => {
    if (!showModal) return null;
    return (
        <div className="fixed inset-14 flex place-items-center justify-center z-50 overflow-y-auto overflow-x-hidden">
            <div className="fixed inset-0 bg-black bg-opacity-50 overscroll-hidden"
                 onClick={closeModal}></div>
            <div className="bg-white flex flex-col p-6 rounded-xl z-10">
                {children}
            </div>
        </div>
    );
};

export default ModalTasks;