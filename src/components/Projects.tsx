import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Marvel Superheroes Comic App",
      description: "Interactive Marvel superheroes application showcasing comic characters with detailed information, search functionality, and responsive design using Marvel API.",
      tech: ["React", "TypeScript", "Marvel API", "CSS3", "Responsive Design"],
      category: "Professional",
      demo: "https://superheroesmarvelcomic.netlify.app/marvel",
      github: "https://github.com/RogeMateos/HeroesApp",
      featured: false,
    },
    {
      title: "New Testament Meditations",
      description: "A meditation application featuring daily reflections and spiritual insights from the New Testament with a clean, serene interface for contemplation and personal growth.",
      tech: ["React", "TypeScript", "TailwindCSS", "Responsive Design"],
      category: "Personal",
      demo: "https://newtestamentmeditations.netlify.app/",
      github: "https://github.com/RogeMateos/inner-peace-path",
      featured: false,
    },
    {
      title: "Task Management App",
      description: "Task management application with collaborative features. Implements drag & drop, real-time notifications and cloud synchronization.",
      tech: ["React", "Redux", "Firebase", "Material-UI"],
      category: "Personal",
      demo: "https://demo.com",
      github: "https://github.com",
      featured: false,
    },
    {
      title: "Weather Dashboard",
      description: "Weather dashboard with interactive data visualization. Consumes multiple APIs and presents weather information intuitively.",
      tech: ["React", "Chart.js", "Weather API", "Tailwind CSS"],
      category: "Experimental",
      demo: "https://demo.com",
      github: "https://github.com",
      featured: false,
    },
    {
  title: "Blog CMS",
  description: "Content management system for blogs with Markdown editor, SEO optimizations and a full admin panel.",
      tech: ["Next.js", "Prisma", "PostgreSQL", "TailwindCSS"],
      category: "Personal",
      demo: "https://demo.com",
      github: "https://github.com",
      featured: false,
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Professional":
        return "bg-accent/20 text-accent";
      case "Personal":
        return "bg-blue-500/20 text-blue-400";
      case "Experimental":
        return "bg-purple-500/20 text-purple-400";
      default:
        return "bg-slate/20 text-slate";
    }
  };

  return (
    <section id="projects" ref={ref} className="py-8 bg-background">
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
            Featured Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted text-lg mb-12 max-w-2xl"
          >
            A selection of projects I have developed, from commercial applications
            to personal experiments that have helped me grow as a developer.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 2) }}
                className={`group project-card p-6 ${
                  project.featured ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex flex-col h-full">
                  {/* Project Image */}
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-48 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg mb-6 border border-accent/10 overflow-hidden cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {project.title === "Marvel Superheroes Comic App" ? (
                      <img
                        src="/images/superheroes.png"
                        alt="Marvel Heroes App Interface"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        style={{objectPosition: "center -18px"}}
                      />
                    ) : project.title === "New Testament Meditations" ? (
                      <img
                        src="/images/meditationnewtest.png"
                        alt="New Testament Meditations App"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center transition-transform duration-300 hover:scale-105">
                        <span className="text-muted text-sm">Project preview</span>
                      </div>
                    )}
                  </motion.a>

                  {/* Category Badge */}
                  <div className="mb-4">
                    <motion.a
                      href={
                        project.category === "Professional"
                          ? "#professional-projects"
                          : project.category === "Personal"
                          ? "#personal-projects"
                          : project.category === "Experimental"
                          ? "#experimental-projects"
                          : "#projects"
                      }
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium cursor-pointer select-none transition-colors duration-200 ${getCategoryColor(
                        project.category
                      )} ${
                        project.category === "Professional"
                          ? "hover:text-accent/70"
                          : project.category === "Personal"
                          ? "hover:text-blue-400/70"
                          : project.category === "Experimental"
                          ? "hover:text-purple-400/70"
                          : ""
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {project.category}
                    </motion.a>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary/50 text-secondary-foreground text-sm rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={18} />
                      <span>Demo</span>
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-muted hover:text-accent transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button"
            >
              View More Projects
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;