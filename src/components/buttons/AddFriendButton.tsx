import {motion} from "framer-motion";
import {FC} from "react";

interface AddFriendButtonProps {
    openModal: () => void;
}

const AddFriendButton: FC<AddFriendButtonProps> = ({openModal}) => {
    return (
        <div>
            <motion.button
                className="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs mob2:text-lg sm:text-2xl w-full sm:w-auto py-2.5 text-center items-center justify-center"
                onClick={openModal}
                whileTap={{scale: 0.9}}>

                <span id="success-message" className="px-2 inline-flex items-center font-poppinsFont font-semibold">
                add new friend
                </span>
            </motion.button>
        </div>
    );
};

export default AddFriendButton;