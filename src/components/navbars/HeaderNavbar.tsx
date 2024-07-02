import React from "react";
import { IoIosWallet, IoMdSettings } from "react-icons/io";

const HeaderNavbar = () => (
  <div className="flex space-x-2">
    <button className="text-white active:text-wheat focus:ring-wheat text-3xl sm:text-4xl md:text-5xl">
      <IoIosWallet />
    </button>
    <button className="text-white active:text-wheat focus:ring-wheat text-3xl sm:text-4xl md:text-5xl">
      <IoMdSettings />
    </button>
  </div>
);

export default HeaderNavbar;
