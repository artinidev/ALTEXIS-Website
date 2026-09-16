import React from 'react';
import { motion } from 'framer-motion';

interface MotionRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
  viewportMargin?: string;
  amount?: number;
}

export const MotionReveal: React.FC<MotionRevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.6,
  className = '',
  viewportMargin = '-30px',
  amount = 0.12,
}) => {
  const getInitialOffset = () => {
    switch (direction) {
      case 'up':
        return { y: 22, opacity: 0 };
      case 'down':
        return { y: -22, opacity: 0 };
      case 'left':
        return { x: 22, opacity: 0 };
      case 'right':
        return { x: -22, opacity: 0 };
      case 'none':
      default:
        return { opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialOffset()}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: false, margin: viewportMargin, amount }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
