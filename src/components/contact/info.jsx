import React from "react";
import Flip from "react-reveal/Flip";

function Info() {
  return (
    <>
      <Flip left>
        <div className="flex flex-row justify-around w-full  items-center text-newbeige">
          <img
            src="/logo-nobg.png"
            alt={"Image"}
            className="hidden sm:flex rounded-lg w-64 h-64 "
          ></img>
          <div className="flex flex-col static w-[90%] gap-4 ">
            <div className="text-[.7em] sm:text-[1em]">
              <i className="fa fa-map-marker"></i>
              <p>Antipolo City, Rizal, 1870</p>
            </div>
            <div className="text-[.7em] sm:text-[1em]">
              <i className="fa fa-envelope"></i>
              <p className="">reister.ruedas@gmail.com</p>
              <p>rlruedas@student.apc.edu.ph</p>
            </div>
            <div className="text-[.7em] sm:text-[1em]">
              <i className="fa fa-phone"></i>
              <p>+639493241618</p>
            </div>
            <div className="text-[.7em] sm:text-[1em]">
              <i className="fa fa-file-text"></i> <br />
              <a
                href="./Resume_Reister_Ruedas.pdf"
                className="rounded-md bg-transparent placeholder-gray-700 self-end hover:opacity-50"
                download
              >
                Download My Resume
              </a>
            </div>
          </div>
        </div>
      </Flip>
    </>
  );
}

export default Info;
