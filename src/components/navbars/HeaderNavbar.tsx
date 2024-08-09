import {motion} from "framer-motion";
import {IoIosWallet, IoMdSettings} from "react-icons/io";
import {useEffect} from "react";
import ModalSettings from "../modals/ModalSettings.tsx";
import ModalUnavailable from "../modals/ModalUnavailable.tsx";
import modalStore from "../../stores/ModalStore.ts";
import Settings from "../modals/Settings.tsx";

const HeaderNavbar = () => {

    useEffect(() => {
        if (modalStore.isModalUnavailableOpen || modalStore.isModalSettingsOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [modalStore.isModalSettingsOpen, modalStore.isModalUnavailableOpen]);

    return (
        <motion.div className="flex space-x-2">
            <motion.button
                whileTap={{scale: 1.3}}
                onClick={modalStore.setOpenModalUnavailable}
                className="text-white active:text-grayNew focus:ring-grayNew text-3xl sm:text-4xl md:text-5xl">
                <IoIosWallet/>
            </motion.button>
            <motion.button
                whileTap={{scale: 1.3}}
                onClick={modalStore.setOpenModalSettings}
                className="text-white active:text-grayNew focus:ring-grayNew text-3xl sm:text-4xl md:text-5xl">
                <IoMdSettings/>
            </motion.button>
            <ModalUnavailable>
                <div className={"flex flex-col justify-center place-items-center"}>
                    <h2 className="text-sm text-center text-gray-500 font-poppinsFont font-semibold mb-4">
                        Unfortunately, this functionality is still under development and is not yet available.
                    </h2>
                    <motion.button
                        whileTap={{scale: 0.9}}
                        onClick={modalStore.setCloseModalUnavailable}
                        className="w-auto px-4 py-2 bg-red-600 text-white text-center rounded-md hover:bg-red-700 active:ring active:ring-gray-400 font-sans font-medium">
                        OK, thanks
                    </motion.button>
                </div>
            </ModalUnavailable>
            <ModalSettings>
                <div className={"flex flex-col place-items-center p-2"}>
                    <Settings/>
                    <div className={"flex gap-5"}>
                        <motion.button
                            whileTap={{scale: 0.9}}
                            onClick={modalStore.setCloseModalSettings}
                            className="w-auto px-4 py-2 bg-greenNew text-white text-center rounded-md hover:bg-gray-600 active:ring active:ring-gray-400 font-sans font-medium">
                            Save
                        </motion.button>
                        <motion.button
                            whileTap={{scale: 0.9}}
                            onClick={modalStore.setCloseModalSettings}
                            className="w-auto px-4 py-2 bg-red-600 text-white text-center rounded-md hover:bg-red-700 active:ring active:ring-gray-400 font-sans font-medium">
                            Cancel
                        </motion.button>
                    </div>
                </div>
            </ModalSettings>
        </motion.div>
    )
};

export default HeaderNavbar;

// const [isModalOpen, setIsModalOpen] = useState(false);
//
// const openModalUnavailable = () => {
//     setIsModalOpen(true);
// };
//
// const closeModalUnavailable = () => {
//     setIsModalOpen(false);
// };