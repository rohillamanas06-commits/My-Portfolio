import { motion } from 'framer-motion';
import { memo } from 'react';

export const FloatingOrbs = memo(() => {
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
