import React, { useEffect, useState } from "react";
import Zoom from "react-reveal/Zoom";
import data from "../data/projects";
import Modal from "./modal";

export default function Projects() {
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
      document.body.style.setProperty("overflow", "auto", "important");
    }
  }

  return (
    <div className="flex flex-col w-full relative justify-center items-center" id="Projects">
      <div className="flex flex-row relative justify-center items-center">
        <Zoom>
          <p className="text-[1.5em] lg:text-[60px] font-black py-10 text-black ">
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
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 lg:auto-r gap-8 l w-.70 justify-center items-center pt-10">
        {data.projectDetails.map((item, index) => (
          <div key={index} className="flex flex-col w-full min-h-[20em]  justify-end items-center border-2 border-solid border-newmaroon group hover:bg-seashell hover:scale-105 relative gap-5">
            <div
              className="flex justify-end items-center w-[80%] "
              
            >
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                className="transform duration-100 opacity-0 group-hover:opacity-100 -translate-x-[10em] group-hover:translate-x-[0%]"
                onClick={() => {
                  showProject(), setCount(index);
                }}
              >
                <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
              </svg>
            </div>
            <div className="flex flex-col w-[80%] fit justify-center gap-10 mb-7">
              <p className="text-[1.6em] text-peach font-bold tracking-tighter  group-hover:text-black">
                {item.projectName}
              </p>
              <p className="text-[.8em] text-peach  group-hover:text-black">
                {item.projectTechStack}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden project-details">
        <Modal
          details={data.projectDetails}
          count={projectCount}
          modal={showProject}
        />
      </div>
    </div>
  );
}
