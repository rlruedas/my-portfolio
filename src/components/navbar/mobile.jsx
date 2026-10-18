import React from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

function Mobile({ isOpen, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      className="p-2 text-2xl text-newmaroon hover:text-newbrown transition-colors focus:outline-none"
    >
      {isOpen ? <IoClose /> : <HiOutlineMenuAlt3 />}
    </button>
  );
}

export default Mobile;
