import React, {FC} from "react";
import modalStore from "../../stores/ModalStore.ts";
import {observer} from "mobx-react-lite";

interface ModalUnavailableProps {
    // showModal: boolean;
    // closeModal: () => void;
    children: React.ReactNode;
}

const ModalUnavailable: FC<ModalUnavailableProps> = observer(({children}) => {
    if (!modalStore.isModalUnavailableOpen) return null;
    return (
        <div className="fixed inset-14 flex place-items-center justify-center z-50 overflow-y-auto overflow-x-hidden">
            <div className="fixed inset-0 bg-black bg-opacity-50 overscroll-hidden backdrop-blur-sm"
                 onClick={modalStore.setCloseModalUnavailable}></div>
                <div className="bg-white p-6 rounded-xl z-10">
                    {children}
                </div>
        </div>
    );
});

export default ModalUnavailable;