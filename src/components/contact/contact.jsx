import React, { useState } from "react";
import Form from "./form";
import Info from "./info";
import { Slide } from "react-swift-reveal";

function Contact() {
  const [activeView, setActiveView] = useState("info"); // 'info' | 'form'

  return (
    <section
      className="w-full max-w-5xl px-6 py-20 mx-auto font-poppins"
      id="Contact"
    >
      <Slide bottom>
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest font-semibold text-newbrown">
            Get in touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-newmaroon mt-1">
            Contact Me
          </h2>
          <div className="w-12 h-1 bg-newmaroon mx-auto mt-3 rounded-full" />
        </div>

        {/* View Toggle */}
        <div className="flex justify-center items-center gap-2 mb-8">
          <button
            onClick={() => setActiveView("info")}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors ${
              activeView === "info"
                ? "bg-newmaroon text-newwhite shadow-sm"
                : "bg-newwhite text-newbrown border border-newbeige/50 hover:bg-newbeige/20"
            }`}
          >
            Direct Details & Resume
          </button>
          <button
            onClick={() => setActiveView("form")}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors ${
              activeView === "form"
                ? "bg-newmaroon text-newwhite shadow-sm"
                : "bg-newwhite text-newbrown border border-newbeige/50 hover:bg-newbeige/20"
            }`}
          >
            Send a Message
          </button>
        </div>

        {/* Content Card */}
        <div className="max-w-2xl mx-auto rounded-2xl bg-newwhite border border-newbeige/60 shadow-md p-6 sm:p-10">
          {activeView === "info" ? <Info /> : <Form />}
        </div>
      </Slide>
    </section>
  );
}

export default Contact;
