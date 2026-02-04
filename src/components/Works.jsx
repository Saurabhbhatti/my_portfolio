import React, { useRef, useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { motion, useAnimation, useInView } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn } from "../utils/motion";

const ProjectCard = ({
  name,
  description,
  tags,
  animate,
  isMobile,
  isTablet,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <motion.div 
      variants={animate} 
      className="w-full h-full"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-4 sm:p-5 rounded-2xl w-full h-full flex flex-col hover:shadow-2xl transition-shadow duration-300"
      >
        <div className="mt-2 flex-1 flex flex-col">
          <h3 className="text-white font-bold text-[20px] sm:text-[22px] md:text-[24px] leading-tight mb-2">
            {name}
          </h3>
          <p className="text-secondary text-[12px] sm:text-[13px] md:text-[14px] leading-relaxed flex-1">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <p
              key={index}
              className={`text-[12px] sm:text-[13px] md:text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

        {(source_code_link || live_demo_link) && (
          <div className="flex gap-3 mt-auto pt-2 border-t border-gray-700">
            {live_demo_link && (
              <motion.a
                href={live_demo_link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-gradient-to-r from-accent-purple to-accent-blue text-text-primary text-center py-2 px-4 rounded-lg text-sm font-medium hover:shadow-lg transition-shadow duration-300"
              >
                Live Demo
              </motion.a>
            )}
            {source_code_link && (
              <motion.a
                href={source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-tertiary border-2 border-accent-purple text-text-primary text-center py-2 px-4 rounded-lg text-sm font-medium hover:bg-accent-purple/20 transition-colors duration-300"
              >
                GitHub
              </motion.a>
            )}
          </div>
        )}
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -200px 0px" });
  const mainControls = useAnimation();
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  useEffect(() => {
    // Set initial width
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 150);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  // Determine breakpoints
  const isMobile = windowWidth < 640; // sm breakpoint
  const isTablet = windowWidth >= 640 && windowWidth < 1024; // md breakpoint

  // Determine grid layout based on screen size
  const getGridClass = () => {
    if (isMobile) {
      return "grid grid-cols-1 gap-4 auto-rows-fr px-4";
    } else if (isTablet) {
      return "grid grid-cols-2 gap-5 md:gap-6 auto-rows-fr px-4 md:px-6";
    } else {
      return "grid grid-cols-3 gap-6 lg:gap-7 auto-rows-fr px-4 lg:px-8";
    }
  };

  return (
    <div ref={ref} className="w-full">
      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <h3 className={`${styles.sectionSubText} text-center`}>
          Innovative Creations
        </h3>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <h3 className={`${styles.sectionHeadText} text-center`}>
          Projects.
        </h3>
      </motion.div>

      <motion.div className="mt-10 sm:mt-12 md:mt-16">
        <div className={getGridClass()}>
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              animate={
                isMobile
                  ? {}
                  : fadeIn("up", "spring", index * 0.5, 0.75)
              }
              isMobile={isMobile}
              isTablet={isTablet}
              {...project}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Works, "projects");
