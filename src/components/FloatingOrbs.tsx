import { motion } from 'framer-motion';
import { memo } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

export const FloatingOrbs = memo(() => {
  const isMobile = useIsMobile();
  
  // On mobile, show fewer orbs with simpler animations
  if (isMobile) {
    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="floating-orb w-64 h-64 bg-primary/10 top-[-5%] left-[-5%]"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "loop",
          }}
        />
        <motion.div
          className="floating-orb w-56 h-56 bg-accent/10 bottom-[-5%] right-[-5%]"
          animate={{
            x: [0, -25, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "loop",
          }}
        />
      </div>
    );
  }
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="floating-orb w-96 h-96 bg-primary/20 top-[-10%] left-[-5%]"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "loop",
        }}
      />
      <motion.div
        className="floating-orb w-80 h-80 bg-accent/20 top-[40%] right-[-10%]"
        animate={{
          x: [0, -40, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
          repeatType: "loop",
        }}
      />
      <motion.div
        className="floating-orb w-64 h-64 bg-primary/15 bottom-[-5%] left-[30%]"
        animate={{
          x: [0, 30, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
          repeatType: "loop",
        }}
      />
      <motion.div
        className="floating-orb w-48 h-48 bg-accent/15 top-[20%] left-[60%]"
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
          repeatType: "loop",
        }}
      />
    </div>
  );
});
