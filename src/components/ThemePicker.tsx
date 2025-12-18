import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

export function ThemePicker() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'green' ? 'purple' : 'green');
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full glass flex items-center justify-center overflow-hidden"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95, rotate: 360 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    >
      <motion.div
        className={`absolute inset-1 rounded-full bg-gradient-to-br ${
          theme === 'green' ? 'from-emerald-400 to-teal-500' : 'from-violet-400 to-purple-500'
        }`}
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 0.6 }}
        key={theme}
      />
      <motion.div
        className="absolute inset-2 rounded-full bg-background/50 backdrop-blur-sm"
      />
    </motion.button>
  );
}
