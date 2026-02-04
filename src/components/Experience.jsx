import React, { useState, useCallback, useMemo, useTransition, useRef, useEffect } from "react";
import { motion, AnimatePresence, useAnimation, useInView } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const ExperienceCard = React.memo(({ experience, isActive, onClick, index }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.1, 0.5)}
      className={`flex items-center p-4 rounded-lg cursor-pointer transition-all duration-300 ${
        isActive ? "bg-tertiary" : "bg-primary"
      }`}
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      role="button"
      tabIndex={0}
      aria-selected={isActive}
      aria-label={`${experience.title} at ${experience.company_name}`}
    >
      <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden mr-3 sm:mr-4">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-text-primary text-[14px] sm:text-[16px] md:text-[18px] font-bold leading-tight truncate">{experience.title}</h3>
        <p className="text-text-secondary text-[12px] sm:text-[13px] md:text-[14px] truncate">{experience.company_name}</p>
      </div>
    </motion.div>
  );
});

const ExperienceDetails = React.memo(({ experience }) => {
  return (
    <motion.div
      key={experience.company_name}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="bg-tertiary p-5 sm:p-6 md:p-8 rounded-lg"
    >
      <h3 className="text-text-primary text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold mb-3 sm:mb-4 leading-tight">{experience.title}</h3>
      <p className="text-text-secondary text-[14px] sm:text-[15px] md:text-[16px] mb-3 sm:mb-4">{experience.company_name}</p>
      <p className="text-text-muted text-[12px] sm:text-[13px] md:text-[14px] mb-3 sm:mb-4">{experience.date}</p>
      <ul className="list-disc ml-4 sm:ml-5 space-y-1.5 sm:space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-text-secondary text-[12px] sm:text-[13px] md:text-[14px] pl-1 tracking-wider leading-relaxed"
          >
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
});

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(0);
  const [isPending, startTransition] = useTransition();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const mainControls = useAnimation();

  const handleExperienceClick = useCallback((index) => {
    startTransition(() => {
      setActiveExperience(index);
    });
  }, []);

  const currentExperience = useMemo(() => experiences[activeExperience], [activeExperience]);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

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
        <p className={`${styles.sectionSubText} text-center`}>
          My Professional Journey
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience
        </h2>
      </motion.div>

      <div className="mt-12 sm:mt-16 md:mt-20 flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10">
        <div className="md:w-1/3">
          <div className="flex flex-col space-y-3 sm:space-y-4">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
                isActive={index === activeExperience}
                onClick={() => handleExperienceClick(index)}
                index={index}
              />
            ))}
          </div>
        </div>
        <div className="md:w-2/3">
          <AnimatePresence mode="wait" initial={false}>
            {!isPending && (
              <ExperienceDetails key={currentExperience.company_name} experience={currentExperience} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
