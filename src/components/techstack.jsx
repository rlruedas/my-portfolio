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
import { Slide, Zoom } from "react-swift-reveal";

function Techstack() {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen relative !overflow-x-clip z-0 mt-[8em] font-poppins text-newbeige">
      <div className=" flex flex-col  w-full h-fit justify-center items-center m-0 p-0 relative gap-[3em] z-0">
        <Slide bottom>
          <section className="relative flex flex-row w-full h-fit justify-center items-center">
            <h1 className="text-clamp duration-500 relative text-center  font-bold z-10">
              My Tools
            </h1>
            <img
              src="./tools.png"
              alt="toolsimage"
              className="hidden rotate-12 max-w-[10em] max-h-[10em] z-0 sm:block"
            />
          </section>
        </Slide>
        <section className="flex flex-col w-full h-fit justify-center items-center z-10 gap-10">
          <Slide bottom>
            <h1 className="font-bold text-[2em]">Tech Stack</h1>
          </Slide>
          <Zoom bottom cascade>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 justify-center items-center transform duration-500">
              <div className="w-[10em] h-[10em] relative flex flex-col justify-end items-end">
                <SiJavascript className="w-full h-full absolute top-0 left-0 text-newbeige opacity-40" />
                <h1 className="font-bold text-[1.2em] z-10 text-newwhite">
                  Javascript
                </h1>
              </div>
              <div className="w-[10em] h-[10em] relative flex flex-col justify-end items-end ">
                <FaNodeJs className="w-full h-full absolute top-0 left-0 text-newbeige opacity-40" />
                <h1 className=" font-bold text-[1.2em] z-10 text-newwhite">
                  NodeJS
                </h1>
              </div>
              <div className="w-[10em] h-[10em] relative flex flex-col justify-end items-end ">
                <SiExpress className="w-full h-full absolute top-0 left-0 text-newbeige opacity-40" />
                <h1 className=" font-bold text-[1.2em] z-10 text-newwhite">
                  Express
                </h1>
              </div>
              <div className="w-[10em] h-[10em] relative flex flex-col justify-end items-end ">
                <SiPostgresql className="w-full h-full absolute top-0 left-0 text-newbeige opacity-40" />
                <h1 className=" font-bold text-[1.2em] z-10 text-newwhite">
                  POSTGresql
                </h1>
              </div>
              <div className="w-[10em] h-[10em] relative flex flex-col justify-end items-end ">
                <SiGit className="w-full h-full absolute top-0 left-0 text-newbeige opacity-40" />
                <h1 className=" font-bold text-[1.2em] z-10 text-newwhite">
                  Git
                </h1>
              </div>
              <div className="w-[10em] h-[10em] relative flex flex-col justify-end items-end ">
                <SiReact className="w-full h-full absolute top-0 left-0 text-newbeige opacity-40" />
                <h1 className=" font-bold text-[1.2em] z-10 text-newwhite">
                  React
                </h1>
              </div>
              <div className="w-[10em] h-[10em] relative flex flex-col justify-end items-end ">
                <SiVercel className="w-full h-full absolute top-0 left-0 text-newbeige opacity-40" />
                <h1 className=" font-bold text-[1.2em] z-10 text-newwhite">
                  Vercel
                </h1>
              </div>
            </div>
          </Zoom>
        </section>
        <section className="flex flex-col w-full h-fit justify-center items-center z-10 gap-10">
          <Slide bottom>
            <h1 className="font-bold text-[2em]">Graphics Art</h1>
          </Slide>
          <Zoom bottom cascade>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-[10em]">
              <div className="w-[10em] h-[10em] relative flex flex-col justify-end items-end ">
                <SiFigma className="w-full h-full absolute top-0 left-0 text-newbeige opacity-40" />
                <h1 className=" font-bold text-[1.2em] z-10 text-newwhite">
                  Figma
                </h1>
              </div>
              <div className="w-[10em] h-[10em] relative flex flex-col justify-end items-end ">
                <SiCanva className="w-full h-full absolute top-0 left-0 text-newbeige opacity-40" />
                <h1 className=" font-bold text-[1.2em] z-10 text-newwhite">
                  Canva
                </h1>
              </div>
              <div className="w-[10em] h-[10em] relative flex flex-col justify-end items-end ">
                <SiAdobephotoshop className="w-full h-full absolute top-0 left-0 text-newbeige opacity-40" />
                <h1 className=" font-bold text-[1.2em] z-10 text-newwhite">
                  Adobe PS
                </h1>
              </div>
            </div>
          </Zoom>
        </section>
      </div>
    </div>
  );
}

export default Techstack;
