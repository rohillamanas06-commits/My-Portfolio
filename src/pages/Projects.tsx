import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ProjectCard } from '@/components/ProjectCard';
import { projects, categories } from '@/data/portfolio';

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some(tech => 
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );
      
      const matchesCategory = 
        activeCategory === 'All' || project.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const featuredProjects = filteredProjects.filter(p => p.featured);
  const otherProjects = filteredProjects.filter(p => !p.featured);

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
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my work in AI/ML, data science, and web development.
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 space-y-4"
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 glass rounded-xl bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'glass text-muted-foreground hover:text-foreground'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-muted-foreground mb-8"
        >
          <Filter className="w-4 h-4 inline mr-2" />
          Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-primary rounded-full" />
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {featuredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-primary rounded-full" />
              Other Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {otherProjects.map((project, index) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    index={index + featuredProjects.length} 
                  />
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">No projects found matching your criteria.</p>
          </motion.div>
        )}
      </motion.div>
    </Layout>
  );
}
