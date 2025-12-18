import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { GlassCard } from '@/components/GlassCard';
import { BookOpen, Clock, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function Blogs() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleNotify = () => {
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Thanks for your interest!",
      description: "We'll notify you when blogs are available. Stay tuned!",
    });
    setEmail('');
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-[calc(100vh-12rem)] flex flex-col items-center justify-center"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Blogs</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on technology and development
          </p>
        </motion.div>

        {/* Coming Soon Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl w-full"
        >
          <GlassCard className="text-center p-12">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <BookOpen className="w-24 h-24 text-primary mx-auto" />
                <motion.div
                  className="absolute -top-2 -right-2"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Sparkles className="w-8 h-8 text-accent" />
                </motion.div>
              </div>
            </motion.div>

            <h2 className="text-3xl font-bold text-foreground mb-4">
              Coming Soon!
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              I'm currently working on creating valuable content for you. 
              Stay tuned for articles on AI and more!
            </p>

            <div className="flex items-center justify-center gap-2 text-primary">
              <Clock className="w-5 h-5" />
              <span className="font-medium">Available Soon</span>
            </div>

            <motion.div
              className="mt-8 pt-8 border-t border-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-sm text-muted-foreground mb-4">
                Want to be notified when blogs are published?
              </p>
              <motion.div
                className="flex gap-2 max-w-md mx-auto"
                whileHover={{ scale: 1.02 }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-xl glass bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  onKeyDown={(e) => e.key === 'Enter' && handleNotify()}
                />
                <motion.button
                  className="px-6 py-2 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                  whileTap={{ scale: 0.98 }}
                  onClick={handleNotify}
                >
                  Notify Me
                </motion.button>
              </motion.div>
              <p className="text-xs text-muted-foreground mt-2">
                We'll let you know when new content is published
              </p>
            </motion.div>
          </GlassCard>
        </motion.div>
      </motion.div>
    </Layout>
  );
}
