import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TechIcon {
  id: number;
  name: string;
  symbol: string;
  x: number;
  y: number;
  delay: number;
  duration: number;
}

export function FloatingTechIcons() {
  const [icons] = useState<TechIcon[]>([
    { id: 1, name: 'Python', symbol: '🐍', x: 10, y: 20, delay: 0, duration: 20 },
    { id: 2, name: 'React', symbol: '⚛️', x: 85, y: 15, delay: 2, duration: 25 },
    { id: 3, name: 'AI', symbol: '🤖', x: 15, y: 70, delay: 4, duration: 22 },
    { id: 4, name: 'Database', symbol: '💾', x: 80, y: 65, delay: 1, duration: 24 },
    { id: 5, name: 'Code', symbol: '💻', x: 50, y: 10, delay: 3, duration: 26 },
    { id: 6, name: 'Flask', symbol: '🔥', x: 25, y: 45, delay: 5, duration: 23 },
    { id: 7, name: 'Node', symbol: '📦', x: 75, y: 40, delay: 2.5, duration: 21 },
    { id: 8, name: 'Git', symbol: '🔧', x: 90, y: 80, delay: 4.5, duration: 27 },
  ]);

  return (
    <div className="fixed inset-0 -z-5 overflow-hidden pointer-events-none">
      {icons.map((icon) => (
        <motion.div
          key={icon.id}
          className="absolute text-4xl opacity-20"
          initial={{ 
            x: `${icon.x}vw`, 
            y: `${icon.y}vh`,
            rotate: 0 
          }}
          animate={{
            y: [`${icon.y}vh`, `${icon.y - 10}vh`, `${icon.y}vh`],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: icon.duration,
            repeat: Infinity,
            delay: icon.delay,
            ease: "easeInOut"
          }}
        >
          {icon.symbol}
        </motion.div>
      ))}
      
      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          initial={{
            x: Math.random() * 100 + 'vw',
            y: Math.random() * 100 + 'vh',
          }}
          animate={{
            y: [null, Math.random() * 100 + 'vh'],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}
