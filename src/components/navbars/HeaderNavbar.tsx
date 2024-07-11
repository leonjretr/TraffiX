import { motion } from "framer-motion";
import { IoIosWallet, IoMdSettings } from "react-icons/io";

const HeaderNavbar = () => (
  <motion.div className="flex space-x-2"
              initial={{opacity: 0}}
              animate={{opacity: 5}}
              exit={{opacity:0}}
              transition={{duration:0.5}}>
    <button className="text-white active:text-wheat focus:ring-wheat text-3xl sm:text-4xl md:text-5xl">
      <IoIosWallet />
    </button>
    <button className="text-white active:text-wheat focus:ring-wheat text-3xl sm:text-4xl md:text-5xl">
      <IoMdSettings />
    </button>
  </motion.div>
);

export default HeaderNavbar;
