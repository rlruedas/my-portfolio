import React from "react";
import Zoom from "react-reveal/Zoom";

function Modal({ details, count, modal }) {
  return (
    <Zoom>
      <div className="flex flex-col w-full h-full fixed top-0 left-0 z-30 justify-center items-center bg-newbeige">
        <button className="absolute top-10 right-10" onClick={() => modal()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z" />
          </svg>
        </button>
        <div className="flex flex-row relative w-[80vw] h-[70vh] ">
          <div className="flex flex-col w-[40vw]  h-full justify-center items-start gap-7">
            <p className="text-xl lg:text-6xl">
              {details[count]?.projectName ?? ""}
            </p>
            <p className="text-sm lg:text-lg text-justify">
              {details[count]?.projectDesc ?? ""}
            </p>
            <p className="text-sm lg:text-lg">
              {details[count]?.projectAvailable ?? ""} <br /> 
              <a
                href={`${details[count].projectLink ?? ""}`}
                className="text-orange-800"
              >
                {details[count].projectLink}
              </a>
            </p>
          </div>
          <div className="w-[60vw] justify-center items-center lg:flex">
            <img
              src={`${details[count].projectImg}`}
              alt="Image was here"
              className="object-contain"
            ></img>
          </div>
        </div>
      </div>
    </Zoom>
  );
}
export default Modal;
