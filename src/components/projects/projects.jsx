import React, { useState } from "react";
import data from "../../data/projects.json";
import Modal from "./modal";
import { Slide } from "react-swift-reveal";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState("all");

  const projects = data.projectDetails || [];
  const mobileProjects = projects.filter((p) => p.category === "mobile");
  const webProjects = projects.filter((p) => p.category === "web");

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  const renderTimeline = (title, items) => {
    if (!items.length) return null;

    return (
      <div className="mb-14 last:mb-0">
        <h3 className="text-xl sm:text-2xl font-bold text-newmaroon mb-6 flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-newbrown" />
          {title}
        </h3>

        <div className="relative pl-6 sm:pl-8 border-l-2 border-newbeige/50 space-y-8">
          {items.map((item, idx) => (
            <div key={item.projectName || idx} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[32px] sm:-left-[41px] top-1.4 w-4 h-4 rounded-full border-2 border-newmaroon bg-newwhite group-hover:bg-newbrown transition-colors" />

              {/* Card */}
              <div className="p-6 rounded-2xl bg-newwhite border border-newbeige/60 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h4 className="text-lg sm:text-xl font-bold text-newmaroon">
                    {item.projectName}
                  </h4>
                  {item.period && (
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-newbeige/30 text-newbrown w-fit">
                      {item.period}
                    </span>
                  )}
                </div>

                <p className="text-sm text-newbrown leading-relaxed mb-4 font-light">
                  {item.projectDesc}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.projectTechStack
                    ?.split("|")
                    .map((tech) => tech.trim())
                    .filter(Boolean)
                    .map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-0.5 rounded bg-newbeige/20 text-newbrown font-normal"
                      >
                        {tech}
                      </span>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-2 border-t border-newbeige/30">
                  <button
                    onClick={() => openProjectModal(item)}
                    className="text-xs font-semibold text-newmaroon hover:text-newbrown transition-colors"
                  >
                    View Details →
                  </button>
                  {item.projectLink && (
                    <a
                      href={item.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-newbrown hover:text-newmaroon flex items-center gap-1 transition-colors"
                    >
                      Live Demo <HiOutlineExternalLink />
                    </a>
                  )}
                  {item.projectGithub && (
                    <a
                      href={item.projectGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-newbrown hover:text-newmaroon flex items-center gap-1 transition-colors"
                    >
                      Code <HiOutlineExternalLink />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section
      className="w-full max-w-5xl px-6 py-20 mx-auto font-poppins"
      id="Projects"
    >
      <Slide bottom>
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest font-semibold text-newbrown">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-newmaroon mt-1">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-newmaroon mx-auto mt-3 rounded-full" />
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center items-center gap-2 mb-12">
          {[
            { id: "all", label: "All Projects" },
            { id: "mobile", label: `Mobile (${mobileProjects.length})` },
            { id: "web", label: `Web (${webProjects.length})` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-newmaroon text-newwhite shadow-sm"
                  : "bg-newwhite text-newbrown border border-newbeige/50 hover:bg-newbeige/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Timelines by Category */}
        <div className="mt-8">
          {(activeTab === "all" || activeTab === "mobile") &&
            renderTimeline("Mobile Application Projects", mobileProjects)}

          {(activeTab === "all" || activeTab === "web") &&
            renderTimeline("Web Development Projects", webProjects)}
        </div>
      </Slide>

      {/* Details Modal */}
      {selectedProject && (
        <Modal project={selectedProject} onClose={closeProjectModal} />
      )}
    </section>
  );
}
