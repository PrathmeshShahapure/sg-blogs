'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// Animation variants for staggered children
export const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const AnimatedElement = ({ 
  children, 
  className = '', 
  delay = 0,
  distance = 30,
  duration = 0.5,
  id
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const animationKeyRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Generate a stable key based on pathname, className, delay, and optional id
    if (!animationKeyRef.current) {
      const pathname = window.location.pathname;
      // Create a hash-like key from the component's stable properties
      const keyParts = [
        'animated-element',
        pathname,
        className || 'no-class',
        delay.toString(),
        id || ''
      ].filter(Boolean);
      animationKeyRef.current = keyParts.join('-');
    }

    // Check if this animation has already been played in this session
    const stored = sessionStorage.getItem(animationKeyRef.current);
    if (stored === 'true') {
      setHasAnimated(true);
    }
  }, [className, delay, id]);

  useEffect(() => {
    if (isInView && !hasAnimated && typeof window !== 'undefined' && animationKeyRef.current) {
      // Mark as animated in sessionStorage
      sessionStorage.setItem(animationKeyRef.current, 'true');
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  // If already animated, show immediately without animation
  if (hasAnimated) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: distance }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: distance }}
      transition={{ 
        duration, 
        ease: "easeOut",
        delay
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElement;

