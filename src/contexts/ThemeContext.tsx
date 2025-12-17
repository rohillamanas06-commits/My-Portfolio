import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'green' | 'purple';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return (saved as Theme) || 'green';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
    const root = document.documentElement;
    
    if (theme === 'purple') {
      root.classList.add('theme-purple');
    } else {
      root.classList.remove('theme-purple');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'green' ? 'purple' : 'green');
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
