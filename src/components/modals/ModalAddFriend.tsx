import React, {FC} from "react";

interface ModalTasksProps {
    showModal: boolean;
    closeModal: () => void;
    children: React.ReactNode;
}

const ModalTasks: FC<ModalTasksProps> = ({showModal, closeModal, children}) => {
    if (!showModal) return null;
    return (
        <div className="fixed inset-6 flex place-items-center space-x-3 justify-center z-50 overflow-y-auto overflow-x-hidden">
            <div className="fixed inset-0 bg-black bg-opacity-50 overscroll-hidden backdrop-blur-sm"
                 onClick={closeModal}></div>
            <div className="bg-white relative text-center p-5 rounded-xl z-10">
                {children}
            </div>
        </div>
    );
};

export default ModalTasks;