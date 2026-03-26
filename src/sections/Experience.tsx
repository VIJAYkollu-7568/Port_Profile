import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const timeline = [
  { year: "2024", title: "Senior Developer", place: "Company A", desc: "Led frontend architecture." },
  { year: "2023", title: "Full Stack Developer", place: "Company B", desc: "Built scalable web apps." },
  { year: "2022", title: "CS Degree", place: "University", desc: "Graduated with honors." },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding">
      <div ref={ref} className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-display font-bold mb-12 text-center gradient-text"
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="relative pl-8 border-l-2 border-border"
            >
              <div className="absolute left-[-7px] top-2 w-3 h-3 rounded-full bg-primary glow-box" />
              <div className="glass p-5">
                <span className="text-xs text-primary font-medium">{item.year}</span>
                <h3 className="text-lg font-display font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.place}</p>
                <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
