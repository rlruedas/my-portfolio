import React, { useState } from "react";
import { Flip } from "react-swift-reveal";
import emailjs from "@emailjs/browser";

function Form() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
    timestamp: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
   }

   const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) {
      return;
    }
    const serviceID = 'default_service';
    const templateID = 'template_d44q1ot';
    const publicKey = 'bFlKU4KZwmRlAxq9A';

    const formDataWithTimeStamp = {
    ...formData,
    timestamp: new Date().toLocaleString(),
    };

    emailjs.send(serviceID, templateID, formDataWithTimeStamp, publicKey)
    .then (() => {
      alert("Message sent successfully!");
      form.reset();
      setFormData({
        fullname: "",
        email: "",
        subject: "",
        message: "",
        timestamp: "",
      });
    }).catch((error) => {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again later.");
    })
   }

  return (
    <Flip left>
      <div className="relative flex w-full overflow-hidden z-50">
        <form className="flex flex-col justify-evenly items-start relative gap-2 w-full" 
            onSubmit={handleSubmit}>
          <label htmlFor="fullname" className="text-newbeige">
            Full Name
          </label>
          <input
            className="rounded-[3px] text-[.8em] w-full  p-1 bg-newbrown "
            type="text"
            placeholder="e.g. Juan Dela Cruz"
            minLength="1"
            required
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            placeholder="What can I do for you?"
            onChange={handleInputChange}
            id="message"
          />
          <button
            className="rounded-sm text-[.8em]  bg-newbeige text-newmaroon  text-center self-start px-3"
            type="submit"
            value="Send Message"
          >
            Send
          </button>
        </form>
      </div>
    </Flip>
  );
}

export default Form;
