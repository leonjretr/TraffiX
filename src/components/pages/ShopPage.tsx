import {motion} from "framer-motion";
import OtherPagesWrapper from "./OtherPagesWrapper.tsx";
import {fadeIn} from "../animations/PageTransitions.ts";
import FarmBoard from "../cards/FarmBoard.tsx";
import FarmNavigationBoard from "../cards/FarmNavigationBoard.tsx";
import farmStore from "../../stores/farmStore.ts";
import FarmBoard2 from "../cards/FarmBoard2.tsx";
import FarmBoard3 from "../cards/FarmBoard3.tsx";
import {observer} from "mobx-react-lite";

const ShopPage = observer(() => {

    const renderSection = () => {
        switch (farmStore.page) {
            case "CPU":
                return <FarmBoard/>
            case "GPU":
                return <FarmBoard2/>
            case "RAM":
                return <FarmBoard3/>
        }
    }

    return (
        <motion.div
            className={"TopPage bg-bgNewShade min-h-screen overflow-y-auto select-none pb-28"}
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            exit={fadeIn.exit}
            transition={fadeIn.transition}>

            <OtherPagesWrapper>
                {/*<LockedContent/>*/}
                <div className={"flex justify-center items-center"}>
                    <h2 className={"text-center text-2xl font-poppinsFont text-white font-medium mt-5"}>
                        Mining farm
                    </h2>
                </div>
                <div className={"flex justify-center items-center"}>
                    <FarmNavigationBoard/>
                </div>
                {renderSection()}

            </OtherPagesWrapper>
        </motion.div>

    )
        ;
});

export default ShopPage;