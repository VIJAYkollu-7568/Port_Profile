import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    year: "2025 - Present",
    title: "Software Developer (Freelance / Client Projects)",
    place: "Independent",
    desc: [
      "Developed and delivered web-based software solutions for multiple clients",
      "Designed scalable backend systems and integrated APIs for real-world applications",
      "Collaborated with clients to understand requirements and ensure timely delivery",
    ],
  },
  {
    year: "2025 - Present",
    title: "AI Engineer (Startup Collaborations)",
    place: "Multiple Startups",
    desc: [
      "Built and optimized AI models for real-world problem solving",
      "Worked on computer vision and deep learning-based systems for production use",
      "Contributed to model deployment and integration in scalable applications",
    ],
  },
  {
    year: "2025",
    title: "Backend Developer",
    place: "Skill Sprint",
    desc: [
      "Developed backend services for an online education platform",
      "Implemented scalable APIs and efficient database interactions",
      "Resolved application issues through debugging and testing",
      "Collaborated in a team-based development environment",
    ],
  },
  {
    year: "2025 - Present",
    title: "President",
    place: "Kognitiv AIML Technical Club",
    desc: [
      "Led technical mentoring initiatives and guided student developers",
      "Organized workshops on AI and emerging technologies",
      "Coordinated and managed student project teams",
    ],
  },
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

              <div className="glass p-5 rounded-xl">
                <span className="text-xs text-primary font-medium">
                  {item.year}
                </span>

                <h3 className="text-lg font-display font-semibold text-foreground">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-2">
                  {item.place}
                </p>

                <ul className="text-sm text-muted-foreground space-y-1">
                  {item.desc.map((point, idx) => (
                    <li key={idx}>• {point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}