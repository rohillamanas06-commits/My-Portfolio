import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Instagram, Mail, Code, Brain, Database, Rocket } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { GlassCard } from '@/components/GlassCard';
import { TypewriterText } from '@/components/TypewriterText';
import { personalInfo, stats } from '@/data/portfolio';

export default function Home() {
  const roles = [
    "AI & ML Enthusiast",
    "Python Developer",
    "Data Science Explorer",
    "Problem Solver"
  ];

  const statItems = [
    { icon: Code, label: "Projects", value: stats.projects },
    { icon: Brain, label: "Technologies", value: stats.technologies },
    { icon: Database, label: "Experience", value: stats.experience },
    { icon: Rocket, label: "Commits", value: stats.commits },
  ];

  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: Instagram, href: personalInfo.instagram, label: "Instagram" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
  ];

  return (
    <Layout>
      <div className="min-h-[calc(100vh-8rem)] flex flex-col justify-center">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-accent p-1">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <span className="text-4xl font-bold gradient-text">MR</span>
              </div>
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
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {statItems.map((stat, index) => (
            <GlassCard
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                {typeof stat.value === 'number' ? `${stat.value}+` : stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </Layout>
  );
}
