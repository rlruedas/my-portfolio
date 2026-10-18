import React from "react";
import Image from "next/image";
import { Slide } from "react-swift-reveal";

function About() {
  return (
    <section
      className="w-full max-w-5xl px-6 pt-32 pb-16 mx-auto font-poppins"
      id="About"
    >
      <Slide bottom>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Profile Picture */}
          <Image
            className="w-2/4 max-w-[250px]"
            src="/profileImage.webp"
            priority
            alt="Image was here"
            width={250}
            height={250}
          />

          {/* Intro Text */}
          <div className="flex flex-col items-start text-left space-y-4 max-w-xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-newbeige">
              Hi, I'm <span className="text-newmaroon">Reister Ruedas</span>.
            </h1>

            <p className="text-base sm:text-lg text-newbrown leading-relaxed font-light">
              Based in the Philippines, I am a <strong className="font-semibold text-newmaroon">Software Engineer</strong> specializing 
              in native iOS development with Swift and cross-platform apps. I focus on architecting 
              responsive, high-performance mobile experiences with clean architecture (Clean Swift, VIPER, MVVM) 
              and robust engineering. I also build web applications on the side to support end-to-end digital solutions.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#Projects"
                className="px-5 py-2.5 rounded-lg bg-newmaroon text-newwhite font-medium hover:bg-newbrown transition-colors shadow-sm"
              >
                View Projects
              </a>
              <a
                href="#Experience"
                className="px-5 py-2.5 rounded-lg border border-newbrown text-newbrown hover:bg-newbrown/10 transition-colors font-medium"
              >
                Experience Timeline
              </a>
              <a
                href="#Contact"
                className="px-5 py-2.5 rounded-lg border border-newbeige text-newbeige hover:bg-newbeige/10 transition-colors font-medium"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </Slide>
    </section>
  );
}

export default About;
