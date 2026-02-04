import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AnimatedCounter = ({ value, suffix = '', isInView }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const numValue = parseInt(value.replace(/\D/g, ''));
      const duration = 2000;
      const steps = 60;
      const increment = numValue / steps;
      const stepDuration = duration / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= numValue) {
          setDisplayValue(numValue);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent-purple to-accent-blue bg-clip-text text-transparent">
      {value.includes('+') ? (
        <>
          {displayValue}+
        </>
      ) : value.includes('%') ? (
        <>
          {displayValue}%
        </>
      ) : (
        value
      )}
      {suffix}
    </span>
  );
};

const StatCard = ({ number, label, suffix = '', delay = 0, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center justify-center p-4 sm:p-6 bg-tertiary rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.2, type: 'spring' }}
      >
        <AnimatedCounter value={number} suffix={suffix} isInView={isInView} />
      </motion.div>
      <p className="text-secondary text-sm sm:text-base md:text-lg mt-2 text-center">
        {label}
      </p>
    </motion.div>
  );
};

const QuickStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { number: '4+', label: 'Years Experience', suffix: '' },
    { number: '10+', label: 'Projects Completed', suffix: '' },
    { number: '18', label: 'Technologies', suffix: '' },
    { number: '6', label: 'Certifications', suffix: '' },
  ];

  return (
    <section ref={ref} className="w-full py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
            Quick <span className="text-[#915EFF]">Stats</span>
          </h2>
          <p className="text-secondary text-sm sm:text-base md:text-lg">
            A snapshot of my professional journey
          </p>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              {...stat}
              delay={index * 0.1}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickStats;

