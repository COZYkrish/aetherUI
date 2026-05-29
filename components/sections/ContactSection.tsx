"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Github, Linkedin, Send, User, AtSign, FileText, MessageSquare } from "lucide-react";

import { FadeIn } from "../ui/FadeIn";

const contactLinks = [
  {
    name: "Email",
    href: "mailto:cozykrish2916@gmail.com",
    icon: Mail,
    value: "cozykrish2916@gmail.com",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/916372658336",
    icon: Phone,
    value: "+91 63726 58336",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/krish-sharma-710927380/",
    icon: Linkedin,
    value: "in/krish-sharma-710927380",
  },
  {
    name: "GitHub",
    href: "https://github.com/COZYkrish",
    icon: Github,
    value: "COZYkrish",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/wtf.kid_ish/",
    icon: Instagram,
    value: "@wtf.kid_ish",
  },
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
    setSuccess(false);
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required.";
    if (!formData.email.trim()) return "Email is required.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) return "Please enter a valid email address.";
    if (!formData.message.trim()) return "Message is required.";
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    const { name, email, subject, message } = formData;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
    const mailtoLink = `mailto:cozykrish2916@gmail.com?subject=${encodeURIComponent(
      subject || "New inquiry from portfolio"
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
    setSuccess(true);
    
    // Optional: reset form after a delay
    setTimeout(() => {
      setSuccess(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20">
      <div className="max-w-7xl mx-auto">
        <FadeIn delay={0} y={40} className="w-full mb-12 sm:mb-16 md:mb-20 text-center">
          <h2 className="font-black uppercase leading-none tracking-tight" style={{ fontSize: "clamp(3rem, 10vw, 120px)" }}>
            CONTACT
          </h2>
          <p className="mt-4 font-light text-lg sm:text-xl opacity-70 uppercase tracking-widest">
            Send a message or connect directly.
          </p>
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch">
          {/* Left Column: Contact Links */}
          <div className="w-full lg:w-5/12 flex flex-col gap-4">
            {contactLinks.map((link, i) => (
              <FadeIn key={link.name} delay={0.1 + i * 0.1} y={20} className="w-full">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-5 sm:p-6 rounded-[24px] border border-[#D7E2EA]/25 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-[#D7E2EA]/10 hover:border-[#D7E2EA]/60 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                      <link.icon className="w-5 h-5 text-[#D7E2EA] group-hover:drop-shadow-[0_0_8px_rgba(215,226,234,0.8)] transition-all" />
                    </div>
                    <div className="flex flex-col">
                      <span className="uppercase text-xs font-medium tracking-widest opacity-60 mb-1">{link.name}</span>
                      <span className="font-medium truncate max-w-[180px] sm:max-w-[240px]">{link.value}</span>
                    </div>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>

          {/* Right Column: Contact Form */}
          <div className="w-full lg:w-7/12">
            <FadeIn delay={0.3} y={30} className="h-full">
              <div className="p-6 sm:p-8 md:p-10 rounded-[32px] sm:rounded-[40px] border border-[#D7E2EA]/25 bg-white/5 backdrop-blur-md h-full flex flex-col justify-center">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-1 flex flex-col gap-2 relative">
                      <label htmlFor="name" className="uppercase text-xs font-medium tracking-widest opacity-80 pl-2">Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50" />
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-transparent border border-[#D7E2EA]/25 rounded-full py-3.5 pl-12 pr-6 outline-none focus:border-[#D7E2EA]/80 focus:bg-white/5 transition-all text-sm sm:text-base placeholder:opacity-30 placeholder:text-[#D7E2EA]"
                          placeholder="JOHNDOE"
                        />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-2 relative">
                      <label htmlFor="email" className="uppercase text-xs font-medium tracking-widest opacity-80 pl-2">Email</label>
                      <div className="relative">
                        <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50" />
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-transparent border border-[#D7E2EA]/25 rounded-full py-3.5 pl-12 pr-6 outline-none focus:border-[#D7E2EA]/80 focus:bg-white/5 transition-all text-sm sm:text-base placeholder:opacity-30 placeholder:text-[#D7E2EA]"
                          placeholder="HELLO@DOMAIN.COM"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 relative">
                    <label htmlFor="subject" className="uppercase text-xs font-medium tracking-widest opacity-80 pl-2">Subject (Optional)</label>
                    <div className="relative">
                      <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50" />
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-transparent border border-[#D7E2EA]/25 rounded-full py-3.5 pl-12 pr-6 outline-none focus:border-[#D7E2EA]/80 focus:bg-white/5 transition-all text-sm sm:text-base placeholder:opacity-30 placeholder:text-[#D7E2EA]"
                        placeholder="PROJECT INQUIRY"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 relative">
                    <label htmlFor="message" className="uppercase text-xs font-medium tracking-widest opacity-80 pl-2">Message</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-5 w-4 h-4 opacity-50" />
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-transparent border border-[#D7E2EA]/25 rounded-[24px] py-4 pl-12 pr-6 outline-none focus:border-[#D7E2EA]/80 focus:bg-white/5 transition-all resize-none text-sm sm:text-base placeholder:opacity-30 placeholder:text-[#D7E2EA]"
                        placeholder="HOW CAN WE COLLABORATE?"
                      />
                    </div>
                  </div>

                  <div className="min-h-[24px]">
                    {error && (
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm font-medium tracking-wide">
                        {error}
                      </motion.p>
                    )}
                    {success && (
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 text-sm font-medium tracking-wide">
                        Opening your email client...
                      </motion.p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="relative group w-full sm:w-auto self-start mt-4 outline-none border-none bg-transparent"
                  >
                    {/* Base / Outer edge of the keycap */}
                    <div className="absolute inset-0 bg-[#0A0A0A] rounded-[24px] shadow-[0_15px_25px_rgba(0,0,0,0.8)] border border-black"></div>
                    
                    {/* Inner slope gradient to give the 3D rim effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#3A3A3A] via-[#1A1A1A] to-[#050505] rounded-[24px] opacity-80"></div>

                    {/* Top Face (The actual pressable surface) */}
                    <div className="relative bg-[#262626] rounded-[18px] mx-2 mt-2 mb-4 px-10 py-5 flex items-center justify-center gap-3 shadow-[inset_0_2px_2px_rgba(255,255,255,0.15),inset_0_-2px_4px_rgba(0,0,0,0.4),0_6px_10px_rgba(0,0,0,0.6)] transition-all duration-100 active:translate-y-[8px] active:mb-2 active:shadow-[inset_0_2px_2px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.4),0_0px_0px_rgba(0,0,0,0.6)] group-hover:bg-[#2F2F2F]">
                      <span className="font-bold uppercase tracking-[0.25em] text-[#E0E0E0] text-sm sm:text-base drop-shadow-lg">SEND MESSAGE</span>
                      <Send className="w-5 h-5 text-[#E0E0E0] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 drop-shadow-lg" />
                    </div>
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
