'use client';

import React, { useRef, useState } from 'react';
import { FaGithub,  FaXTwitter,FaLocationDot } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdCall , IoMdMailOpen } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";
import { ImStackoverflow } from "react-icons/im";
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ShineBorder } from "@/components/magicui/shine-border";

// Animation variants
const pageAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function ContactSection() {
  // Animation refs and states
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const formRef = useRef<HTMLFormElement>(null);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Show toast notification
  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 3000);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'service_k8wiv45',
        'template_s19gqos',
        formRef.current!,
        'HmQ6lNyJ9ee5aVPpU'
      );
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      showToast('Message sent successfully!', 'success');
    } catch (error: any) {
      setIsSubmitting(false);
      showToast(error?.text || 'Failed to send message', 'error');
    }
  };

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={pageAnimation}
      className="relative"
    >
      <section id="contact" className="py-8 md:py-12 bg-gradient-to-br from-white via-gray-50 to-green-50 relative overflow-hidden">
        {/* Background image overlay */}
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-blend-color-burn"
            style={{ backgroundImage: `url('/assets/contact.jpg')` }}
            initial={{ scale: 1.1 }}
            animate={isInView ? { scale: 1 } : { scale: 1.1 }}
            transition={{ duration: 1.5 }}
          ></motion.div>
          <motion.div 
            className="absolute inset-0 bg- backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
        </motion.div>
       
        {/* Main content container */}
        <div className="relative max-w-6xl mx-auto px-6 mt-0">
          {/* heading contact */}
          <motion.div 
            className="text-center relative z-10"
            variants={itemAnimation}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-green-100 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
               祝 Contact
            </motion.div>
          </motion.div>

          {/* Section title and description */}
          <motion.div 
            className="text-center mb-16"
            variants={itemAnimation}
          >
            <motion.h2 
              className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 animate-bounce px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Get In Touch
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-serif px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Have a project in mind or want to collaborate? I'd love to hear from you.
              Let's create something amazing together.
            </motion.p>
          </motion.div>

          {/* Two-column layout: contact info and form */}
          <motion.div 
            className="grid lg:grid-cols-2 gap-8 md:gap-16 px-4 md:px-6 max-w-7xl mx-auto w-full"
            variants={itemAnimation}
          >
            <motion.div
              variants={itemAnimation}
              className="space-y-6 md:space-y-8"
            >
              <motion.div
                className="relative pb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.h3 
                  className="text-2xl md:text-4xl font-extrabold text-black font-serif"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Let's Connect
                </motion.h3>
                <motion.div
                  className="mt-3 h-px bg-gradient-to-r from-black/50 to-transparent"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </motion.div>

              <div className="space-y-6">
                {[
                  { 
                    Icon: IoMdMailOpen, 
                    title: "Email", 
                    value: "sharma18mohit2018@gmail.com",
                    gradient: "from-[#00ff88] to-[#00a3ff]",
                    delay: 0.3
                  },
                  { 
                    Icon: IoMdCall, 
                    title: "Phone", 
                    value: "+91 9084477831",
                    gradient: "from-[#00ff88] to-[#00ff88]",
                    delay: 0.4
                  },
                  { 
                    Icon: FaLocationDot, 
                    title: "Location", 
                    value: "Dehradun, INDIA",
                    gradient: "from-[#00ff88] to-[#61ff00]",
                    delay: 0.5
                  }
                ].map((item) => (
                  <motion.div
                    key={item.title}
                    className="relative group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: item.delay,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    <motion.div 
                      className="absolute -inset-0.5 bg-gradient-to-r opacity-75 blur-sm group-hover:opacity-100 transition-opacity"
                      style={{
                        backgroundImage: `linear-gradient(to right, #131313FF, #00ff88)`
                      }}
                    />
                    <motion.div
                      className="relative flex items-center gap-2 md:gap-4 p-3 md:p-4 rounded-xl cursor-pointer
                              bg-black/80 backdrop-blur-sm"
                      whileHover={{ y: -2 }}
                    >
                      <div className="relative">
                        <motion.div 
                          className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <item.Icon className="text-black text-2xl" />
                        </motion.div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-mono font-bold text-base md:text-lg text-green-400">{item.title}</div>
                        <div className="text-gray-300 font-mono text-sm md:text-base truncate">{item.value}</div>
                      </div>
                      <motion.div
                        className="text-green-400 opacity-0 group-hover:opacity-100 transition-all duration-300 pr-2"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                      >
                        <i className="ri-arrow-right-line text-xl" />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

            <motion.div 
                className="mt-8 md:mt-16 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.div className="relative mb-6 md:mb-8">
                  <motion.h4 
                    className="text-lg md:text-xl font-extrabold text-black font-serif relative inline-block"
                  >
                    Follow Me
                  </motion.h4>
                  <motion.div
                    className="absolute -bottom-2 left-0 h-px w-full bg-gradient-to-r from-black/50 to-transparent"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                </motion.div>
                <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
                  {[
                    { Icon: FaGithub, href: "https://github.com/5keTchDev", label: "GitHub", delay: 0.7 },
                    { Icon: FaLinkedinIn, href: "www.linkedin.com/in/mohit-sharma-a66302227", label: "LinkedIn", delay: 0.8 },
                    { Icon: FaXTwitter, href: "https://x.com/Mohit___18", label: "Twitter", delay: 0.9 },
                    { Icon: SiLeetcode, href: "https://leetcode.com/u/SkeTch_ArTisT/", label: "LeetCode", delay: 1.0 },
                    { Icon: ImStackoverflow, href: "https://stackoverflow.com/users/23002293/5ketchdev", label: "Stack Overflow", delay: 1.1 }
                  ].map((social) => (
                    <motion.div
                      key={social.label}
                      className="relative group"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: social.delay }}
                    >
                      <motion.div
                        className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-green-400 to-green-600 opacity-75 blur-sm
                                group-hover:opacity-300 transition-opacity duration-300"
                      />
                      <motion.a
                        href={social.href}
                        className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-black rounded-xl"
                        whileHover={{ y: -20 }}
                        whileTap={{ scale: 4 }}
                      >
                        <social.Icon className="text-lg md:text-xl text-green-500 transition-transform duration-300 transform group-hover:scale-110" />
                      </motion.a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>


            {/* Contact form section */}
            <motion.div 
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 md:p-8 shadow-lg border "
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
             <ShineBorder />
              {/* Show thank you message if submitted, else show form */}
              <AnimatePresence mode="wait">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-check-line text-green-600 text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for reaching out. I will get back to you soon.</p>
                </div>
              ) : (
                <form ref={formRef} id="contact-form" onSubmit={handleSubmit} className="space-y-6 mb-5">
                  {/* Name and Email fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold font-mono text-black mb-2">
                        FULL NAME
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm placeholder-gray-400"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold font-mono text-black mb-2">
                        EMAIL
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm placeholder-gray-400"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Subject field */}
                  <div>
                    <label className="block text-sm font-semibold font-mono text-black mb-2">
                      SUBJECT
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm placeholder-gray-400"
                      placeholder="Project inquiry"
                    />
                  </div>

                  {/* Message field */}
                  <div>
                    <label className="block text-sm font-semibold font-mono text-black mb-2">
                      MEASSAGE
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      maxLength={500}
                      rows={5}
                      className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm resize-none placeholder-gray-400"
                      placeholder="Tell me about your project..."
                    ></textarea>
                    {/* Character count */}
                    <div className="text-right text-xs text-gray-500 mt-1">
                      {formData.message.length}/500 characters
                    </div>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-700 hover:bg-black text-white font-extrabold  py-3  px-6 md:px-8 text-2x1 md:text-base rounded-lg transition-all transform hover:scale-105 shadow-3xl-inner whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed font-mono"
                  >
                    {isSubmitting ? 'Sending...' : 'SEND MESSAGE ➜'}
                  </button>
                </form>
                
              )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}