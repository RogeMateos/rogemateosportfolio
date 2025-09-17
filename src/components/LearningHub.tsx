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
      link: "https://jstheory.netlify.app/",
      type: "Documentation",
    },
    {
      title: "React Theory",
  description: "A detailed guide on React, hooks, patterns, and best practices for modern development.",
      icon: <BookOpen className="w-6 h-6" />,
      link: "https://reacttheory.netlify.app/",
      type: "Documentation",
    },
    {
      title: "Tools & Webpack",
      description: "Interactive course covering essential modern JavaScript build tools.",
      icon: <BookOpen className="w-6 h-6" />,
      link: "https://toolswebpack.netlify.app/",
      type: "Documentation",
    },
  ];

  const favoriteChannels = [
    {
      name: "The Net Ninja",
      description: "Comprehensive programming tutorials from beginner to advanced levels, covering JavaScript, React, TypeScript, and modern web development with clear explanations",
      subscribers: "1.5M+",
      url: "https://www.youtube.com/@NetNinja",
    },
    {
      name: "Cole Medin",
      description: "AI educator breaking down complex AI concepts into practical, hands-on guides covering AI agents, generative AI, and modern AI programming techniques",
      subscribers: "100K+",
      url: "https://www.youtube.com/@ColeMedin",
    },
    {
      name: "JavaScript Mastery",
      description: "Project-based JavaScript tutorials covering modern web development, Next.js, and hands-on application building with industry best practices",
      subscribers: "1M+",
      url: "https://www.youtube.com/@javascriptmastery",
    },
  ];

  const newsResources = [
    {
      name: "Smashing Magazine",
      url: "https://www.smashingmagazine.com/",
    },
    {
      name: "Dev.to",
      url: "https://dev.to/",
    },
    {
      name: "WeAreDevelopers Magazine",
      url: "https://www.wearedevelopers.com/en/magazine",
    },
    {
      name: "CODE Magazine",
      url: "https://www.codemag.com/magazine/",
    },
    {
      name: "Codemotion Magazine",
      url: "https://www.codemotion.com/magazine/",
    },
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
            I have created these comprehensive resources and documentation to share my knowledge
            and contribute to the developer community. These are the resources I've built
            from my experience and learning journey.
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
                  <motion.a
                    key={channel.name}
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-card rounded-lg border border-border/40 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:-translate-y-1 cursor-pointer group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-primary group-hover:text-accent transition-colors">
                        {channel.name}
                      </h4>
                      <span className="text-sm text-muted">
                        {channel.subscribers}
                      </span>
                    </div>
                    <p className="text-muted text-sm">{channel.description}</p>
                    <div className="flex items-center text-accent text-sm mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Visit channel</span>
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </div>
                  </motion.a>
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
                  <motion.a
                    key={source.name}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-card rounded-lg border border-border/40 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:-translate-y-1 cursor-pointer group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    <span className="text-primary font-medium group-hover:text-accent transition-colors">{source.name}</span>
                    <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                  </motion.a>
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