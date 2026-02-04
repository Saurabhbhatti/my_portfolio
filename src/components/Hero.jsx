import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useState, useEffect } from "react";

const TypewriterText = ({ texts }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTyping) {
        const currentText = texts[currentIndex];
        if (displayText.length < currentText.length) {
          setDisplayText((prevText) => currentText.slice(0, prevText.length + 1));
        } else {
          setIsTyping(false);
          clearInterval(typingInterval);
          setTimeout(() => {
            setIsTyping(true);
            setDisplayText("");
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
          }, 2000); // Delay before next typing cycle
        }
      }
    }, 100); // Typing speed

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentIndex, isTyping, texts, displayText]);

  return (
    <span className="inline-block text-accent-purple font-bold">
      {displayText.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
        >
          {char}
        </motion.span>
      ))}
      {isTyping && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block ml-1"
        >
          |
        </motion.span>
      )}
    </span>
  );
};

const WavingHand = () => {
  return (
    <img 
      src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f44b.png" 
      alt="Waving Hand"
      className="wave-emoji inline-block ml-2 sm:ml-3 md:ml-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
      loading="lazy"
    />
  );
};

const Hero = () => {
  const typedItems = [
    "Software Developer",
    "Frontend Developwer",
    "Backend Developer",
    "Full Stack Developer",
    "Computer Enthusiast",
    "Team Leader"
  ];

  return (
    <section className="relative w-full h-screen mx-auto">
      <style jsx>{`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(-10deg); }
          20% { transform: rotate(12deg); }
          30% { transform: rotate(-10deg); }
          40% { transform: rotate(9deg); }
          50% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
        .wave-emoji {
          animation-name: wave;
          animation-duration: 1.8s;
          animation-iteration-count: infinite;
          transform-origin: 70% 70%;
          display: inline-block;
        }
      `}</style>
      <div className={`absolute inset-0 top-[80px] sm:top-[100px] md:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-3 sm:gap-4 md:gap-5 z-10`}>
        <div className="flex flex-col justify-center items-center mt-2 sm:mt-4 md:mt-5">
          <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-accent-purple" />
          <div className="w-1 h-32 sm:h-48 md:h-64 lg:h-80 violet-gradient" />
        </div>

        <div className="flex-1 relative z-10">
          <h1 className={`${styles.heroHeadText} text-text-primary leading-tight`}>
            Hi, I'm <span className="text-accent-purple font-extrabold">Saurabh</span> <WavingHand />
          </h1>
          <p className={`${styles.heroSubText} mt-2 sm:mt-3 md:mt-4 text-text-secondary leading-relaxed`}>
            I'm a <TypewriterText texts={typedItems} />
            <br className="hidden sm:block" />
            <span className="block sm:inline">
              <b className="text-xs sm:text-sm md:text-base lg:text-lg text-text-muted">Welcome to my portfolio, please view on desktop for an interactive experience!</b>
            </span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-6 sm:mt-8 md:mt-10 relative z-50">
            <motion.button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                const scrollToSection = (id) => {
                  const checkElement = () => {
                    const element = document.getElementById(id);
                    if (element) {
                      const navbarHeight = 80;
                      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                      const offsetPosition = elementPosition - navbarHeight;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    } else {
                      setTimeout(checkElement, 100);
                    }
                  };
                  checkElement();
                };
                scrollToSection('projects');
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#915EFF] to-[#00BFFF] text-white font-semibold text-sm sm:text-base rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer relative z-50"
              style={{ pointerEvents: 'auto', position: 'relative', zIndex: 50 }}
            >
              View My Work
            </motion.button>
            <motion.button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                const scrollToSection = (id) => {
                  const checkElement = () => {
                    const element = document.getElementById(id);
                    if (element) {
                      const navbarHeight = 80;
                      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                      const offsetPosition = elementPosition - navbarHeight;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    } else {
                      setTimeout(checkElement, 100);
                    }
                  };
                  checkElement();
                };
                scrollToSection('contact');
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-accent-purple text-text-primary font-semibold text-sm sm:text-base rounded-lg hover:bg-accent-purple/20 transition-all cursor-pointer relative z-50"
              style={{ pointerEvents: 'auto', position: 'relative', zIndex: 50 }}
            >
              Get In Touch
            </motion.button>
          </div>
        </div>
      </div>
      <div className="h-16 sm:h-24 md:h-32 lg:h-40" />

      <ComputersCanvas />

      <div className="absolute bottom-8 sm:bottom-10 md:bottom-12 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[28px] h-[52px] sm:w-[32px] sm:h-[60px] md:w-[35px] md:h-[64px] rounded-3xl border-3 sm:border-4 border-secondary flex justify-center items-start p-1.5 sm:p-2">
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;