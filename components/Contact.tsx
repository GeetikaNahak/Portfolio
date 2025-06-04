"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contacts: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-black px-6 py-20 text-white flex flex-col items-center"
    >
      <motion.h2
              className="text-4xl md:text-5xl font-bold text-center mb-4 relative  "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Get In Touch
              <span className="block h-1 w-20 mx-auto mt-2 bg-gradient-to-r from-indigo-500 to-blue-400 rounded"></span>
            </motion.h2>
      <p className="max-w-xl text-center text-gray-300 mb-12">
        Whether you want to collaborate, have a question, or just say hi, I’d love to hear from you!
      </p>

      <div className="flex flex-col md:flex-row md:space-x-12 w-full max-w-5xl">
        {/* Contact Info */}
        <div className="md:w-1/3 bg-slate-900 rounded-xl p-8 shadow-lg flex flex-col space-y-6">
          <h3 className="text-xl font-semibold mb-4 border-b border-blue-500 pb-2">Contact Info</h3>
          <div className="flex items-center space-x-4 text-white-200">
            
              Happy to connect on -
           
          </div>
          
          <div className="flex space-x-6 mt-6">
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white-200 hover:text-white transition"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="https://github.com/geetikanahak"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white-100 hover:text-white transition"
            >
              <FaGithub size={32} />
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="md:w-2/3 mt-10 md:mt-0 bg-slate-900 rounded-xl p-8 shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-6 border-b border-blue-500 pb-2">Send Me a Message</h3>

          {submitted && (
            <p className="mb-4 text-green-400 font-semibold">
              Thanks for reaching out! I’ll get back to you soon.
            </p>
          )}

          <div className="flex flex-col space-y-5">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="rounded-md px-4 py-3 bg-slate-800 border border-transparent focus:outline-none focus:border-blue-400 transition"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="rounded-md px-4 py-3 bg-slate-800 border border-transparent focus:outline-none focus:border-blue-400 transition"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={5}
              className="rounded-md px-4 py-3 bg-slate-800 border border-transparent focus:outline-none focus:border-blue-400 transition resize-none"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition rounded-md py-3 font-semibold text-white shadow-md"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
