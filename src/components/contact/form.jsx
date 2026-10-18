import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Form() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null); // { type: 'success' | 'error', text: '' }

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) {
      return;
    }

    setIsSubmitting(true);
    setFeedback(null);

    const serviceID = "default_service";
    const templateID = "template_d44q1ot";
    const publicKey = "bFlKU4KZwmRlAxq9A";

    const formDataWithTimeStamp = {
      ...formData,
      timestamp: new Date().toLocaleString(),
    };

    emailjs
      .send(serviceID, templateID, formDataWithTimeStamp, publicKey)
      .then(() => {
        setFeedback({
          type: "success",
          text: "Thank you! Your message was sent successfully.",
        });
        setFormData({
          fullname: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        setFeedback({
          type: "error",
          text: "Failed to send message. You can reach out directly via reister.ruedas@gmail.com.",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <form
      className="flex flex-col gap-4 w-full text-left font-poppins"
      onSubmit={handleSubmit}
    >
      {feedback && (
        <div
          className={`p-3 rounded-lg text-xs sm:text-sm font-medium ${
            feedback.type === "success"
              ? "bg-green-100 text-green-800 border border-green-300"
              : "bg-red-100 text-red-800 border border-red-300"
          }`}
        >
          {feedback.text}
        </div>
      )}

      <div>
        <label htmlFor="fullname" className="block text-xs font-semibold uppercase tracking-wider text-newmaroon mb-1">
          Full Name
        </label>
        <input
          id="fullname"
          type="text"
          value={formData.fullname}
          onChange={handleInputChange}
          placeholder="Juan Dela Cruz"
          required
          className="w-full px-3.5 py-2 rounded-lg bg-newwhite border border-newbeige text-sm text-newbrown focus:outline-none focus:border-newmaroon"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-newmaroon mb-1">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="juan@example.com"
          required
          className="w-full px-3.5 py-2 rounded-lg bg-newwhite border border-newbeige text-sm text-newbrown focus:outline-none focus:border-newmaroon"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-newmaroon mb-1">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          value={formData.subject}
          onChange={handleInputChange}
          placeholder="Project Inquiry / Opportunity"
          required
          className="w-full px-3.5 py-2 rounded-lg bg-newwhite border border-newbeige text-sm text-newbrown focus:outline-none focus:border-newmaroon"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-newmaroon mb-1">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
          placeholder="How can I help you with your project?"
          required
          className="w-full px-3.5 py-2 rounded-lg bg-newwhite border border-newbeige text-sm text-newbrown focus:outline-none focus:border-newmaroon"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="self-start px-6 py-2.5 rounded-lg bg-newmaroon text-newwhite text-sm font-semibold hover:bg-newbrown transition-colors disabled:opacity-50 shadow-sm cursor-pointer"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

export default Form;
