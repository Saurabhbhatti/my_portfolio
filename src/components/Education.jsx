import React, { useRef, useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion, useAnimation, useInView } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import PreviewModal from "./PreviewModal";

const EducationCard = ({ education, onCertificateClick }) => {  
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={education.date}
      iconStyle={{ background: education.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={education.icon}
            alt={education.company_name}
            className="w-[60%] h-[60%] object-contain"
            loading="lazy"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-text-primary text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold leading-tight">{education.title}</h3>
        <p className="text-text-secondary text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-semibold mt-1" style={{ margin: 0 }}>
          {education.company_name}
        </p>
      </div>

      <ul className="mt-4 sm:mt-5 list-disc ml-4 sm:ml-5 space-y-1.5 sm:space-y-2">
        {education.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-text-secondary text-[12px] sm:text-[13px] md:text-[14px] pl-1 tracking-wider leading-relaxed"
          >
            {point}
          </li>
        ))}
      </ul>

      {/* Certificate Button */}
      {education.certificate && (
        <motion.button
          onClick={() => onCertificateClick(education.certificate, education.title)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 sm:mt-5 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent-purple to-accent-blue text-text-primary rounded-lg text-sm sm:text-base font-semibold hover:shadow-lg transition-all"
        >
          <span>🏆 Rank 1 Holder - MCA</span>
        </motion.button>
      )}
    </VerticalTimelineElement>
  );
};

const Education = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const mainControls = useAnimation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [certificateImage, setCertificateImage] = useState("");
  const [certificateTitle, setCertificateTitle] = useState("");

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const handleCertificateClick = (imageSrc, title) => {
    setCertificateImage(imageSrc);
    setCertificateTitle(title);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div ref={sectionRef}>
      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <p className={`${styles.sectionSubText} text-center`}>What I have Studied so far</p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <h2 className={`${styles.sectionHeadText} text-center`}>Education.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {education.map((education, index) => (
            <EducationCard 
              key={`experience-${index}`} 
              education={education}
              onCertificateClick={handleCertificateClick}
            />
          ))}
        </VerticalTimeline>
      </div>

      {/* Preview Modal */}
      <PreviewModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        fileSrc={certificateImage}
        fileType="image"
        title={`${certificateTitle} - 1st Rank Certificate`}
      />
    </div>
  );
};

export default SectionWrapper(Education, "education");
