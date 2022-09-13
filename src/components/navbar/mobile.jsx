import React, { useState } from "react";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

function Mobile(props) {
const { state, buttonState } = props;

  

  return (
    <div className="relative w-[30vw] h-full flex justify-center items-center z-50">
      {!buttonState ? (
        <button onClick={state}>
          <IoClose className="" />
        </button>
      ) : (
        <button onClick={state}>
          <HiOutlineMenuAlt3 className="" />
        </button>
      )}
    </div>
  );
}

export default Mobile;
