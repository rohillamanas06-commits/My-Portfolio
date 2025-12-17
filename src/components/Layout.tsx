import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './Navbar';
import { FloatingOrbs } from './FloatingOrbs';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingOrbs />
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-24 pb-12 px-4 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </motion.main>
    </div>
  );
}
