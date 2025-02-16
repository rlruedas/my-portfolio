import React from "react";

function Heading() {
  return (
    <>
      <div
        className="flex flex-col w-[80%] justify-center items-center !overflow-hidden pt-32 font-inter tracking-tighter"
        id="About"
      >
        <section className="flex flex-col md:flex-row  justify-center items-center gap-16">

          <img className="w-2/4" src="./profileImage.png" alt="Image was here"></img>
          <div className="flex flex-col w-[80vw] md:w-[50vw] justify-center items-start gap-5 ">
            <span className=" whitespace-nowrap gap-3 text-left transition-all duration-500">
              <span className=" text-[40px] font-bold lg:text-[50px] text-newbeige transition-all duration-500 ">
                <span className="text-newmaroon">I'm Reister</span> 
              </span>
              <span className="text-[60px] font-extrabold">.</span>
            </span>
            <span className="text-left text-sm md:text-xl font-light lg:self-end text-newbrown transition-all duration-200">
            A <strong className="font-semibold">Software Engineer based in the Philippines</strong>, 
            passionate about crafting seamless digital experiences. 
            Specializes in building user-friendly, responsive, and interactive web and mobile applications that
            <strong className="font-semibold"> bring ideas to life.</strong>
            With a keen eye for detail and a strong focus on functionality,
            I create solutions that are both <strong className="font-semibold">visually appealing and highly efficient.</strong>
            <br />
            <br />
            Let's collaborate to <strong className="font-semibold">turn your vision into reality</strong> with innovation, creativity, and cutting-edge technology!
            <br />
            <br />
            Let me know if you'd like to tweak the tone or focus! 🚀
            </span>
          </div>
        </section>
      </div>
    </>
  );
}

export default Heading;
