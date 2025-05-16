import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight';
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  delay = 0,
  className = '',
  animation = 'fadeIn',
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getAnimationProps = () => {
    switch (animation) {
      case 'slideUp':
        return {
          initial: { y: 50, opacity: 0 },
          animate: inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 },
        };
      case 'slideDown':
        return {
          initial: { y: -50, opacity: 0 },
          animate: inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 },
        };
      case 'slideLeft':
        return {
          initial: { x: 50, opacity: 0 },
          animate: inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 },
        };
      case 'slideRight':
        return {
          initial: { x: -50, opacity: 0 },
          animate: inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 },
        };
      case 'fadeIn':
      default:
        return {
          initial: { opacity: 0 },
          animate: inView ? { opacity: 1 } : { opacity: 0 },
        };
    }
  };

  const animationProps = getAnimationProps();

  return (
    <motion.div
      ref={ref}
      {...animationProps}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;