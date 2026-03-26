import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div ref={ref} className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="w-64 h-64 mx-auto rounded-2xl bg-muted neon-border flex items-center justify-center text-6xl font-display font-bold text-primary/40">
            {'</>'}
          </div>
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 blur-xl -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            I'm a passionate developer who loves building beautiful, performant web applications.
            With experience across the full stack, I bring ideas to life with clean code and modern design.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            When I'm not coding, you'll find me exploring new technologies and contributing to open source.
          </p>
          <div className="flex gap-8 mt-6">
            {[
              { n: "3+", l: "Years Exp" },
              { n: "20+", l: "Projects" },
              { n: "10+", l: "Technologies" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-2xl font-bold text-primary">{s.n}</div>
                <div className="text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
