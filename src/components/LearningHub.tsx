import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, ExternalLink, Youtube, Newspaper } from "lucide-react";

const LearningHub = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const learningResources = [
    {
      title: "JavaScript Theory",
  description: "Comprehensive documentation on JavaScript fundamentals, from basics to advanced topics.",
      icon: <BookOpen className="w-6 h-6" />,
      link: "https://js-theory.dev",
      type: "Documentation",
    },
    {
      title: "React Theory",
  description: "A detailed guide on React, hooks, patterns, and best practices for modern development.",
      icon: <BookOpen className="w-6 h-6" />,
      link: "https://react-theory.dev",
      type: "Documentation",
    },
    {
      title: "Tools & Webpack",
      description: "Development configurations and tools, including Webpack, Vite and modern build tools.",
      icon: <BookOpen className="w-6 h-6" />,
      link: "https://tools-webpack.dev",
      type: "Documentation",
    },
  ];

  const favoriteChannels = [
    {
      name: "Midudev",
  description: "Content about JavaScript, React, and modern web technologies",
      subscribers: "500K+",
    },
    {
      name: "Fireship",
      description: "Quick tutorials and programming trends",
      subscribers: "2M+",
    },
    {
      name: "Theo - t3.gg",
      description: "Full-stack development and emerging technologies",
      subscribers: "300K+",
    },
  ];

  const newsResources = [
    "Hacker News",
    "Dev.to",
    "JavaScript Weekly",
    "React Newsletter",
    "Frontend Focus",
  ];

  return (
    <section id="learning" ref={ref} className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="section-heading"
          >
            Learning Hub
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted text-lg mb-12 max-w-2xl"
          >
            Resources, documentation and sources of knowledge that have helped me
            in my growth as a developer. I share what I learn to
            contribute to the community.
          </motion.p>

          {/* My Documentation */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-primary mb-8">
              My Documentation
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {learningResources.map((resource, index) => (
                <motion.a
                  key={resource.title}
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card p-6 block"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.1 * (index + 3) }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="text-accent mr-3">{resource.icon}</div>
                    <span className="text-sm font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                      {resource.type}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-primary mb-3">
                    {resource.title}
                  </h4>
                  <p className="text-muted mb-4">{resource.description}</p>
                  <div className="flex items-center text-accent text-sm">
                    <span>View documentation</span>
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* YouTube Channels */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-primary mb-8 flex items-center">
                <Youtube className="w-6 h-6 mr-3 text-red-500" />
                Favorite Channels
              </h3>
              <div className="space-y-4">
                {favoriteChannels.map((channel) => (
                  <div
                    key={channel.name}
                    className="p-4 bg-card rounded-lg border border-border/40"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-primary">
                        {channel.name}
                      </h4>
                      <span className="text-sm text-muted">
                        {channel.subscribers}
                      </span>
                    </div>
                    <p className="text-muted text-sm">{channel.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* News Resources */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-primary mb-8 flex items-center">
                <Newspaper className="w-6 h-6 mr-3 text-accent" />
                News Sources
              </h3>
              <div className="space-y-3">
                {newsResources.map((source) => (
                  <div
                    key={source}
                    className="flex items-center p-3 bg-card rounded-lg border border-border/40"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    <span className="text-primary font-medium">{source}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-accent/5 rounded-lg border border-accent/20">
                <p className="text-muted text-sm">
                  <strong className="text-accent">Tip:</strong> I dedicate 30 minutes
                  every morning to review the latest trends and news in the
                  world of web development.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LearningHub;