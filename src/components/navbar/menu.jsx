import React from "react";

function Menu(props) {
  const { state } = props;

  const scrollIntoView = (e, id) => {
    e.preventDefault();
    document.querySelector(`#${id}`).scrollIntoView();

    state();
  };

  return (
    <div
      className="fixed top-0 left-0 w-full min-h-screen flex flex-col justify-center items-center gap-6 z-40 font-poppins translate-x-full transition-all duration-500 bg-newmaroon text-newbeige text-[50px]"
      id="Menu"
    >
      <button onClick={(e) => scrollIntoView(e, "About")}>About</button>
      <button onClick={(e) => scrollIntoView(e, "Services")}>Services</button>
      <button onClick={(e) => scrollIntoView(e, "Projects")}>Projects</button>
      <button onClick={(e) => scrollIntoView(e, "Contact")}>Contact</button>
    </div>
  );
}

export default Menu;
