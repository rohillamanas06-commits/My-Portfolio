import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

interface TimelineItem {
  id: number;
  degree: string;
  institution: string;
  year: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20" />
      
      <div className="space-y-8">
        {items.map((item, index) => (
          <TimelineItemComponent key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

function TimelineItemComponent({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative pl-20"
    >
      {/* Timeline dot */}
      <motion.div
        className="absolute left-6 top-6 w-5 h-5 rounded-full bg-primary shadow-glow flex items-center justify-center"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.3, delay: index * 0.2 + 0.2 }}
      >
        <div className="w-2 h-2 rounded-full bg-background" />
      </motion.div>

      <div className="glass-card">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-primary/20">
            <GraduationCap className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground">{item.degree}</h3>
            <p className="text-primary font-medium">{item.institution}</p>
            <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>{item.year}</span>
            </div>
            <p className="mt-3 text-muted-foreground">{item.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
