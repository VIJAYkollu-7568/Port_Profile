import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Python", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "Java", level: 70 },
  { name: "Machine Learning", level: 65 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Three.js", level: 60 },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-display font-bold mb-12 text-center gradient-text"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass p-4 hover:neon-border transition-all duration-300 group"
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium text-foreground">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
