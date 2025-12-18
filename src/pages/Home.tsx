import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Instagram, Mail, Code, GraduationCap, Lightbulb, GitCommit, Cpu, Sparkles, Rocket, Zap, Heart, Star, Trophy, Target, Coffee } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { GlassCard } from '@/components/GlassCard';
import { TypewriterText } from '@/components/TypewriterText';
import { FloatingOrbs } from '@/components/FloatingOrbs';
import { personalInfo, stats } from '@/data/portfolio';

export default function Home() {
  const roles = [
    "BTech Undergraduate",
    "Problem Solver",
    "Tech Enthusiast",
  ];

  const statItems = [
    { icon: Code, label: "Projects", value: "4+", color: "text-blue-500" },
    { icon: GraduationCap, label: "Year", value: "2nd Year", color: "text-purple-500" },
    { icon: Lightbulb, label: "Focus", value: "Data Science", color: "text-yellow-500" },
    { icon: GitCommit, label: "Commits", value: "100+", color: "text-green-500" },
  ];

  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: "GitHub", color: "hover:text-purple-500" },
    { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn", color: "hover:text-blue-500" },
    { icon: Instagram, href: personalInfo.instagram, label: "Instagram", color: "hover:text-pink-500" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email", color: "hover:text-green-500" },
  ];

  return (
    <Layout>
      {/* Animated Background */}
      <FloatingOrbs />
      
      <div className="min-h-[calc(100vh-8rem)] flex flex-col justify-center relative py-12">
        {/* Hero Section - Split Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto mb-12">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left order-2 md:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Hi, I'm{" "}
              <span className="gradient-text glow-text">
                {personalInfo.name}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-muted-foreground mb-6 h-12"
            >
              <TypewriterText texts={roles} className="text-primary font-semibold" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground text-lg leading-relaxed mb-8"
            >
              {personalInfo.about}
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 mb-8"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 glass rounded-2xl text-muted-foreground ${link.color} hover:border-primary/40 transition-all shadow-lg`}
                  whileHover={{ scale: 1.15, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <link.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/projects">
                <motion.button
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold shadow-lg relative overflow-hidden group flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Projects
                    <ArrowRight className="w-5 h-5" />
                  </span>
                  {/* Glossy overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  className="px-8 py-4 rounded-2xl glass text-foreground font-bold backdrop-blur-xl border-2 border-primary/30 hover:border-primary shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    Get in Touch
                  </span>
                </motion.button>
              </Link>
            </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image with Creative Layout */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative order-1 md:order-2"
          >
            <div className="relative">
              {/* Decorative Elements */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Main Image Container */}
              <motion.div
                className="relative rounded-3xl overflow-hidden glass backdrop-blur-xl border-2 border-primary/20 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/Myself.Jpg"
                  alt="Manas Rohilla"
                  className="w-full h-auto object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Stats Section with Icons and Colors */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl mx-auto mb-12"
        >
          {statItems.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: 1 + index * 0.15,
                type: "spring",
                stiffness: 300 
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <GlassCard className="text-center py-10 backdrop-blur-xl border-2 hover:border-primary/50 transition-all shadow-xl h-full flex flex-col items-center justify-center">
                <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-foreground mb-2 px-2 break-words"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.15, type: "spring" }}
                >
                  {typeof stat.value === 'number' ? `${stat.value}+` : stat.value}
                </motion.div>
                <div className="text-sm font-medium text-muted-foreground px-2">{stat.label}</div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Layout>
  );
}
