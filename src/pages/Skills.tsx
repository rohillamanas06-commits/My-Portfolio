import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { GlassCard } from '@/components/GlassCard';
import { ProgressBar, CircularProgress } from '@/components/ProgressBar';
import { skills } from '@/data/portfolio';
import { Brain, Code, Wrench, BarChart3 } from 'lucide-react';

const categoryIcons: Record<string, typeof Brain> = {
  "AI & Machine Learning": Brain,
  "Programming Languages": Code,
  "Frameworks & Tools": Wrench,
  "Data Science": BarChart3,
};

export default function Skills() {
  const categories = Object.entries(skills);
  
  // Get top skills for circular progress
  const topSkills = [
    { name: "Python", level: 95 },
    { name: "Machine Learning", level: 85 },
    { name: "Data Analysis", level: 90 },
    { name: "Problem Solving", level: 88 },
  ];

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise.
          </p>
        </motion.div>

        {/* Core Skills - Circular Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <span className="w-8 h-1 bg-primary rounded-full" />
            Core Competencies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {topSkills.map((skill, index) => (
              <GlassCard key={skill.name} className="flex justify-center py-8">
                <CircularProgress
                  name={skill.name}
                  level={skill.level}
                  delay={index * 0.2}
                />
              </GlassCard>
            ))}
          </div>
        </motion.div>

        {/* Detailed Skills */}
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map(([category, categorySkills], categoryIndex) => {
            const Icon = categoryIcons[category] || Code;
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + categoryIndex * 0.1 }}
              >
                <GlassCard hover={false} className="h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-primary/20">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {category}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {categorySkills.map((skill, skillIndex) => (
                      <ProgressBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        delay={0.3 + categoryIndex * 0.1 + skillIndex * 0.1}
                      />
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <GlassCard hover={false} className="inline-block">
            <p className="text-muted-foreground">
              Always learning and exploring new technologies. 
              <span className="text-primary font-medium"> Currently diving into </span>
              Large Language Models, RAG systems, and MLOps.
            </p>
          </GlassCard>
        </motion.div>
      </motion.div>
    </Layout>
  );
}
