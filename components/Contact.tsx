"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate async submit (replace with real API call)
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-slate-950 to-black flex flex-col justify-center px-6 py-16 text-white max-w-4xl mx-auto"
    >
      <motion.h1
        className="text-5xl font-extrabold mb-6 text-center tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Get in Touch
      </motion.h1>

      <motion.p
        className="text-center text-gray-400 mb-12 max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        Whether you have a question, want to collaborate, or just want to say hi, my inbox is always open.
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        className="bg-slate-900 rounded-lg shadow-lg p-8 flex flex-col gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        <div className="flex flex-col md:flex-row gap-6">
          <label className="flex flex-col flex-1">
            <span className="mb-2 font-semibold">Name</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="bg-transparent border border-gray-600 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </label>

          <label className="flex flex-col flex-1">
            <span className="mb-2 font-semibold">Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="bg-transparent border border-gray-600 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </label>
        </div>

        <label className="flex flex-col">
          <span className="mb-2 font-semibold">Message</span>
          <textarea
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Write your message here..."
            className="bg-transparent border border-gray-600 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"
          />
        </label>

        <button
          type="submit"
          disabled={submitting}
          className="self-end inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold px-6 py-3 rounded-md shadow-md transition"
        >
          {submitting ? "Sending..." : "Send Message"}
          <Send size={18} />
        </button>

        {submitted && (
          <p className="mt-4 text-green-400 font-medium">
            Thanks for reaching out! I'll get back to you soon.
          </p>
        )}
      </motion.form>

      <motion.div
        className="mt-14 flex flex-col md:flex-row justify-center items-center gap-12 text-gray-400 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.7 }}
      >
        <div className="flex items-center gap-3">
          <Mail className="text-indigo-500" />
          <a href="mailto:your.email@example.com" className="hover:text-indigo-400 transition">
            your.email@example.com
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="text-indigo-500" />
          <a href="tel:+1234567890" className="hover:text-indigo-400 transition">
            +1 234 567 890
          </a>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="text-indigo-500" />
          <span>Your City, Country</span>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactPage;
