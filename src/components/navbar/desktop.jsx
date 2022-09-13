import React from "react";
import Slide from "react-reveal";

function Desktop() {
  const scrollIntoView = (e, id) => {
    e.preventDefault();
    document.querySelector(`#${id}`).scrollIntoView();
  };

  return (
    <div className="w-[60vw] h-full flex justify-center items-center gap-7">
      <Slide top cascade>
        <button onClick={(e) => scrollIntoView(e, "About")}>About</button>
        <button onClick={(e) => scrollIntoView(e, "Services")}>Services</button>
        <button onClick={(e) => scrollIntoView(e, "Projects")}>Projects</button>
        <button onClick={(e) => scrollIntoView(e, "Contact")}>Contact</button>
      </Slide>
    </div>
  );
}

export default Desktop;
