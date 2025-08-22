import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-16 text-center max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 rounded-xl border text-sm md:text-base"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-xl border text-sm md:text-base"
        />
        <textarea
          placeholder="Message"
          className="w-full p-3 rounded-xl border text-sm md:text-base"
        ></textarea>
        <button className="px-6 py-2 bg-purple-600 text-white rounded-xl">
          Send Message
        </button>
      </form>
      <div className="flex gap-6 justify-center mt-6 text-xl md:text-2xl">
        <FaLinkedin /> <FaGithub /> <FaTwitter />
      </div>
    </section>
  );
};

export default Contact;
