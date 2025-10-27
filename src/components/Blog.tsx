import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const blogPosts = [
    {
      title: "React Hooks fundamentals that every developer should know",
  excerpt: "A complete guide to useState, useEffect and custom hooks with practical examples.",
      date: "2024-01-15",
      readTime: "8 min",
      category: "React",
      slug: "react-hooks-fundamentals",
    },
    {
      title: "Performance optimization in JavaScript applications",
      excerpt: "Essential techniques to improve the speed and efficiency of your web applications.",
      date: "2024-01-08",
      readTime: "12 min",
      category: "Performance",
      slug: "javascript-performance-optimization",
    },
    {
  title: "My experience learning TypeScript",
  excerpt: "Reflections on transitioning from JavaScript to TypeScript and lessons learned.",
      date: "2024-01-01",
      readTime: "6 min",
  category: "Learning",
      slug: "learning-typescript-experience",
    },
  ];

  const categories = ["All", "React", "JavaScript", "Performance", "Learning", "Resources"];

  return (
    <section id="blog" ref={ref} className="py-8 bg-secondary/5">
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
            Blog & Thoughts
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted text-lg mb-12 max-w-2xl"
          >
            I share my learnings, experiences and thoughts on web development,
            emerging technologies and the continuous process of professional growth.
          </motion.p>

          {/* Categories Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                  category === "All"
                    ? "bg-accent/10 border-accent/30 text-accent"
                    : "bg-card border-border/40 text-muted hover:border-accent/30 hover:text-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 3) }}
                className="project-card p-6 group cursor-pointer"
              >
                <div className="flex flex-col h-full">
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-accent/20 text-accent">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-muted mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{new Date(post.date).toLocaleDateString('en-US')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <div className="flex items-center text-accent text-sm group-hover:text-accent/80 transition-colors">
                    <span>Read more</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <a href="/blog" className="hero-button">
              View All Articles
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;