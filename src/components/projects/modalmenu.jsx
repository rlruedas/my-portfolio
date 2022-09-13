import React from "react";

function Menu(props) {
  const { toggleMenu, handleClick } = props;

  return (
    <section
      className="flex flex-auto justify-center items-center absolute top-0 left-0 w-[100vw] h-[100vh]  transition-all transform duration-300 ease-in-out  translate-x-full z-50"
      id="burgernavigation"
    >
      <div className="flex flex-col w-[98%] h-[98%] justify-between items-center relative bg-newwhite  border border-newbrown">
        <div className="flex flex-col relative w-full h-[3em] items-center justify-center ">
          <button className="flex self-end mr-[.5em]">
            <a className="">
              <svg
                className="w-6 h-6"
                fillRule="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => toggleMenu("close")}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </a>
          </button>
        </div>
        <div className="flex flex-col h-full relative justify-center items-center gap-12  text-newmaroon">
          <button
            className="text-[30px] hover:text-newbeige"
            onClick={() => {
              toggleMenu("close");
              handleClick("About");
            }}
          >
            About
          </button>
          <button
            className="text-[30px]  hover:text-newbeige"
            onClick={() => {
              toggleMenu("close");
              handleClick("Services");
            }}
          >
            Services
          </button>
          <button
            className="text-[30px]  hover:text-newbeige"
            onClick={() => {
              toggleMenu("close");
              handleClick("Projects");
            }}
          >
            Projects
          </button>
          <button
            className="text-[30px] hover:text-newbeige"
            onClick={() => {
              toggleMenu("close");
              handleClick("Contact");
            }}
          >
            Contact
          </button>
          <a
            href=""
            className="text-[30px]  hover:text-newbeige"
            onClick={() => toggleMenu("close")}
          >
            Blog
          </a>
        </div>
      </div>
    </section>
  );
}

export default Menu;
