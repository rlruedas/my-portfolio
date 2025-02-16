import React from "react";

import { HiOutlineDeviceMobile } from "react-icons/hi";
import { BsCodeSlash } from "react-icons/bs";

import { Zoom } from "react-swift-reveal";

export default function Services() {
  return (
    <div
      className="relative flex flex-col justify-center items-center font-inter w-full min-h-screen !overflow-hidden"
      id="Services"
    >
      <div className="flex flex-row relative w-full z-10">
        <div className="group flex flex-col justify-center items-center w-full relative text-left ">
          <Zoom>
            <HiOutlineDeviceMobile className="text-[50px] transform duration-200 lg:text-9xl text-peach text-newbeige group-hover:opacity-50" />
          </Zoom>
          <div className="flex flex-col justify-center items-center w-full bg-newmaroon bg-[url('/mobile_app_logo.svg')] bg-blend-darken h-screen absolute gap-5 transform -translate-x-full duration-1000 group-hover:ease-in-out group-hover:translate-x-0 group-hover:duration-1000">
            <p className="text-[.5em] sm:text-[1.3em] w-[50%] font-bold text-newbeige ">
              Mobile Application Development
            </p>
            <p className="text-[.3em] sm:text-[.9em] w-[50%]  font-light text-newbeige">
              I build mobile apps using Native Android, iOS and Hybrid React Native. Together with Firebase, PostgreSQL, or GraphQL.
            </p>
            <p className="text-[.3em] sm:text-[.9em] w-[50%]  font-bold text-newbeige">
              Lets transform your website into a functional mobile application.
            </p>
          </div>
          <img
            src="./lookright.png"
            alt="Image was here"
            className=" absolute left-0 top-0 w-[10em] h-[10em] sm:w-[15em] sm:h-[15em] opacity-0 duration-300 group-hover:opacity-100"
          ></img>
        </div>
        <div className="group flex flex-col justify-center items-center w-full h-screen relative z-10 text-left">
          <Zoom>
            <BsCodeSlash className="text-[50px] lg:text-9xl text-newbeige transform duration-200 group-hover:opacity-50" />
          </Zoom>
          <div className="flex flex-col justify-center items-center gap-5  bg-newbeige bg-[url('/website_dev_logo.svg')] bg-blend-soft-light  w-full h-full absolute transform translate-x-full duration-1000 group-hover:ease-in-out group-hover:translate-x-0 group-hover:duration-1000 ">
            <p className="text-[.5em] sm:text-[1.3em] w-[50%] font-bold text-newmaroon">
              Website Development
            </p>
            <p className="text-[.3em] sm:text-[.9em] w-[50%] font-light text-newmaroon ">
              For my web development, I use ReactJS, NextJS, PostgreSQL, Express with the help of Tailwind to acheive a responsive and interactive website.
              With deployment, we can use vercel or depending on your preference.
            </p>
            <p className="text-[.3em] sm:text-[.9em] w-[50%] font-bold text-newmaroon ">
             Lets make your dreaam website into reality?
            </p>
          </div>
          <img
            src="./lookleft.png"
            alt="Image was here"
            className=" absolute -right-5 bottom-0 w-[10em] h-[10em] sm:w-[15em] sm:h-[15em] opacity-0 duration-300 group-hover:opacity-100 rotate-45"
          ></img>
        </div>
      </div>
      <p className="absolute text-newbeige hidden text-[80px] font-bold sm:block ">
        My Services
      </p>
    </div>
  );
}
