import { motion } from 'framer-motion';

export function TechStackBadges() {
  const technologies = [
    { name: 'Python', color: '#3776AB' },
    { name: 'React', color: '#61DAFB' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'Flask', color: '#000000' },
    { name: 'MySQL', color: '#4479A1' },
    { name: 'AI/ML', color: '#FF6F00' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9 }}
      className="flex flex-wrap justify-center gap-3 mb-8"
    >
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.9 + index * 0.1,
            type: "spring",
            stiffness: 200,
          }}
          whileHover={{ scale: 1.1, y: -2 }}
          className="px-4 py-2 glass rounded-full border border-primary/30 backdrop-blur-sm"
        >
          <span className="text-sm font-medium text-foreground flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: tech.color }}
            />
            {tech.name}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
