import React, { useState } from "react";
import Form from "./form";
import Info from "./info";
import Slide from "react-reveal/Slide";

import { BsFillArrowRightSquareFill } from "react-icons/bs";

function BusinessCard() {
  const [flipCard, setFlipCard] = useState(true);

  return (
    <div
      className="flex flex-col md:flex-row relative justify-center items-center w-full min-h-screen font-poppins text-newbeige gap-10 !overflow-hidden"
      id="Contact"
    >
      <Slide top cascade>
        <div className="w-[80vw] flex flex-col justify-center items-center ">
          <p className="contact-clamp font-bold">Here's my Business Card!</p>
        </div>
        <div className="relative w-full flex justify-center items-center group ">
          <div className="flex flex-row relative lg:flex-row z-10 gap-5 justify-center items-center rounded-2xl bg-newbeige text-black card-shadow p-5 transform duration-200 w-[18em] sm:w-[40em] h-[25em] py-[2em] ">
            {flipCard ? <Info /> : <Form />}
            <button onClick={() => setFlipCard(!flipCard)}>
              <BsFillArrowRightSquareFill className="text-[28px] w-full text-newbeige" />
            </button>
          </div>
          <div className="absolute top-0 left-0">
            <img
              src="./hmu.png"
              alt="Image was here"
              className=" w-64 h-64 -rotate-[30deg] transform duration-300 translate-y-[2em] translate-x-[2em] group-hover:-translate-x-[6em] group-hover:-translate-y-[6em] "
            ></img>
          </div>
        </div>
      </Slide>
    </div>
  );
}

export default BusinessCard;
