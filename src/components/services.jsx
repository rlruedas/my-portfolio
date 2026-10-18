import React from "react";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { BsCodeSlash } from "react-icons/bs";
import { Slide } from "react-swift-reveal";

export default function Services() {
  const services = [
    {
      title: "Mobile App Development",
      icon: <HiOutlineDeviceMobile className="text-4xl text-newmaroon mb-3" />,
      description:
        "My primary focus: building production-grade native iOS applications with Swift, SwiftUI, and Apple frameworks, as well as cross-platform mobile apps with React Native. Experienced in offline-first sync, real-time backends (Firebase), and Clean Swift / VIPER architecture.",
      tags: ["iOS (Swift/SwiftUI)", "React Native", "KMP", "Clean Swift / VIPER", "Apple Frameworks"],
    },
    {
      title: "Web Development (Side Projects)",
      icon: <BsCodeSlash className="text-4xl text-newmaroon mb-3" />,
      description:
        "Building complementary responsive web applications and dashboards with React, Next.js, and Tailwind CSS. Backed by solid API integrations with Express and PostgreSQL to support complete digital solutions.",
      tags: ["Next.js", "React.js", "Tailwind CSS", "Node.js / Express", "PostgreSQL"],
    },
  ];

  return (
    <section
      className="w-full max-w-5xl px-6 py-20 mx-auto font-poppins"
      id="Services"
    >
      <Slide bottom>
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest font-semibold text-newbrown">
            What I Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-newmaroon mt-1">
            Services
          </h2>
          <div className="w-12 h-1 bg-newmaroon mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-8 rounded-2xl bg-newwhite border border-newbeige/60 shadow-sm hover:shadow-md transition-shadow text-left flex flex-col justify-between"
            >
              <div>
                {service.icon}
                <h3 className="text-xl font-bold text-newmaroon mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-newbrown leading-relaxed mb-6 font-light">
                  {service.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-newbeige/30">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded bg-newbeige/20 text-newbrown font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Slide>
    </section>
  );
}
