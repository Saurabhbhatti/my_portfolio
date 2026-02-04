"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import { resume, profilepic } from "../assets";
import PreviewModal from "./PreviewModal";

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const mainControls = useAnimation();
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const handleResumeClick = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResumeModal = () => {
    setIsResumeModalOpen(false);
  };

  return (
    <div ref={sectionRef} className="pt-[60px] md:pt-0 overflow-hidden">
      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <p className={styles.sectionSubText}>Introduction</p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8 md:gap-10">
        {/* Profile Section */}
        <motion.div
          variants={fadeIn("right", "spring", 0.5, 0.75)}
          className="w-full md:w-1/3 flex flex-col items-center"
        >
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-[0_0_22.5px_7.5px_rgba(128,0,102,1)]">
            <img
              src={profilepic || "/placeholder.svg"}
              alt="Saurabh Bhatti"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mt-6 sm:mt-8 md:mt-10 flex flex-wrap gap-3 sm:gap-4 md:gap-5 justify-center">
            <motion.button
              onClick={handleResumeClick}
              className="px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-md shadow-[0_5px_0_0_rgba(0,0,0,0.6)] hover:translate-y-[2px] transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.button>

            <motion.button
              className="px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-md shadow-[0_5px_0_0_rgba(0,0,0,0.6)] hover:translate-y-[2px] transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/saurabh-bhatti/",
                  "_blank"
                )
              }
            >
              LinkedIn
            </motion.button>

            <motion.button
              className="px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-gray-600 to-gray-800 rounded-md shadow-[0_5px_0_0_rgba(0,0,0,0.6)] hover:translate-y-[2px] transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open("https://github.com/Saurabhbhatti", "_blank")}
            >
              GitHub
            </motion.button>
          </div>
        </motion.div>

        {/* About Content */}
        <motion.div
          variants={fadeIn("left", "spring", 0.5, 0.75)}
          className="w-full md:w-2/3"
        >
          <motion.ul
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 sm:mt-6 text-secondary text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] max-w-3xl space-y-4 sm:space-y-5 md:space-y-6 list-none"
          >
            <motion.li
              variants={fadeIn("up", "spring", 0.1, 0.75)}
              className="flex items-start"
            >
              <span className="mr-3 sm:mr-4 text-xl sm:text-2xl flex-shrink-0">👨‍💻</span>
              <span className="leading-relaxed">
                Front-End Developer with <strong>4+ years of experience</strong>{" "}
                specializing in
                <strong> React.js, TypeScript, and Redux</strong>, building
                scalable and high-performance web applications.
              </span>
            </motion.li>

            <motion.li
              variants={fadeIn("up", "spring", 0.2, 0.75)}
              className="flex items-start"
            >
              <span className="mr-3 sm:mr-4 text-xl sm:text-2xl flex-shrink-0">🏢</span>
              <span className="leading-relaxed">
                Currently working at <strong>Mayora Infotech Pvt. Ltd.</strong>,
                delivering production-ready frontend solutions using ReactJS,
                TypeScript, Tailwind CSS, and Material UI.
              </span>
            </motion.li>

            <motion.li
              variants={fadeIn("up", "spring", 0.3, 0.75)}
              className="flex items-start"
            >
              <span className="mr-3 sm:mr-4 text-xl sm:text-2xl flex-shrink-0">🧠</span>
              <span className="leading-relaxed">
                Strong expertise in{" "}
                <strong>component-based architecture</strong>, Redux Toolkit,
                Redux-Saga, React Router, and RESTful API integration.
              </span>
            </motion.li>

            <motion.li
              variants={fadeIn("up", "spring", 0.4, 0.75)}
              className="flex items-start"
            >
              <span className="mr-3 sm:mr-4 text-xl sm:text-2xl flex-shrink-0">🚀</span>
              <span className="leading-relaxed">
                Worked on real-world products across{" "}
                <strong>
                  Cybersecurity, Healthcare, Workforce Management, and
                  E-commerce
                </strong>{" "}
                domains.
              </span>
            </motion.li>

            <motion.li
              variants={fadeIn("up", "spring", 0.5, 0.75)}
              className="flex items-start"
            >
              <span className="mr-3 sm:mr-4 text-xl sm:text-2xl flex-shrink-0">⚙️</span>
              <span className="leading-relaxed">
                Experienced in performance optimization, async state handling,
                debugging, and Agile collaboration.
              </span>
            </motion.li>

            <motion.li
              variants={fadeIn("up", "spring", 0.6, 0.75)}
              className="flex items-start"
            >
              <span className="mr-3 sm:mr-4 text-xl sm:text-2xl flex-shrink-0">💡</span>
              <span className="leading-relaxed">
                Passionate about clean UI, scalable frontend architecture, and
                continuous learning.
              </span>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>

      {/* Resume Preview Modal */}
      <PreviewModal
        isOpen={isResumeModalOpen}
        onClose={handleCloseResumeModal}
        fileSrc={resume}
        fileType="pdf"
        title="Saurabh Bhatti - Resume"
      />
    </div>
  );
};

export default SectionWrapper(About, "about");
