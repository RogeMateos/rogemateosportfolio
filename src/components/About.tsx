import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="section-heading"
          >
            About me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-muted text-lg leading-relaxed">
                I'm a front-end developer with over 3 years of React experience
                building modern and scalable web applications. I currently work
                at Hastings Insurance where I develop and maintain their Digital
                Renewals application serving over 2.5 million customers.
              </p>

              <p className="text-muted text-lg leading-relaxed">
                My current work involves everything from React application architecture
                to complex customer journey optimization and API integration with backend
                insurance systems. I specialize in creating intuitive user interfaces for
                critical business processes like policy renewals, customer retention flows,
                and payment processing that handle high-volume customer interactions.
              </p>

              <p className="text-muted text-lg leading-relaxed">
                My development philosophy is based on three fundamental pillars:
                <span className="text-accent font-semibold"> clean code</span>,
                <span className="text-accent font-semibold"> continuous learning</span> and
                <span className="text-accent font-semibold"> effective collaboration</span>.
                I firmly believe that technology should serve to solve real problems
                and improve people's lives.
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
                    High-volume payment processing interfaces
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
                <div className="w-full h-96 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl border border-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl text-accent">👨‍💻</span>
                    </div>
                    <p className="text-muted text-sm">
                      Professional photo here
                    </p>
                  </div>
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
  );
};

export default About;