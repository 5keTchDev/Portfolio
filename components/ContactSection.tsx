'use client'; // Enables Next.js Client Component features

import { useState } from 'react';
// Social icon imports
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { IoLogoStackoverflow } from "react-icons/io5";
import { SiLeetcode } from "react-icons/si";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

// ContactSection component renders the contact form and contact info section
export default function ContactSection() {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  // State to track form submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  // Handle input changes for all form fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission using EmailJS sendForm
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Use sendForm for React forms
    emailjs.sendForm(
      'service_k8wiv45',
      'template_s19gqos',
      formRef.current!,
      'HmQ6lNyJ9ee5aVPpU'
    ).then(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, (error) => {
      setIsSubmitting(false);
      alert('Failed to send message: ' + (error?.text || error?.message || 'Unknown error'));
    });
  };

  return (
    <div>
      {/* Section header */}
     
      {/* Main contact section with background image */}
      <section id="contact" className="min-h-screen flex items-center relative overflow-hidden">
        {/* Background image overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-blend-color-burn"
          style={{ backgroundImage: `url('/assets/contact.jpg')` }}
        ></div>
       
        {/* Main content container */}
        <div className="relative max-w-6xl mx-auto px-6 mt-4">
        {/* heading contact */}
        <div className='text-center relative z-10'>
          <div className="inline-flex items-center gap-2 bg-green-100 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-code-box-line"></i>
            </div>
              contact
            </div>
        </div>
          {/* Section title and description */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I&apos;d love to hear from you.
              Let&apos;s create something amazing together.
            </p>
          </div>

          {/* Two-column layout: contact info and form */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact info and social links */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Let&apos;s Connect</h3>

              {/* Contact details */}
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4 group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-green-50 rounded-xl p-2 cursor-pointer">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-green-100">
                    <i className="ri-mail-line text-white text-xl transition-all duration-300 group-hover:text-green-600 group-hover:scale-125"></i>
                  </div>
                  <div>
                    <div className="font-extrabold text-gray-900">Email</div>
                    <div className="text-black">sharma18mohit2018@gmail.com</div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-green-50 rounded-xl p-2 cursor-pointer">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-green-100">
                    <i className="ri-phone-line text-white text-xl transition-all duration-300 group-hover:text-green-600 group-hover:scale-125"></i>
                  </div>
                  <div>
                    <div className="font-extrabold text-gray-900">Phone</div>
                    <div className="text-black">+91 9084477831</div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-green-50 rounded-xl p-2 cursor-pointer">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-green-100">
                    <i className="ri-map-pin-line text-white text-xl transition-all duration-300 group-hover:text-green-600 group-hover:scale-125"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Location</div>
                    <div className="text-black">Dehradun, INDIA </div>
                  </div>
                </div>
              </div>

              {/* Social media links */}
              <div className="mt-12">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {/* GitHub */}
                  <a href="#" className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-green-800 transition-colors cursor-pointer">
                    <FaGithub />
                  </a>
                  {/* LinkedIn */}
                  <a href="#" className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-colors cursor-pointer">
                    <FaLinkedin />
                  </a>
                  {/* Twitter/X */}
                  <a href="#" className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors cursor-pointer">
                    <FaXTwitter />
                  </a>
                  {/* LeetCode */}
                  <a href="#" className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors cursor-pointer">
                    <SiLeetcode />
                  </a>
                  {/* Stack Overflow */}
                  <a href="#" className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors cursor-pointer">
                    <IoLogoStackoverflow />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact form section */}
            <div className="bg-slate-50 rounded-2xl p-8 shadow-lg border border-black">
              {/* Show thank you message if submitted, else show form */}
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-check-line text-green-600 text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for reaching out. I&apos;ll get back to you soon.</p>
                </div>
              ) : (
                <form ref={formRef} id="contact-form" onSubmit={handleSubmit} className="space-y-6 mb-5">
                  {/* Name and Email fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Subject field */}
                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                      placeholder="Project inquiry"
                    />
                  </div>

                  {/* Message field */}
                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      maxLength={500}
                      rows={5}
                      className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm resize-none"
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
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
                
              )} 
            </div>
             <br />
          </div>
        </div>
      </section>
    </div>
  );
}
