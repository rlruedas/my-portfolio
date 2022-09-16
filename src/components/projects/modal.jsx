import React from "react";

import { HiOutlineExternalLink } from "react-icons/hi";

function Modal({ details, count, modal }) {
  return (
    <div className="flex flex-col w-full min-h-screen !overflow-hidden  fixed top-0 left-0 z-50 justify-center items-center bg-newbeige text-poppins text-newmaroon">
      <button
        className="relative w-[90vw] flex justify-end items-center "
        onClick={() => modal()}
      >
        <svg
          className="w-6 h-6 hover:scale-105 transform duration-200"
          fillRule="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="flex flex-col md:flex-row relative w-[90vw] h-[90vh] gap-10">
        <div className="flex flex-col md:w-[40vw]  h-full justify-center items-start gap-7">
          <p className="text-xl lg:text-6xl">
            {details[count]?.projectName ?? ""}
          </p>
          <p className="text-sm lg:text-lg text-justify">
            {details[count]?.projectDesc ?? ""}
          </p>
          <p className="text-sm lg:text-lg gap-[10em]">
            {details[count]?.projectAvailable ?? ""} <br />
            <a
              href={`${details[count].projectLink ?? ""}`}
              className="text-orange-800"
            >
              {details[count].projectLink}
            </a>
          </p>
          <section className="flex flex-row justify-center items-center gap-5">
            <span>View Github Repository</span>
            <a href={`${details[count].projectGithub}`}>
              <HiOutlineExternalLink className="w-[2em] h-[2em] " />
            </a>
          </section>
        </div>
        <div className="md:w-[90vw] justify-center items-center flex">
          <img
            src={`${details[count].projectImg}`}
            alt="Image was here"
            className="object-contain h-[90%] "
          ></img>
        </div>
      </div>
    </div>
  );
}
export default Modal;
