import React from "react";
import experienceData from "../data/experience.json";
import { Slide } from "react-swift-reveal";
import { HiOutlineAcademicCap, HiOutlineBriefcase } from "react-icons/hi";

export default function Experience() {
  const experiences = experienceData.workExperience || [];
  const education = experienceData.education;

  return (
    <section
      className="w-full max-w-5xl px-6 py-20 mx-auto font-poppins"
      id="Experience"
    >
      <Slide bottom>
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest font-semibold text-newbrown">
            Career Journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-newmaroon mt-1">
            Work Experience
          </h2>
          <div className="w-12 h-1 bg-newmaroon mx-auto mt-3 rounded-full" />
        </div>

        {/* Work Experience Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-newbeige/50 space-y-10">
          {experiences.map((exp, idx) => (
            <div key={exp.company || idx} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-newmaroon bg-newwhite group-hover:bg-newbrown transition-colors flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-newmaroon" />
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-newwhite border border-newbeige/60 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-newmaroon flex items-center gap-2">
                      <HiOutlineBriefcase className="text-newbrown flex-shrink-0" />
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-newbrown">
                      {exp.company} • <span className="font-light">{exp.location}</span>
                    </p>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-newmaroon/10 text-newmaroon w-fit">
                    {exp.period}
                  </span>
                </div>

                {/* Key Impact Award Callout */}
                {exp.award && (
                  <div className="my-4 p-3.5 rounded-xl bg-newbeige/25 border-l-4 border-newmaroon text-xs sm:text-sm text-newbrown leading-relaxed font-medium">
                    🏆 {exp.award}
                  </div>
                )}

                {/* Highlights */}
                <ul className="space-y-2 mt-4 text-xs sm:text-sm text-newbrown leading-relaxed list-disc list-outside pl-4 font-light">
                  {exp.highlights?.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>

                {/* Technologies */}
                {exp.technologies && (
                  <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-newbeige/30">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-0.5 rounded bg-newbeige/20 text-newbrown font-normal"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated Education Section */}
        {education && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-newmaroon mb-6 flex items-center gap-2">
              <HiOutlineAcademicCap className="text-newbrown text-2xl" />
              Education
            </h3>

            <div className="p-6 sm:p-8 rounded-2xl bg-newwhite border border-newbeige/60 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-newmaroon">
                    {education.degree}
                  </h4>
                  <p className="text-sm font-semibold text-newbrown mt-1">
                    {education.institution} • <span className="font-light">{education.location}</span>
                  </p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-newbeige/30 text-newbrown w-fit">
                  {education.period}
                </span>
              </div>
            </div>
          </div>
        )}
      </Slide>
    </section>
  );
}
