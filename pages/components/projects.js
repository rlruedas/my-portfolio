import React, { useEffect, useState } from "react";
import Zoom from "react-reveal/Zoom";

import { projectDetails } from "../data/projects";

import Modal from "./modal";

export default function projects() {
  const [projectCount, setCount] = useState(0);
  const [showProj, setShowProj] = useState(false);

  function showProject() {
    setShowProj(!showProj);

    if (!showProj) {
      document
        .querySelector(".project-details")
        .classList.replace("hidden", "block");
      document.body.style.setProperty("overflow", "hidden", "important");
    } else {
      document
        .querySelector(".project-details")
        .classList.replace("block", "hidden");
      document.body.style.setProperty("overflow", "scroll", "important");
    }
  }

  return (
    <div className="flex flex-col w-full relative justify-center items-center">
      <div className="flex flex-row relative justify-center items-center">
        <Zoom>
          <p className="text-[30px] lg:text-[60px] font-bold py-10 text-grey ">
            My Projects
          </p>
        </Zoom>
        <img
          src="./work.png"
          alt="Image was here"
          className=""
          width="160px"
          height="160px"
        ></img>
      </div>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 lg:auto-r gap-8 l w-.70 justify-center items-center pt-10">
        {projectDetails.map((item, index) => (
          <div className="flex flex-col w-full h-96 justify-end items-center border-2 border-solid border-newmaroon group hover:bg-seashell hover:scale-105 relative">
            <div className="flex flex-1 w-full relative p-6 justify-end"></div>
            <div
              className="transform duration-100 opacity-0 group-hover:opacity-100 group-hover:translate-x-28 group-hover:animate-pulse"
              onClick={() => {
                showProject(), setCount(index);
              }}
            >
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
              </svg>
            </div>
            <div className="flex flex-1 flex-col w-full justify-center ">
              <p className="text-4xl text-peach font-bold tracking-tighter p-8 group-hover:text-black">
                {item.projectName}
              </p>
              <p className="text-base text-peach tracking-widest p-8 group-hover:text-black">
                {item.projectTechStack}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden project-details">
        <Modal
          details={projectDetails}
          count={projectCount}
          modal={showProject}
        />
      </div>
    </div>
  );
}
