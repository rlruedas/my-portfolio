import React from "react";

import { HiOutlineDeviceMobile } from "react-icons/hi";
import { BsCodeSlash } from "react-icons/bs";

import Zoom from "react-swift-reveal/Zoom";

export default function Services() {
  return (
    <div
      className="relative flex flex-col justify-center items-center font-poppins w-full min-h-screen !overflow-hidden"
      id="Services"
    >
      <div className="flex flex-row relative w-full ">
        <div className="group flex flex-col justify-center items-center w-full relative ">
          <Zoom>
            <HiOutlineDeviceMobile className="text-[50px] transform duration-200 lg:text-9xl text-peach text-newbeige group-hover:opacity-50" />
          </Zoom>
          <div className="flex flex-col justify-center items-center bg-newbrown w-full h-screen absolute gap-5 transform -translate-x-full duration-1000 group-hover:ease-in-out group-hover:translate-x-0 group-hover:duration-1000">
            <p className="text-[.5em] sm:text-[1.3em] w-[50%] font-bold text-newbeige text-center">
              Mobile Application Development
            </p>
            <p className="text-[.3em] sm:text-[.9em] w-[50%] text-center font-medium text-newbeige">
              The technologies I used when I build my mobile applications are
              React Native and Firebase
            </p>
            <p className="text-[.3em] sm:text-[.9em] w-[50%] text-center font-medium text-newbeige">
              let's create your mobile app.
            </p>
          </div>
          <img
            src="./lookright.png"
            alt="Image was here"
            className=" absolute left-0 top-0 w-[10em] h-[10em] sm:w-[15em] sm:h-[15em] opacity-0 duration-300 group-hover:opacity-100"
          ></img>
        </div>
        <div className="group flex flex-col justify-center items-center w-full h-screen relative z-10 ">
          <Zoom>
            <BsCodeSlash className="text-[50px] lg:text-9xl text-newbeige transform duration-200 group-hover:opacity-50" />
          </Zoom>
          <div className="flex flex-col justify-center items-center gap-5  bg-newbeige w-full h-full absolute transform translate-x-full duration-1000 group-hover:ease-in-out group-hover:translate-x-0 group-hover:duration-1000 ">
            <p className="text-[.5em] sm:text-[1.3em] w-[50%] text-center font-bold text-newmaroon">
              Website Development
            </p>
            <p className="text-[.3em] sm:text-[.9em] w-[50%] text-center font-bold text-newmaroon ">
              For my web apps I use ReactJS, NextJS, PostgreSQL, Express, and
              Tailwind deployed on Vercel or Heroku.
            </p>
            <p className="text-[.3em] sm:text-[.9em] w-[50%] text-center font-bold text-newmaroon ">
              let's make your idea to a website?
            </p>
          </div>
          <img
            src="./lookleft.png"
            alt="Image was here"
            className=" absolute right-0 top-0 w-[10em] h-[10em] sm:w-[15em] sm:h-[15em] opacity-0 duration-300 group-hover:opacity-100 "
          ></img>
        </div>
      </div>
      <p className="text-clamp whitespace-nowrap absolute right-0 text-newbeige hidden rotate-90 translate-x-[2.4em] transform  sm:block ">
        My Services
      </p>
    </div>
  );
}
