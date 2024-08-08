import {motion} from "framer-motion";
import {IoIosWallet, IoMdSettings} from "react-icons/io";
import ModalUnavailable from "../modals/ModalUnavailable.tsx";
import {useEffect, useState} from "react";
import {fadeIn} from "../animations/PageTransition.ts"

const HeaderNavbar = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isModalOpen]);

    return (
        <motion.div className="flex space-x-2"
                    initial={fadeIn.initial}
                    animate={fadeIn.animate}
                    exit={fadeIn.exit}
                    transition={fadeIn.transition}>
            <motion.button
                whileTap={{scale: 1.3}}
                onClick={openModal}
                className="text-white active:text-grayNew focus:ring-grayNew text-3xl sm:text-4xl md:text-5xl">
                <IoIosWallet/>
            </motion.button>
            <motion.button
                whileTap={{scale: 1.3}}
                onClick={openModal}
                className="text-white active:text-grayNew focus:ring-grayNew text-3xl sm:text-4xl md:text-5xl">
                <IoMdSettings/>
            </motion.button>
            <ModalUnavailable showModal={isModalOpen} closeModal={closeModal}>
                <div className={"flex flex-col justify-center place-items-center"}>
                    <h2 className="text-sm text-center text-gray-500 font-poppinsFont font-semibold mb-4">
                        Unfortunately, this functionality is still under development and is not yet available.
                    </h2>
                    <motion.button
                        whileTap={{scale: 0.9}}
                        onClick={closeModal}
                        className="w-auto px-4 py-2 bg-red-600 text-white text-center rounded-md hover:bg-red-700 active:ring active:ring-gray-400 font-sans font-medium">
                        OK, thanks
                    </motion.button>
                </div>
            </ModalUnavailable>
        </motion.div>
    )
};

export default HeaderNavbar;
