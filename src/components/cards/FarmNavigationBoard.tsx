import {motion} from "framer-motion";
import farmStore from "../../stores/farmStore.ts";
import {observer} from "mobx-react-lite";

const FarmNavigationBoard = observer(() => {

    return (
        <div className="flex mt-3 text-white font-poppinsFont text-sm">
            <motion.button
                whileTap={{scale: 0.87}}
                className={"flex border-r-2 border-bgNewShade bg-bgNew w-16 h-10 rounded-l-2xl items-center justify-center"}
                onClick={farmStore.setPage1}
            >CPU
            </motion.button>
            <motion.button
                whileTap={{scale: 0.87}}
                className={"flex border-r-2 border-bgNewShade bg-bgNew w-16 h-10 items-center justify-center"}
                onClick={farmStore.setPage2}
            >GPU
            </motion.button>
            <motion.button
                whileTap={{scale: 0.87}}
                className={"flex bg-bgNew w-16 h-10 border-r-2 border-bgNewShade items-center justify-center"}
                onClick={farmStore.setPage3}
            >RAM
            </motion.button>
            <motion.button
                whileTap={{scale: 0.87}}
                className={"flex bg-bgNew w-16 h-10 border-r-2 border-bgNewShade items-center justify-center"}
                // onClick={farmStore.setPage3}
            >MBoard
            </motion.button>
            <motion.button
                whileTap={{scale: 0.87}}
                className={"flex bg-bgNew w-16 h-10 rounded-r-2xl items-center justify-center"}
                // onClick={farmStore.setPage3}
            >Cooling
            </motion.button>
        </div>
    )
        ;
});

export default FarmNavigationBoard;