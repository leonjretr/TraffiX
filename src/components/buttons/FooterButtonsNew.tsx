// import {Link} from "react-router-dom";
import {FC, ReactElement} from "react";
import {motion} from "framer-motion";
import routerStore from "../../stores/routerStore.ts";
import { useNavigate } from 'react-router-dom';

interface FooterButtonsNewProps {
    routingPath: string;
    label: string;
    icon: ReactElement;
}

const FooterButtonsNew: FC<FooterButtonsNewProps> = ({routingPath, label, icon}) => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        if (!routerStore.isNavigating) {
            routerStore.setNavigatingTrue();
            navigate(routingPath);
            setTimeout(() => {
                routerStore.setNavigatingFalse();
            }, 800);
        }
    };

    return (
        <motion.div
            whileTap={{scale: 1.25}}
            onClick={handleNavigation}>
            <div
                className="flex flex-col items-center text-white text-base mob2:text-lg p-1 mob2:p-0.5 active:bg-main active:ring-1 active:ring-gray-400 focus:ring-1 focus:ring-gray-400 rounded-lg"
                >
                <div className="text-4xl mob1:text-4xl mob2:text-4xl sm:text-5xl">
                    {icon}
                </div>
                {label}
            </div>
        </motion.div>
    );
};

export default FooterButtonsNew;