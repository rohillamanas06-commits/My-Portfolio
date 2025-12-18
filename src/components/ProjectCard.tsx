import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import { GlassCard } from './GlassCard';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  github: string;
  demo: string;
  image?: string;
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      layout
    >
      <GlassCard className="h-full relative overflow-hidden group">
        {project.image && (
          <div className="w-full h-48 mb-4 rounded-lg overflow-hidden bg-muted">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain md:object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        )}

        <div className="space-y-4">
          <div>
            <span className="text-xs font-medium text-primary uppercase tracking-wider">
              {project.category}
            </span>
            <h3 className="text-xl font-semibold mt-1 text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3 pt-2">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted hover:bg-primary/20 text-foreground hover:text-primary transition-colors text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" />
              Code
            </motion.a>
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </motion.a>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
