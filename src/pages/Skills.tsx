import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { GlassCard } from '@/components/GlassCard';
import { ProgressBar, CircularProgress } from '@/components/ProgressBar';
import { ImagePreviewModal } from '@/components/ImagePreviewModal';
import { skills } from '@/data/portfolio';
import { Brain, Code, Wrench, BarChart3, Award, Download, ExternalLink } from 'lucide-react';

const categoryIcons: Record<string, typeof Brain> = {
  "AI & Machine Learning": Brain,
  "Programming Languages": Code,
  "Frameworks & Tools": Wrench,
  "Data Science": BarChart3,
};

export default function Skills() {
  const categories = Object.entries(skills);
  const [previewModal, setPreviewModal] = useState<{
    isOpen: boolean;
    src: string;
    alt: string;
    downloadFilename: string;
  }>({
    isOpen: false,
    src: '',
    alt: '',
    downloadFilename: '',
  });
  
  // Get top skills for circular progress
  const topSkills = [
    { name: "Python", level: 95 },
    { name: "Machine Learning", level: 85 },
    { name: "Data Analysis", level: 90 },
    { name: "Problem Solving", level: 88 },
  ];

  const openPreview = (src: string, alt: string, downloadFilename: string) => {
    setPreviewModal({ isOpen: true, src, alt, downloadFilename });
  };

  const closePreview = () => {
    setPreviewModal({ isOpen: false, src: '', alt: '', downloadFilename: '' });
  };

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

        {/* GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <span className="w-8 h-1 bg-primary rounded-full" />
            GitHub Stats
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <GlassCard hover className="flex justify-center items-center overflow-hidden">
              <a 
                href="https://github.com/rohillamanas06-commits" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full"
              >
                <img 
                  src="https://github-readme-stats.vercel.app/api?username=rohillamanas06-commits&show_icons=true&theme=radical&hide_border=true&bg_color=1a1a1a&title_color=10b981&text_color=94a3b8&icon_color=10b981" 
                  alt="GitHub Stats"
                  loading="eager"
                  className="w-full transition-transform hover:scale-105"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = 'none';
                    const parent = img.parentElement;
                    if (parent) {
                      parent.innerHTML = '<div class="text-center p-8"><p class="text-muted-foreground">GitHub stats temporarily unavailable</p><p class="text-sm text-muted-foreground mt-2">Visit my profile for full details</p></div>';
                    }
                  }}
                />
              </a>
            </GlassCard>
            <GlassCard hover={false} className="flex flex-col justify-center items-center p-8 text-center">
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="text-6xl mb-4"
              >
                🚀
              </motion.div>
              <h3 className="text-2xl font-bold text-primary mb-2">Always Learning!</h3>
              <p className="text-muted-foreground mb-4">
                Building the future, one line of code at a time
              </p>
              <motion.a
                href="https://github.com/rohillamanas06-commits"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-xl bg-primary/20 hover:bg-primary/30 text-foreground transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View GitHub Profile
              </motion.a>
            </GlassCard>
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

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <span className="w-8 h-1 bg-primary rounded-full" />
            Certificates
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Udemy Certificate */}
            <GlassCard className="flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-primary/20">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Udemy</h3>
                  <p className="text-sm text-muted-foreground">Course Certificate</p>
                </div>
              </div>
              <div className="flex gap-3 mt-auto">
                <motion.a
                  href="https://manas-rohilla.vercel.app/Udemy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-primary/20 hover:bg-primary/30 text-foreground transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  View
                </motion.a>
                <motion.a
                  href="/Udemy.pdf"
                  download="Manas_Rohilla_Udemy_Certificate.pdf"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-4 h-4" />
                  Download
                </motion.a>
              </div>
            </GlassCard>

            {/* NPTEL Certificate */}
            <GlassCard className="flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-primary/20">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">NPTEL</h3>
                  <p className="text-sm text-muted-foreground">Course Certificate</p>
                </div>
              </div>
              <div className="flex gap-3 mt-auto">
                <motion.a
                  href="https://manas-rohilla.vercel.app/Nptel.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-primary/20 hover:bg-primary/30 text-foreground transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  View
                </motion.a>
                <motion.a
                  href="/Nptel.pdf"
                  download="Manas_Rohilla_NPTEL_Certificate.pdf"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-4 h-4" />
                  Download
                </motion.a>
              </div>
            </GlassCard>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-12 text-center"
        >
          <GlassCard hover={false} className="inline-block">
            <p className="text-muted-foreground">
              Passionate about leveraging
              <span className="text-primary font-medium"> AI </span>
              to build intelligent solutions that solve real-world problems
            </p>
          </GlassCard>
        </motion.div>
      </motion.div>

      {/* Image Preview Modal */}
      <ImagePreviewModal
        src={previewModal.src}
        alt={previewModal.alt}
        isOpen={previewModal.isOpen}
        onClose={closePreview}
        downloadFilename={previewModal.downloadFilename}
      />
    </Layout>
  );
}
