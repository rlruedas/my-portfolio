import React from "react";

function Heading() {
  return (
    <>
      <div
        className="flex flex-col w-full min-h-screen justify-center items-center !overflow-hidden font-poppins text-white"
        id="About"
      >
        <section className="flex flex-row  justify-center items-center ">
          <div className="hidden sm:flex w-fit  justify-start items-center ">
            <img src="./profileImage.png" alt="Image was here"></img>
          </div>
          <div className="flex flex-col w-[90vw] md:w-[50vw] justify-center items-start gap-5 ">
            <span className="leading-[1em] whitespace-nowrap gap-3 text-left transition-all duration-500">
              <span className="leading-[1em] text-[40px] font-black lg:text-[100px] text-newbeige transition-all duration-500 ">
                <span className="text-white">I'm</span> Reister
              </span>
              <span className="text-[60px] font-extrabold">.</span>
            </span>
            <span className="text-left text-xs lg:text-sm font-bold lg:self-end text-newbeige transition-all duration-200">
              <span className="lg:text-[24px] font-light text-white ">
                ABOUT
              </span>
              &nbsp; I'm a Software Developer based in the Philippines.
              Specializes in building USER-FRIENDLY and INTERACTIVE web and
              mobile applications. Let's collaborate with your great and
              beautiful idea.
            </span>
          </div>
        </section>
      </div>
    </>
  );
}

export default Heading;
