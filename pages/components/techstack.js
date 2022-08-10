import React from "react";

import {
  SiJavascript,
  SiExpress,
  SiPostgresql,
  SiGit,
  SiReact,
  SiVercel,
  SiHeroku,
  SiFigma,
  SiAdobephotoshop,
  SiCanva,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

function Techstack() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-fit  relative !overflow-x-clip z-0">
      <div className=" flex flex-col  w-full h-fit justify-center items-center m-0 p-0 relative gap-[3em] z-0">
        <h1 className="text-[4em] duration-500 lg:text-[70px] relative text-black lg:w-[60%] text-center  font-bold">
          My Tools
        </h1>
        <section className="flex flex-col w-full h-fit justify-center items-center z-10">
          <h1 className="font-bold text-[2em]">Tech Stack</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 justify-center items-center transform duration-500">
            <div className="w-[10em] h-[10em] relative flex flex-col justify-end items-end">
              <SiJavascript className="w-full h-full absolute top-0 left-0 text-newbrown opacity-40 hover:animate-bounce" />
              <h1 className=" font-bold text-[1.2em] ">Javascript</h1>
            </div>
            <div className="w-[10em] h-[10em] relative flex flex-col justify-end items-end ">
              <FaNodeJs className="w-full h-full absolute top-0 left-0 text-newbrown opacity-40 hover:animate-bounce" />
              <h1 className=" font-bold text-[1.2em]">NodeJS</h1>
            </div>
            <div className="w-[10em] h-[10em] relative flex flex-col justify-end items-end ">
              <SiExpress className="w-full h-full absolute top-0 left-0 text-newbrown opacity-40 hover:animate-bounce" />
              <h1 className=" font-bold text-[1.2em]">Express</h1>
            </div>
            <div className="w-[10em] h-[10em] relative flex flex-col justify-end items-end ">
              <SiPostgresql className="w-full h-full absolute top-0 left-0 text-newbrown opacity-40 hover:animate-bounce" />
              <h1 className=" font-bold text-[1.2em]">POSTGresql</h1>
            </div>
            <div className="w-[10em] h-[10em] relative flex flex-col justify-end items-end ">
              <SiGit className="w-full h-full absolute top-0 left-0 text-newbrown opacity-40 hover:animate-bounce" />
              <h1 className=" font-bold text-[1.2em]">Git</h1>
            </div>
            <div className="w-[10em] h-[10em] relative flex flex-col justify-end items-end ">
              <SiReact className="w-full h-full absolute top-0 left-0 text-newbrown opacity-40 hover:animate-bounce" />
              <h1 className=" font-bold text-[1.2em]">React</h1>
            </div>
            <div className="w-[10em] h-[10em] relative flex flex-col justify-end items-end ">
              <SiVercel className="w-full h-full absolute top-0 left-0 text-newbrown opacity-40 hover:animate-bounce" />
              <h1 className=" font-bold text-[1.2em]">Vercel</h1>
            </div>
            <div className="w-[10em] h-[10em] relative flex flex-col justify-end items-end ">
              <SiHeroku className="w-full h-full absolute top-0 left-0 text-newbrown opacity-40 hover:animate-bounce" />
              <h1 className=" font-bold text-[1.2em]">Heroku</h1>
            </div>
          </div>
        </section>
        <section className="flex flex-col w-full h-fit justify-center items-center z-10">
          <h1 className="font-bold text-[2em]">Graphics Art</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-[10em]">
            <div className="w-[10em] h-[10em] relative flex flex-col justify-end items-end ">
              <SiFigma className="w-full h-full absolute top-0 left-0 text-newbrown opacity-40 hover:animate-bounce" />
              <h1 className=" font-bold text-[1.2em]">Figma</h1>
            </div>
            <div className="w-[10em] h-[10em] relative flex flex-col justify-end items-end ">
              <SiCanva className="w-full h-full absolute top-0 left-0 text-newbrown opacity-40 hover:animate-bounce" />
              <h1 className=" font-bold text-[1.2em]">Canva</h1>
            </div>
            <div className="w-[10em] h-[10em] relative flex flex-col justify-end items-end ">
              <SiAdobephotoshop className="w-full h-full absolute top-0 left-0 text-newbrown opacity-40 hover:animate-bounce" />
              <h1 className=" font-bold text-[1.2em]">Adobe PS</h1>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Techstack;
