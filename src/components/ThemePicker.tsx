import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { useState } from 'react';

export function ThemePicker() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { id: 'green', label: 'Emerald', color: 'from-emerald-400 to-teal-500' },
    { id: 'purple', label: 'Violet', color: 'from-violet-400 to-purple-500' },
  ] as const;

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-10 h-10 rounded-full glass flex items-center justify-center overflow-hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className={`absolute inset-1 rounded-full bg-gradient-to-br ${
            theme === 'green' ? 'from-emerald-400 to-teal-500' : 'from-violet-400 to-purple-500'
          }`}
          layoutId="theme-indicator"
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
        <motion.div
          className="absolute inset-2 rounded-full bg-background/50 backdrop-blur-sm"
          animate={{ rotate: isOpen ? 180 : 0 }}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            className="absolute left-0 md:right-0 md:left-auto top-14 glass rounded-2xl p-3 min-w-[140px] z-50"
          >
            <div className="space-y-2">
              {themes.map((t) => (
                <motion.button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${
                    theme === t.id ? 'bg-primary/20' : 'hover:bg-muted/50'
                  }`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className={`w-6 h-6 rounded-full bg-gradient-to-br ${t.color}`}
                    animate={{
                      scale: theme === t.id ? [1, 1.2, 1] : 1,
                      boxShadow: theme === t.id 
                        ? ['0 0 0px rgba(255,255,255,0)', '0 0 15px rgba(255,255,255,0.5)', '0 0 0px rgba(255,255,255,0)']
                        : '0 0 0px rgba(255,255,255,0)',
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className={`text-sm font-medium ${theme === t.id ? 'text-primary' : 'text-muted-foreground'}`}>
                    {t.label}
                  </span>
                  {theme === t.id && (
                    <motion.div
                      layoutId="check"
                      className="ml-auto w-2 h-2 rounded-full bg-primary"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
