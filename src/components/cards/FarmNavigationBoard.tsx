import {motion} from "framer-motion";
import farmStore from "../../stores/farmStore.ts";
import {observer} from "mobx-react-lite";

const FarmNavigationBoard = observer(() => {

    return (
        <div className="flex mt-3 text-white font-poppinsFont text-base">
            <motion.button
                whileTap={{scale: 0.87}}
                className={"flex border-r-2 border-bgNewShade bg-bgNew w-20 h-12 rounded-l-2xl items-center justify-center"}
                onClick={farmStore.setPage1}
            >CPU
            </motion.button>
            <motion.button
                whileTap={{scale: 0.87}}
                className={"flex border-r-2 border-bgNewShade bg-bgNew w-20 h-12 items-center justify-center"}
                onClick={farmStore.setPage2}
            >GPU
            </motion.button>
            <motion.button
                whileTap={{scale: 0.87}}
                className={"flex bg-bgNew w-20 h-12 rounded-r-2xl items-center justify-center"}
                onClick={farmStore.setPage3}
            >RAM
            </motion.button>
        </div>
    )
        ;
});

export default FarmNavigationBoard;