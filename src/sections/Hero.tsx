import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowDown } from "lucide-react";

const socials = [
  { icon: Github, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Twitter, href: "#" },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="max-w-5xl mx-auto text-center">
        {/* Glowing avatar */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto w-36 h-36 mb-8"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary blur-2xl opacity-60 animate-pulse-glow" />
          <div className="relative w-36 h-36 rounded-full bg-muted border-2 border-primary/40 overflow-hidden flex items-center justify-center text-4xl font-display font-bold text-primary">
            YN
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground text-lg mb-2"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-5xl md:text-7xl font-display font-bold mb-4 gradient-text text-glow"
        >
          Your Name
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Creative Developer & Problem Solver
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all duration-300 hover:-translate-y-0.5"
          >
            View Projects
          </button>
          <button className="px-8 py-3 rounded-lg neon-border text-foreground font-medium hover:bg-primary/10 transition-all duration-300 hover:-translate-y-0.5">
            Download Resume
          </button>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex gap-4 justify-center"
        >
          {socials.map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-box transition-all duration-300"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float"
        >
          <ArrowDown className="text-muted-foreground" size={24} />
        </motion.div>
      </div>
    </section>
  );
}
