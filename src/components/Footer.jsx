import React, { useState } from "react";
import { motion } from "framer-motion";
import { resume, github } from "../assets";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

// Check if window is available (for SSR)
const getWindowUrl = () => {
  if (typeof window !== 'undefined') {
    return window.location.href;
  }
  return '';
};

const Footer = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const email = "saurabhsbhatti@gmail.com";
  const phone = "+91 7249334904";

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "email") {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
      } else {
        setPhoneCopied(true);
        setTimeout(() => setPhoneCopied(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };


  const socialLinks = [
    {
      name: "GitHub",
      icon: github,
      url: "https://github.com/Saurabhbhatti",
    },
    {
      name: "LinkedIn",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg",
      url: "https://www.linkedin.com/in/saurabh-bhatti/",
    }
  ];

  return (
    <footer className="relative w-full bg-primary py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn("up", "spring", 0.1, 0.75)}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <p className="text-text-primary text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed max-w-3xl mx-auto">
            What's next? Feel free to reach out to me if you are looking for a
            developer, have a query, or simply want to connect.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn("up", "spring", 0.2, 0.75)}
          className="flex flex-col items-center gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12"
        >
          {/* Email */}
          <div className="flex items-center gap-3 sm:gap-4 bg-tertiary/50 backdrop-blur-sm rounded-lg px-4 sm:px-6 py-3 sm:py-4 w-full max-w-md hover:bg-tertiary/70 transition-colors">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-text-secondary flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="text-text-primary text-sm sm:text-base md:text-lg flex-1 text-left truncate">
              {email}
            </span>
            <button
              onClick={() => copyToClipboard(email, "email")}
              className="flex-shrink-0 p-2 hover:bg-white/10 rounded-lg transition-colors group"
              aria-label="Copy email to clipboard"
            >
              {emailCopied ? (
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-text-secondary group-hover:text-text-primary transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 sm:gap-4 bg-tertiary/50 backdrop-blur-sm rounded-lg px-4 sm:px-6 py-3 sm:py-4 w-full max-w-md hover:bg-tertiary/70 transition-colors">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-text-secondary flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="text-text-primary text-sm sm:text-base md:text-lg flex-1 text-left truncate">
              {phone}
            </span>
            <button
              onClick={() => copyToClipboard(phone, "phone")}
              className="flex-shrink-0 p-2 hover:bg-white/10 rounded-lg transition-colors group"
              aria-label="Copy phone to clipboard"
            >
              {phoneCopied ? (
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-text-secondary group-hover:text-text-primary transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              )}
            </button>
          </div>
        </motion.div>

        {/* Download Resume Button */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn("up", "spring", 0.3, 0.75)}
          className="flex justify-center mb-8 sm:mb-10 md:mb-12"
        >
          <motion.a
            href={`${resume}?download=true`}
            download="Saurabh_Bhatti_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-sm sm:text-base md:text-lg rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>Download Resume</span>
          </motion.a>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn("up", "spring", 0.4, 0.75)}
          className="text-center"
        >
          <p className="text-secondary text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
            You may also find me on these platforms!
          </p>
          <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                variants={fadeIn("up", "spring", 0.5 + index * 0.1, 0.75)}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-tertiary rounded-full flex items-center justify-center hover:bg-tertiary/80 transition-colors group"
                aria-label={social.name}
              >
                {social.name === "GitHub" ? (
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all"
                    loading="lazy"
                  />
                ) : (
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                )}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default SectionWrapper(Footer, "contact");

