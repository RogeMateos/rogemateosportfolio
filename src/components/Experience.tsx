import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      period: "2021 — PRESENT",
      role: "Frontend Developer",
      company: "Hastings Insurance",
      companyUrl: "https://www.hastingsdirect.com/",
      description: [
        "Develop and maintain the Digital Renewals application serving over 2.5 million customers, focusing on customer journey optimization and user experience improvements.",
        "Lead frontend development for critical business processes including policy renewals, customer retention flows, and payment processing systems that handle high-volume customer interactions.",
        "Collaborate with cross-functional teams including backend developers, designers, and product managers to implement and advocate for best practices in web accessibility and performance optimization."
      ],
      technologies: ["React", "TypeScript", "JavaScript", "CSS3", "API Integration", "Performance Optimization"]
    },
    {
      period: "2018 — 2022",
      role: "Frontend Developer",
      company: "Barclays UK",
      companyUrl: "https://www.barclays.co.uk/",
      description: [
        "Optimized and refactored existing codebases across multiple Barclays repositories, introducing Preact and Storybook components to enhance UI consistency and address bugs efficiently. Played a key role in code quality improvement by reviewing and approving pull requests for technologies including JavaScript, AEM, HTL, CSS, SASS, and Preact.",
        "Leveraged Preact Router for client-side routing and enhanced development workflow by adding hot reloading with Webpack and Babel, improving navigation speed and developer productivity. Engineered touch-optimized UIs using AEM's Sling Models and Sightly (HTL), delivering static websites using Adobe Experience Manager (AEM 6.5) with Agile practices.",
        "Ensured web standards compliance for speed, responsiveness, and cross-browser compatibility across devices. Enhanced code quality through testing practices using AAA Pattern methodology, achieving 80%+ code coverage. Acted as technical consultant advocating for clean code, architectural, and design patterns across software teams."
      ],
      technologies: ["JavaScript", "TypeScript", "React.js", "Jenkins", "Webpack", "Babel", "Git", "SonarQube", "AEM", "HTML", "CSS", "SASS"]
    },
  ];

  const getTechColor = (tech: string, index: number) => {
    const colors = [
      "text-accent", // Mint green for React, main techs
      "text-blue-400", // Blue for TypeScript
      "text-yellow-400", // Yellow for JavaScript
      "text-purple-400", // Purple for CSS
      "text-orange-400", // Orange for APIs
      "text-green-400", // Green for other techs
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="experience" ref={ref} className="py-8 bg-secondary/5">
      <div className="container mx-auto px-12">
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
            Experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted text-lg mb-12 max-w-2xl"
          >
            Professional experience building scalable web applications and leading
            development teams across different industries and company stages.
          </motion.p>

          <div className="space-y-16">
            {experiences.map((experience, index) => (
              <motion.div
                key={`${experience.company}-${experience.period}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 2) }}
                className="space-y-6"
              >
                {/* Date */}
                <p className="text-muted text-sm font-medium tracking-wider">
                  {experience.period}
                </p>

                {/* Title Row */}
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-semibold text-accent">
                    {experience.role}
                  </h3>
                  <span className="text-primary text-xl">·</span>
                  <span className="text-primary text-xl font-medium">
                    {experience.company}
                  </span>
                  <motion.a
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                  </motion.a>
                </div>

                {/* Description */}
                <div className="space-y-4 max-w-4xl">
                  {experience.description.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-muted leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-6">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className={`text-sm font-medium ${getTechColor(tech, techIndex)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional spacing for visual separation */}
          <div className="mt-16 pt-8 border-t border-border/20">
            <p className="text-muted text-center text-sm">
              Looking for opportunities to contribute to innovative projects and teams.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;