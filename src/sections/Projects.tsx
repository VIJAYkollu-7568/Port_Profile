import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const categories = ["All", "Web", "Mobile", "AI"];

const projects = [
  { title: "Project One", desc: "A modern web application", cat: "Web", tech: ["React", "TypeScript"] },
  { title: "Project Two", desc: "Mobile-first experience", cat: "Mobile", tech: ["React Native", "Node.js"] },
  { title: "Project Three", desc: "AI-powered analytics", cat: "AI", tech: ["Python", "TensorFlow"] },
  { title: "Project Four", desc: "E-commerce platform", cat: "Web", tech: ["Next.js", "Stripe"] },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.cat === filter);

  return (
    <section id="projects" className="section-padding">
      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-display font-bold mb-8 text-center gradient-text"
        >
          Projects
        </motion.h2>

        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-1.5 rounded-full text-sm transition-all duration-300 ${
                filter === c ? "bg-primary text-primary-foreground" : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="glass p-6 group hover:neon-border transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-40 rounded-lg bg-muted mb-4 flex items-center justify-center text-muted-foreground text-sm">
                Preview
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-1">{p.title}</h3>
              <p className="text-muted-foreground text-sm mb-3">{p.desc}</p>
              <div className="flex gap-2 mb-4 flex-wrap">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">{t}</span>
                ))}
              </div>
              <div className="flex gap-3">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github size={18} /></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><ExternalLink size={18} /></a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
