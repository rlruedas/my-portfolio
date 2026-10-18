import React from "react";
import {
  SiSwift,
  SiXcode,
  SiAndroidstudio,
  SiJavascript,
  SiExpress,
  SiPostgresql,
  SiGit,
  SiReact,
  SiVercel,
  SiFigma,
  SiAdobephotoshop,
  SiCanva,
  SiFirebase,
  SiKotlin,
  SiTailwindcss,
} from "react-icons/si";
import { FaNodeJs, FaApple } from "react-icons/fa";
import { Slide } from "react-swift-reveal";

const tools = [
  { name: "Swift", icon: <SiSwift className="text-3xl text-[#F05138]" /> },
  { name: "iOS", icon: <FaApple className="text-3xl text-newmaroon" /> },
  { name: "Xcode", icon: <SiXcode className="text-3xl text-[#1575F9]" /> },
  { name: "Android Studio", icon: <SiAndroidstudio className="text-3xl text-[#3DDC84]" /> },
  { name: "Kotlin", icon: <SiKotlin className="text-3xl text-[#7F52FF]" /> },
  { name: "React / Native", icon: <SiReact className="text-3xl text-[#61DAFB]" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-3xl text-[#F7DF1E]" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-3xl text-[#339933]" /> },
  { name: "Express", icon: <SiExpress className="text-3xl text-newmaroon" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-3xl text-[#4169E1]" /> },
  { name: "Firebase", icon: <SiFirebase className="text-3xl text-[#FFCA28]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-3xl text-[#06B6D4]" /> },
  { name: "Git", icon: <SiGit className="text-3xl text-[#F05032]" /> },
  { name: "Vercel", icon: <SiVercel className="text-3xl text-black" /> },
  { name: "Figma", icon: <SiFigma className="text-3xl text-[#F24E1E]" /> },
  { name: "Photoshop", icon: <SiAdobephotoshop className="text-3xl text-[#31A8FF]" /> },
  { name: "Canva", icon: <SiCanva className="text-3xl text-[#00C4CC]" /> },
];

export default function TechStack() {
  // Double array for continuous seamless loop
  const marqueeItems = [...tools, ...tools];

  return (
    <section
      className="w-full py-20 overflow-hidden font-poppins"
      id="TechStack"
    >
      <Slide bottom>
        <div className="text-center mb-10 max-w-5xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest font-semibold text-newbrown">
            Skills & Technologies
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-newmaroon mt-1">
            Tech Stack
          </h2>
          <div className="w-12 h-1 bg-newmaroon mx-auto mt-3 rounded-full" />
        </div>

        {/* Moving Banner with pause on hover */}
        <div className="relative w-full overflow-hidden py-4 bg-newwhite/60 border-y border-newbeige/40">
          <div className="animate-marquee flex items-center gap-6 sm:gap-8 px-4">
            {marqueeItems.map((tool, index) => (
              <div
                key={`${tool.name}-${index}`}
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-newwhite border border-newbeige/50 shadow-sm flex-shrink-0 hover:border-newbrown transition-colors"
              >
                {tool.icon}
                <span className="text-sm font-semibold text-newbrown whitespace-nowrap">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-newbrown/70 mt-4">
          Hover to pause banner
        </p>
      </Slide>
    </section>
  );
}
