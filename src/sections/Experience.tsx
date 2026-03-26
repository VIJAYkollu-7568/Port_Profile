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

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className={`relative mb-10 pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"}`}
            >
              {/* Dot */}
              <div className="absolute left-2.5 md:left-auto md:right-auto top-1 w-3 h-3 rounded-full bg-primary glow-box"
                style={{ [i % 2 === 0 ? "right" : "left"]: window?.innerWidth >= 768 ? "-6px" : undefined,
                  left: window?.innerWidth < 768 ? "10px" : (i % 2 !== 0 ? "-6px" : undefined) }}
              />

              <div className="glass p-4">
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
