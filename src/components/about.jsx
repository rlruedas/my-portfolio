import React from "react";

function Heading() {
  return (
    <>
      <div
        className="flex flex-col w-[80%] justify-center items-center !overflow-hidden pt-32 font-poppins"
        id="About"
      >
        <section className="flex flex-col md:flex-row  justify-center items-center ">

          <img className="w-2/4" src="./profileImage.png" alt="Image was here"></img>
          <div className="flex flex-col w-[80vw] md:w-[50vw] justify-center items-start gap-5 ">
            <span className="leading-[1em] whitespace-nowrap gap-3 text-left transition-all duration-500">
              <span className="leading-[1em] text-[40px] font-black lg:text-[100px] text-newbeige transition-all duration-500 ">
                <span className="text-newmaroon">I'm Reister</span> 
              </span>
              <span className="text-[60px] font-extrabold">.</span>
            </span>
            <span className="text-left text-sm md:text-2xl font-light lg:self-end text-newbeige transition-all duration-200">
              A Software Engineer based in the Philippines.
              Specializes in building user-friendly and interactive web and
              mobile applications. 

              <br />
              <br />
              Let's collaborate with your great and
              beautiful idea!
            </span>
          </div>
        </section>
      </div>
    </>
  );
}

export default Heading;
