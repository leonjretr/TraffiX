import React, {FC} from "react";
import modalStore from "../../stores/ModalStore.ts";
import {observer} from "mobx-react-lite";

interface ModalSettingsProps {
    // showModal: boolean;
    // closeModal: () => void;
    children: React.ReactNode;
}

const ModalSettings: FC<ModalSettingsProps> = observer(({children}) => {
    if (!modalStore.isModalSettingsOpen) return null;
    return (
        <div className="fixed inset-6 flex place-items-center space-x-0 justify-center z-50 overflow-y-auto overflow-x-hidden">
            <div className="fixed inset-0 bg-black bg-opacity-50 overscroll-hidden backdrop-blur-sm"
                 onClick={modalStore.setCloseModalSettings}></div>
            <div className="bg-white relative text-center p-5 rounded-xl z-10">
                {children}
            </div>
        </div>
    );
});

export default ModalSettings;