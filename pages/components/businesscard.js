import React, { useEffect, useState } from "react";
import Flip from "react-reveal/Flip";

function BusinessCard() {
  const [flipCard, setFlipCard] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.prevenDefault();
  };

  return (
    <div className="flex flex-col relative justify-center items-center w-fit m-10">
      <div>
        <img
          src="./hmu.png"
          alt="Image was here"
          className="absolute -top-64 right-0 w-64 h-64 z-0 opacity-0 hidden transform translate-y-72 duration-150 lg:flex group-hover:opacity-100 group-hover:translate-y-0"
        ></img>
      </div>
      {flipCard ? (
        <Flip right>
          <div className="flex flex-row  relative lg:flex-row z-10 justify-center items-center transform duration-200 w-[18em] sm:w-[40em] h-fit py-[2em]  rounded-2xl bg-newbeige text-black shadow-2xl">
            <div className="flex flex-row justify-around w-[100%]  items-center ">
              <img
                src="/logo-nobg.png"
                alt={"Image"}
                className="hidden sm:flex rounded-lg w-64 h-64 "
              ></img>
              <div className="flex flex-col static w-[90%] gap-4 ">
                <div className="text-[.7em] sm:text-[1em]">
                  <i className="fa fa-map-marker"></i>
                  <p>Antipolo City, Rizal, 1870</p>
                </div>
                <div className="text-[.7em] sm:text-[1em]">
                  <i className="fa fa-envelope"></i>
                  <p className="">reister.ruedas@gmail.com</p>
                  <p>rlruedas@student.apc.edu.ph</p>
                </div>
                <div className="text-[.7em] sm:text-[1em]">
                  <i className="fa fa-phone"></i>
                  <p>+639493241618</p>
                </div>
                <div className="text-[.7em] sm:text-[1em]">
                  <i className="fa fa-file-text"></i> <br />
                  <a
                    href="./Resume-Reister-Ruedas.pdf"
                    className="rounded-md bg-transparent placeholder-gray-700 self-end hover:opacity-50"
                    download
                  >
                    Download My Resume
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center w-[30%] h-[100%]  ">
              <button
                className="w-[1.5em] h-[1.5em] rounded-full border-solid border-black border placeholder-gray-700 fa fa-angle-right text-black"
                onClick={() => setFlipCard(false)}
              />
            </div>
          </div>
        </Flip>
      ) : (
        <Flip right>
          <form
            className="flex flex-row relative lg:flex-row z-10 justify-center items-center transform duration-200  w-[23em] sm:w-[40em] h-[50vh]  rounded-2xl bg-newbeige text-black"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col relative w-[100%] ml-[1em]">
              <form className="flex flex-col justify-evenly items-center relative gap-2">
                <input
                  className="rounded-[3px] text-[.8em] w-full  p-1 bg-newwhite placeholder-black "
                  type="text"
                  placeholder="Full Name"
                  minLength="1"
                  required
                  onChange={(e) => setFullName(e.target.value)}
                />
                <input
                  className="rounded-[3px] text-[.8em] w-full p-1  bg-newwhite placeholder-black "
                  type="email"
                  placeholder="Email"
                  minLength="1"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="rounded-[3px] text-[.8em]  w-full  p-1   bg-newwhite placeholder-black "
                  type="text"
                  placeHolder="Subject"
                  minLength="1"
                  required
                  onChange={(e) => setSubject(e.target.value)}
                />
                <textarea
                  className="rounded-[3px] text-[.8em] w-full min-h-[8em]  p-1   bg-newwhite  placeholder-black  text-justify "
                  type="text"
                  required
                  minLength="1"
                  placeholder="Message"
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button
                  className="rounded-sm text-[.8em]  bg-newwhite  text-center self-start px-3"
                  type="submit"
                  value="Send Message"
                  onClick={() => alert("Sorry this feature is not yet available")}
                >
                  Send
                </button>
              </form>
            </div>
            <div className="flex flex-row w-[20%] relative items-center justify-center ">
              <button
                className="w-[1.5em] h-[1.5em] rounded-full border-solid border-black border placeholder-gray-700 fa fa-angle-right text-black"
                onClick={() => setFlipCard(true)}
              />
            </div>
          </form>
        </Flip>
      )}
    </div>
  );
}

export default BusinessCard;
