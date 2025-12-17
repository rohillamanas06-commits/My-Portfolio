import { motion } from 'framer-motion';
import { User, MapPin, Calendar, Download } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { GlassCard } from '@/components/GlassCard';
import { Timeline } from '@/components/Timeline';
import { personalInfo, education } from '@/data/portfolio';
import { useToast } from '@/hooks/use-toast';

export default function About() {
  const { toast } = useToast();

  const handleResumeClick = () => {
    toast({
      title: "Coming Soon!",
      description: "Resume download will be available shortly.",
    });
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
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, education, and journey in tech.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <GlassCard className="sticky top-28">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                  className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent p-1"
                >
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                    <img 
                      src="/Myself.Jpg" 
                      alt="Manas Rohilla"
                      className="w-full h-full object-cover"
                      style={{ filter: 'brightness(1) contrast(0.9)' }}
                    />
                  </div>
                </motion.div>

                <h2 className="text-2xl font-bold text-foreground mb-2">
                  {personalInfo.name}
                </h2>
                <p className="text-primary font-medium mb-4">
                  Btech CSE Student
                </p>

                <div className="space-y-3 text-left mb-6">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Jaipur , India</span>
                  </div>
                </div>

                <motion.button
                  onClick={handleResumeClick}
                  className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </motion.button>
              </div>
            </GlassCard>
          </motion.div>

          {/* Bio & Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Bio Section */}
            <GlassCard hover={false}>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-primary rounded-full" />
                Who am I?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {personalInfo.about}
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                I'm passionate about building intelligent systems that can solve real-world problems. 
                I believe in continuous learning and always strive to stay updated 
                with the latest advancements in AI technology.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                When I'm not coding, you'll find me exploring new technologies.
              </p>
            </GlassCard>

            {/* Education Timeline */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-primary rounded-full" />
                Education Journey
              </h3>
              <Timeline items={education} />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
}
