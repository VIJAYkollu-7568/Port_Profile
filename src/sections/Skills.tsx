import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Python", icon: "🐍" },
  { name: "Node.js", icon: "🟢" },
  { name: "Java", icon: "☕" },
  { name: "Machine Learning", icon: "🧠" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Three.js", icon: "🔺" },
  { name: "Git", icon: "🔀" },
  { name: "Docker", icon: "🐳" },
  { name: "MongoDB", icon: "🍃" },
  { name: "SQL", icon: "🗄️" },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding">
      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-display font-bold mb-12 text-center gradient-text"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-5">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5, y: 30 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 200, damping: 15 }}
              whileHover={{ scale: 1.12, y: -6 }}
              className="glass p-5 flex flex-col items-center gap-3 cursor-pointer group hover:neon-border transition-all duration-300"
            >
              <motion.span
                className="text-4xl"
                animate={inView ? { rotateY: [0, 360] } : {}}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.8, ease: "easeOut" }}
              >
                {skill.icon}
              </motion.span>
              <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
