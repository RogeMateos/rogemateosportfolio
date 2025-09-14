import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={20} />,
      url: "https://github.com",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      url: "https://linkedin.com",
    },
    {
      name: "Email",
      icon: <Mail size={20} />,
      url: "mailto:your@email.com",
    },
  ];

  return (
    <footer id="contact" className="py-16 bg-secondary/5 border-t border-border/20">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-primary mb-6"
          >
            Let's work together?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted text-lg mb-8 max-w-2xl mx-auto"
          >
            I'm available for freelance projects, collaborations, or
            just to chat about technology. Let's get in touch!
          </motion.p>

          <motion.a
            href="mailto:your@email.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-button inline-block mb-12"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send message
          </motion.a>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center space-x-6 mb-12"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                className="text-muted hover:text-accent transition-colors duration-300 p-3 rounded-full hover:bg-accent/10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-border/20 pt-8"
          >
            <p className="text-muted text-sm flex items-center justify-center">
              Made with{" "}
              <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />{" "}
              by Your Name © {new Date().getFullYear()}
            </p>
            <p className="text-muted text-xs mt-2">
              Inspired by the design of Brittany Chiang
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;