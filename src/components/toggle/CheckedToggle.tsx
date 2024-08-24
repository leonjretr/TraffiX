import {motion} from "framer-motion";
import {useState} from "react";

const CheckedToggle = () => {
    const [checked, setChecked] = useState(false);

    return (
        <div>
            <label
                className="block mb-2 text-sm font-medium text-gray-900">
                Enable mining
            </label>
            <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox"
                       className="sr-only peer"
                       onClick={() => setChecked(!checked)}
                />
                {checked ? (
                    <div className={"flex items-center"}>
                        <div className={"relative w-11 h-6 bg-blue-500 rounded-full"}>
                            <motion.div
                                className="relative w-6 h-6 border-2 border-blue-500 bg-white rounded-full"
                                layout
                                animate={{x: 20}} transition={{
                                type: "spring",
                                stiffness: 700,
                                damping: 30
                            }}>
                            </motion.div>
                        </div>
                        <span className="ms-2 text-base font-medium font-poppinsFont text-black">ON</span>
                    </div>
                ) : (
                    <div className={"flex items-center"}>
                        <div className={"relative w-11 h-6 bg-gray-200 rounded-full"}>
                            <motion.div className="relative w-6 h-6 bg-white border-2 rounded-full"
                                        layout
                                        animate={{x: 0}} transition={{
                                type: "spring",
                                stiffness: 700,
                                damping: 30
                            }}>
                            </motion.div>
                        </div>
                        <span className="ms-2 text-base font-medium font-poppinsFont text-black">OFF</span>
                    </div>
                )}

            </label>
        </div>
    );
};

export default CheckedToggle;