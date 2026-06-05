import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <style>{`
        .keyword-highlight {
          color: #10b981;
          font-weight: 600;
          text-shadow: 0 0 10px rgba(16, 185, 129, 0.4);
          box-shadow: inset 0 0 15px rgba(16, 185, 129, 0.15);
          padding: 0 2px;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .keyword-highlight:hover {
          text-shadow: 0 0 20px rgba(16, 185, 129, 0.6);
          box-shadow: inset 0 0 20px rgba(16, 185, 129, 0.25);
        }

        #about {
          min-height: 65vh;
        }
      `}</style>
      <section id="about" ref={ref} className="py-8 bg-background">
      <div className="container mx-auto px-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="section-heading"
          >
            About me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-muted text-lg leading-relaxed">
                My current work involves everything from React application architecture to customer journey optimization and API integration with backend insurance systems. I specialize in building intuitive user interfaces for critical business processes such as policy renewals, customer retention journeys, and payment processing systems that support high-volume customer interactions.
              </p>

              <p className="text-muted text-lg leading-relaxed">
                My development philosophy is based on <span className="keyword-highlight">continuous learning</span>, practical <span className="keyword-highlight">problem-solving</span>, and collaboration. I enjoy building solutions that not only work well technically but also deliver meaningful value to users and businesses.
              </p>

              <p className="text-muted text-lg leading-relaxed">
                Alongside my front-end development work, I am actively exploring how <span className="keyword-highlight">Artificial Intelligence</span> can be applied to software engineering. My current focus is on understanding the limitations of Large Language Models (LLMs) and researching approaches that <span className="keyword-highlight">improve memory</span>, reasoning, knowledge management, and reliability.
              </p>

              <p className="text-muted text-lg leading-relaxed">
                I am particularly interested in AI systems that combine <span className="keyword-highlight">persistent memory</span>, specialized skills, and <span className="keyword-highlight">structured workflows</span>. Rather than using AI as a simple chatbot, I enjoy learning how intelligent systems can retain knowledge, explain decisions, reduce context loss, and support complex engineering tasks more effectively.
              </p>

              <div className="pt-4">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  What I currently do:
                </h3>
                <ul className="space-y-2 text-muted">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">▶</span>
                    Digital Renewals application development at Hastings Insurance
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">▶</span>
                    Customer journey optimization for 2.5M+ users
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">▶</span>
                    API integration with backend insurance systems
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">▶</span>
                    Building scalable React applications and user interfaces
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">▶</span>
                    Exploring AI-assisted software development and engineering workflows
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">▶</span>
                    Researching AI memory, knowledge management, and agent-based systems
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">▶</span>
                    Continuous learning in modern software engineering and emerging technologies
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="relative z-10">
                <div className="w-full h-96 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl border border-accent/20 overflow-hidden">
                  <img
                    src="/images/roge.png"
                    alt="Roge Mateos - Professional Photo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-accent/30 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/10 rounded-full -z-10" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default About;