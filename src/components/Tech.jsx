import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Import all assets
import {
  javascript,
  typescript,
  tailwind,
  reactjs,
  postgresql,
  mongodb,
  redux,
  html,
  css,
  materialui,
  bootstrap,
  nodejs,
  expressjs,
  restapi,
  git,
  gitlab,
  jira,
  vscode,
} from "../assets";

const programming = [
  { name: "JavaScript (ES6+)", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux", icon: redux },
  { name: "HTML5", icon: html },
  { name: "CSS3", icon: css },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Material UI", icon: materialui },
  { name: "Bootstrap", icon: bootstrap },
];

const itTools = [
  { name: "Node.js", icon: nodejs },
  { name: "Express.js", icon: expressjs },
  { name: "MongoDB", icon: mongodb },
  { name: "PostgreSQL", icon: postgresql },
  { name: "RESTful APIs", icon: restapi },
  { name: "Git", icon: git },
  { name: "GitLab", icon: gitlab },
  { name: "JIRA", icon: jira },
  { name: "VS Code", icon: vscode },
];

const Tech = () => {
  const [rows, setRows] = useState({
    programming: [],
    itTools: [],
  });

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const calculateRows = (width, techArray) => {
    let dynamicRows = [];
    let startIndex = 0;
    let rowSize = 6;

    // Mobile (very small screens) - 2 items per row
    if (width < 400) {
      while (startIndex < techArray.length) {
        dynamicRows.push(techArray.slice(startIndex, startIndex + 2));
        startIndex += 2;
      }
    }
    // Small mobile - 3 items per row
    else if (width < 600) {
      while (startIndex < techArray.length) {
        dynamicRows.push(techArray.slice(startIndex, startIndex + 3));
        startIndex += 3;
      }
    }
    // Tablet - 4 items per row
    else if (width < 900) {
      while (startIndex < techArray.length) {
        dynamicRows.push(techArray.slice(startIndex, startIndex + 4));
        startIndex += 4;
      }
    }
    // Small desktop - 5 items per row
    else if (width < 1200) {
      while (startIndex < techArray.length) {
        dynamicRows.push(techArray.slice(startIndex, startIndex + 5));
        startIndex += 5;
      }
    }
    // Large desktop - alternating 6 and 5 items per row (honeycomb pattern)
    else {
      while (startIndex < techArray.length) {
        const endIndex = startIndex + rowSize;
        dynamicRows.push(techArray.slice(startIndex, endIndex));
        startIndex += rowSize;
        rowSize = rowSize === 6 ? 5 : 6;
      }
    }

    return dynamicRows;
  };

  useEffect(() => {
    const calculateRowsForAllCategories = () => {
      const rowsData = {
        programming: calculateRows(window.innerWidth, programming),
        itTools: calculateRows(window.innerWidth, itTools),
      };
      setRows(rowsData);
    };

    calculateRowsForAllCategories();

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        calculateRowsForAllCategories();
      }, 150);
    };
    
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  const hexagonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: Math.random() * 1.5,
        duration: 0.5,
        type: "spring",
      },
    },
    hover: {
      scale: 1.05,
      zIndex: 2,
      transition: { duration: 0.3 },
    },
  };

  const renderCategory = (categoryName, categoryRows) => (
    <motion.div
      key={categoryName}
      className="category-container"
      initial="hidden"
      animate={mainControls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
      }}
    >
      <motion.h2
        className="category-title top"
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        style={{
          fontFamily: "'', cursive",
          background: "linear-gradient(90deg, #915EFF, #00BFFF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textFillColor: "transparent",
          filter: "drop-shadow(0 0 10px #915EFF)",
        }}
      >{`<${categoryName}>`}</motion.h2>
      <div className="honeycomb-grid">
        {categoryRows?.map((row, rowIndex) => (
          <div
            key={`${categoryName}-row-${rowIndex}`}
            className={`honeycomb-row ${
              rowIndex % 2 === 1 ? "staggered-row" : ""
            }`}
          >
            {row.map((tech) => (
              <motion.div
                key={tech.name}
                className="hexagon"
                variants={hexagonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  loading="lazy"
                  style={{ userSelect: "none" }}
                  draggable="false"
                />
              </motion.div>
            ))}
          </div>
        ))}
      </div>
      <motion.h2
        className="category-title bottom"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        style={{
          fontFamily: "'', cursive",
          background: "linear-gradient(90deg, #915EFF, #00BFFF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textFillColor: "transparent",
          filter: "drop-shadow(0 0 10px #915EFF)",
        }}
      >{`</${categoryName}>`}</motion.h2>
    </motion.div>
  );

  return (
    <section className="skills" ref={ref}>
      <div className="container">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>
            Technical Proficiencies
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>Skills.</h2>
        </motion.div>
        {renderCategory("programming", rows.programming)}
        {renderCategory("itTools", rows.itTools)}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "skills");
