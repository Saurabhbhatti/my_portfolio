import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = navLinks.map((link) => {
        const element = document.getElementById(link.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id: link.id,
            title: link.title,
            top: rect.top + window.scrollY,
            bottom: rect.bottom + window.scrollY,
            height: rect.height,
          };
        }
        return null;
      }).filter(Boolean);

      // Check if we're at the top (home section)
      if (scrollTop < 100) {
        setActive("");
        return;
      }

      // Find the section that's currently in view
      const currentSection = sections.find((section) => {
        const offset = 150; // Offset for navbar height
        return (
          scrollTop + offset >= section.top &&
          scrollTop + offset < section.bottom
        );
      });

      if (currentSection) {
        setActive(currentSection.title);
      } else {
        // If no section is found, check the last section (might be at bottom)
        const lastSection = sections[sections.length - 1];
        if (lastSection && scrollTop + window.innerHeight >= document.documentElement.scrollHeight - 100) {
          setActive(lastSection.title);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial active state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Styling for the menu button and navicon
  const menuIconStyle = {
    position: 'relative',
    width: '28px',
    height: '20px',
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const barCommonStyle = {
    background: 'white',
    display: 'block',
    height: '2px',
    width: '18px',
    borderRadius: '2px',
    position: 'absolute',
    transition: 'all 0.2s ease-out',
  };

  const topBarStyle = {
    ...barCommonStyle,
    top: toggle ? '50%' : '5px',
    transform: toggle ? 'rotate(-45deg)' : 'none',
  };

  const middleBarStyle = {
    ...barCommonStyle,
    opacity: toggle ? 0 : 1,
    top: '50%',
    transition: 'opacity 0.2s ease-out',
  };

  const bottomBarStyle = {
    ...barCommonStyle,
    top: toggle ? '50%' : '15px',
    transform: toggle ? 'rotate(45deg)' : 'none',
  };

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${
        scrolled ? "bg-primary shadow-lg" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <a
          href='#home'
          className='flex items-center gap-2'
          onClick={(e) => {
            e.preventDefault();
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <motion.p 
            className='text-text-primary text-sm sm:text-base md:text-lg font-bold cursor-pointer flex items-center'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span 
              className='block text-[18px] sm:text-[20px] md:text-[24px] lg:text-[26px]' 
              style={{
                fontFamily: "'Dancing Script', cursive",
                background: "linear-gradient(90deg, #915EFF, #00BFFF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
              }} 
            >
              {"</"}Saurabh Bhatti{">"}
            </span>
          </motion.p>
        </a>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <motion.li
              key={nav.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: nav.id * 0.1 }}
            >
              <a
                href={`#${nav.id}`}
                className={`relative ${
                  active === nav.title 
                    ? "text-accent-purple font-semibold" 
                    : "text-text-secondary"
                } hover:text-text-primary text-sm sm:text-base md:text-lg font-medium cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-purple focus:ring-offset-2 focus:ring-offset-primary rounded px-2 py-1`}
                onClick={() => setActive(nav.title)}
              >
                {nav.title}
                {active === nav.title && (
                  <motion.span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full"
                    layoutId="activeTab"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          {/* Menu Icon Toggle */}
          <div style={menuIconStyle} onClick={() => setToggle(!toggle)}>
            <span style={topBarStyle}></span>
            <span style={middleBarStyle}></span>
            <span style={bottomBarStyle}></span>
          </div>

          {/* Menu Items */}
          <motion.div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: toggle ? 1 : 0, scale: toggle ? 1 : 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <motion.li
                  key={nav.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: nav.id * 0.1 }}
                  className={`font-poppins font-medium cursor-pointer text-sm sm:text-base ${
                    active === nav.title ? "text-text-primary" : "text-text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a 
                    href={`#${nav.id}`}
                    className={`relative focus:outline-none focus:ring-2 focus:ring-[#915EFF] focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1 transition-all duration-300 ${
                      active === nav.title 
                        ? "font-semibold text-accent-purple" 
                        : "text-text-secondary"
                    }`}
                  >
                    {nav.title}
                    {active === nav.title && (
                      <motion.span
                        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-purple to-accent-blue rounded"
                        layoutId="activeMobileTab"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
