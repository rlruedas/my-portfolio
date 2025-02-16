import React from "react";
import { Slide } from "react-swift-reveal";

function Desktop() {
  const scrollIntoView = (e, id) => {
    e.preventDefault();
    document.querySelector(`#${id}`).scrollIntoView();
  };

  return (
    <div className="h-full flex justify-center items-center gap-7 text-lg ">
      <Slide top>
        <button className="hover:text-black" onClick={(e) => scrollIntoView(e, "About")}>About |</button>
        <button className="hover:text-black" onClick={(e) => scrollIntoView(e, "Services")}>Services |</button>
        <button className="hover:text-black" onClick={(e) => scrollIntoView(e, "Projects")}>Projects |</button>
        <button className="hover:text-black" onClick={(e) => scrollIntoView(e, "Contact")}>Contact |</button>
        <button className="hover:text-black" onClick={(e) => scrollIntoView(e, "Contact")}>Blog |</button>
      </Slide>
    </div>
  );
}

export default Desktop;
