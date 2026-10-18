import React, { useEffect } from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

function Modal({ project, onClose }) {
  // ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-newwhite text-newmaroon rounded-2xl shadow-2xl p-6 sm:p-8 font-poppins border border-newbeige/50 overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 text-2xl text-newbrown hover:text-newmaroon transition-colors"
        >
          <IoClose />
        </button>

        {/* Header */}
        <div className="mb-4">
          <span className="text-xs uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded bg-newmaroon/10 text-newmaroon">
            {project.category === "mobile" ? "Mobile Application" : "Web Application"}
          </span>
          <h3 id="modal-title" className="text-2xl sm:text-3xl font-bold mt-2">
            {project.projectName}
          </h3>
          {project.period && (
            <p className="text-xs text-newbrown/80 mt-1">{project.period}</p>
          )}
        </div>

        {/* Image preview */}
        {project.projectImg && (
          <div className="w-full h-48 sm:h-64 rounded-xl overflow-hidden bg-newbeige/20 my-4 flex items-center justify-center border border-newbeige/30">
            <img
              src={project.projectImg}
              alt={project.projectName}
              className="max-h-full max-w-full object-contain p-2"
            />
          </div>
        )}

        {/* Description */}
        <p className="text-sm sm:text-base text-newbrown leading-relaxed font-light mt-3">
          {project.projectDesc}
        </p>

        {/* Tech Stack */}
        <div className="mt-5 pt-4 border-t border-newbeige/40">
          <p className="text-xs font-semibold uppercase tracking-wider text-newmaroon mb-2">
            Technologies Used
          </p>
          <div className="flex flex-wrap gap-2">
            {project.projectTechStack
              ?.split("|")
              .map((tech) => tech.trim())
              .filter(Boolean)
              .map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded bg-newbeige/30 text-newbrown font-medium"
                >
                  {tech}
                </span>
              ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 mt-6 pt-4 border-t border-newbeige/40">
          {project.projectLink && (
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-newmaroon text-newwhite text-sm font-medium hover:bg-newbrown transition-colors"
            >
              Live Demo <HiOutlineExternalLink className="text-base" />
            </a>
          )}
          {project.projectGithub && (
            <a
              href={project.projectGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-newbrown text-newbrown text-sm font-medium hover:bg-newbrown/10 transition-colors"
            >
              GitHub Repo <HiOutlineExternalLink className="text-base" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
