import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true, ...props }: GlassCardProps) {
  const isMobile = useIsMobile();
  const shouldHover = hover && !isMobile;
  
  return (
    <motion.div
      className={cn(
        "glass-card",
        shouldHover && "hover:border-primary/40",
        className
      )}
      whileHover={shouldHover ? { y: -5, transition: { duration: 0.2 } } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
}
