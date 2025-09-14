import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const mainSkills = [
    { name: "React", level: 95, category: "Frontend" },
    { name: "JavaScript", level: 90, category: "Frontend" },
    { name: "TypeScript", level: 85, category: "Frontend" },
    { name: "CSS/Sass", level: 88, category: "Frontend" },
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "Git", level: 85, category: "Tools" },
    { name: "Webpack", level: 75, category: "Tools" },
    { name: "MongoDB", level: 70, category: "Database" },
  ];

  const learningSkills = [
    "Next.js",
    "GraphQL",
    "Docker",
    "AWS",
    "Vue.js",
    "Python",
  ];

  const softSkills = [
    "Problem solving",
    "Teamwork",
    "Effective communication",
    "Critical thinking",
    "Adaptability",
    "Technical leadership",
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Frontend":
        return "bg-accent/20 text-accent";
      case "Backend":
        return "bg-blue-500/20 text-blue-400";
      case "Tools":
        return "bg-purple-500/20 text-purple-400";
      case "Database":
        return "bg-green-500/20 text-green-400";
      default:
        return "bg-slate/20 text-slate";
    }
  };

  return (
    <section id="skills" ref={ref} className="py-20 bg-background">
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
            Technologies & Skills
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted text-lg mb-12 max-w-2xl"
          >
            The technologies I master, the ones I'm learning and the
            soft skills that help me be a better developer
            and team member.
          </motion.p>

          {/* Main Skills */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-primary mb-8">
              Core Skills
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {mainSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.1 * (index + 3) }}
                  className="space-y-3"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <span className="font-semibold text-primary">
                        {skill.name}
                      </span>
                      <span
                        className={`text-xs px-2 py-1 rounded ${getCategoryColor(
                          skill.category
                        )}`}
                      >
                        {skill.category}
                      </span>
                    </div>
                    <span className="text-muted text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary/20 rounded-full h-2">
                    <motion.div
                      className="bg-accent h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.1 * (index + 3) + 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Learning Skills */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-primary mb-8">
                Learning
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {learningSkills.map((skill) => (
                  <motion.div
                    key={skill}
                    className="p-4 bg-card rounded-lg border border-border/40 text-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-primary font-medium">{skill}</span>
                    <div className="mt-2 w-full bg-accent/20 rounded-full h-1">
                      <div className="bg-accent h-1 rounded-full w-1/3" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-primary mb-8">
                Soft Skills
              </h3>
              <div className="space-y-3">
                {softSkills.map((skill) => (
                  <motion.div
                    key={skill}
                    className="flex items-center p-3 bg-card rounded-lg border border-border/40"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    <span className="text-primary font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Philosophy Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 p-8 bg-gradient-to-r from-accent/5 to-accent/10 rounded-2xl border border-accent/20"
          >
            <h3 className="text-2xl font-bold text-primary mb-4">
              My Development Philosophy
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-accent text-4xl mb-3">🧹</div>
                <h4 className="font-semibold text-primary mb-2">Clean Code</h4>
                <p className="text-muted text-sm">
                  Writing readable, maintainable and well-documented code
                </p>
              </div>
              <div>
                <div className="text-accent text-4xl mb-3">📚</div>
                <h4 className="font-semibold text-primary mb-2">
                  Continuous Learning
                </h4>
                <p className="text-muted text-sm">
                  Always staying up to date with the latest technologies and trends
                </p>
              </div>
              <div>
                <div className="text-accent text-4xl mb-3">🤝</div>
                <h4 className="font-semibold text-primary mb-2">Collaboration</h4>
                <p className="text-muted text-sm">
                  Working as a team and sharing knowledge with the community
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;