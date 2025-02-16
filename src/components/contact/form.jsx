import React, { useState } from "react";
import { Flip } from "react-swift-reveal";

function Form() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Flip left>
      <div className="relative flex w-full overflow-hidden z-50">
        <form className="flex flex-col justify-evenly items-start relative gap-2 w-full">
          <label htmlFor="fullname" className="text-newbeige">
            Full Name
          </label>
          <input
            className="rounded-[3px] text-[.8em] w-full  p-1 bg-newbrown "
            type="text"
            placeholder="e.g. Juan Dela Cruz"
            minLength="1"
            required
            onChange={(e) => setFullName(e.target.value)}
            id="fullname"
          />
          <label htmlFor="email" className="text-newbeige">
            Email
          </label>
          <input
            className="rounded-[3px] text-[.8em] w-full p-1  bg-newbrown "
            type="email"
            placeholder="e.g. jdelacruz@gmail.com"
            minLength="1"
            required
            onChange={(e) => setEmail(e.target.value)}
            id="email"
          />
          <label htmlFor="subject" className="text-newbeige">
            Subject
          </label>
          <input
            className="rounded-[3px] text-[.8em]  w-full  p-1   bg-newbrown "
            type="text"
            placeholder="e.g Fix my header"
            minLength="1"
            required
            onChange={(e) => setSubject(e.target.value)}
            id="subject"
          />
          <label htmlFor="message" className="text-newbeige">
            Message
          </label>
          <textarea
            className="rounded-[3px] text-[.8em] w-full min-h-[8em]  p-1   bg-newbrown  text-justify "
            type="text"
            required
            minLength="1"
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
            id="message"
          />
          <button
            className="rounded-sm text-[.8em]  bg-newbeige text-newmaroon  text-center self-start px-3"
            type="submit"
            value="Send Message"
            onClick={() => alert("Sorry this feature is not yet available")}
          >
            Send
          </button>
        </form>
      </div>
    </Flip>
  );
}

export default Form;
