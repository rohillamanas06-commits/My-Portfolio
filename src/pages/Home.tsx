import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Instagram, Mail, Code, GraduationCap, Lightbulb, GitCommit, Cpu } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { GlassCard } from '@/components/GlassCard';
import { TypewriterText } from '@/components/TypewriterText';
import { FloatingOrbs } from '@/components/FloatingOrbs';
import { personalInfo, stats } from '@/data/portfolio';

export default function Home() {
  const roles = [
    "BTech Undergraduate",
    "Problem Solver",
    "Tech Enthusiast"
  ];

  const statItems = [
    { icon: Code, label: "Projects", value: "4+" },
    { icon: GraduationCap, label: "Year", value: "2nd Year" },
    { icon: Lightbulb, label: "Focus", value: "Data Science" },
    { icon: GitCommit, label: "Commits", value: "100+" },
  ];

  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: Instagram, href: personalInfo.instagram, label: "Instagram" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
  ];

  return (
    <Layout>
      {/* Animated Background */}
      <FloatingOrbs />
      
      <div className="min-h-[calc(100vh-8rem)] flex flex-col justify-center relative">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* AI Brain Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2, duration: 1 }}
            className="inline-block mb-6"
          >
            <div className="relative w-32 h-32 mx-auto">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-primary"
                animate={{
                  rotate: 360,
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
              />
              <div className="absolute inset-1 rounded-full bg-background flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Cpu className="w-16 h-16 text-primary" />
                </motion.div>
              </div>
              {/* Orbiting particles */}
              {[0, 120, 240].map((rotation, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-3 h-3 bg-primary rounded-full"
                  style={{
                    transformOrigin: '0 0',
                  }}
                  animate={{
                    rotate: [rotation, rotation + 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.3,
                  }}
                  initial={{
                    x: 45,
                    y: -1.5,
                  }}
                />
              ))}
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Hi, I'm{" "}
            <span className="gradient-text glow-text">{personalInfo.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 h-8"
          >
            <TypewriterText texts={roles} className="text-primary" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            {personalInfo.about}
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-4 mb-12"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-xl text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/projects">
              <motion.button
                className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-medium flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                className="px-8 py-3 rounded-xl glass text-foreground font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-6xl mx-auto"
        >
          {statItems.map((stat, index) => (
            <GlassCard
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="text-center py-8"
            >
              <stat.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {typeof stat.value === 'number' ? `${stat.value}+` : stat.value}
              </div>
              <div className="text-base text-muted-foreground">{stat.label}</div>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </Layout>
  );
}
