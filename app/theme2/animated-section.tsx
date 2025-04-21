'use client'

import { ReactNode, useRef } from 'react';
import { motion, useInView, Variants } from 'motion/react';
import { AnimatedGroup, PresetType } from '@/components/ui/animated-group';

interface AnimatedSectionProps {
  children: ReactNode;
  preset?: PresetType;
  className?: string;
  duration?: number; // New prop for animation duration
  variants?: {
    container?: Variants;
    item?: Variants;
  };
}

export const AnimatedSection = ({
  children,
  preset = 'blur-slide',
  className,
  duration = 3, // Default to 3 seconds
  variants,
}: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

  // Default variants with dynamic duration
  const defaultVariants = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: duration * 0.3, // Container fades faster (30% of item duration)
          staggerChildren: 0.1,
          delayChildren: 0.3,
        },
      },
    },
    item: {
      hidden: { opacity: 0, filter: 'blur(12px)', y: 20 },
      visible: {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        transition: {
          type: 'spring',
          bounce: 0.3,
          duration, // Use the passed duration
        },
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={defaultVariants.container}
      className={className}
    >
      <AnimatedGroup
        preset={preset}
        variants={variants || defaultVariants}
        as="div"
        className="w-full"
      >
        {children}
      </AnimatedGroup>
    </motion.section>
  );
};