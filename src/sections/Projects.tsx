import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const categories = ["All", "Web", "AI", "DevOps"];

const projects = [
  {
    title: "Distributed Payment Processing System",
    desc: "Built a high-scale backend system handling 10K+ concurrent payment requests with event-driven architecture, Redis caching, Kafka integration, concurrency-safe transaction processing, and optimized MySQL queries.",
    cat: "Web",
    tech: ["Java", "Spring Boot", "MySQL", "Redis", "Kafka"],
    image: "/pay.png",
    github: "https://github.com/VIJAYkollu-7568?tab=repositories",
    demo: "https://github.com/VIJAYkollu-7568?tab=repositories",
  },
  {
    title: "WildLife-Vision - AI Detection System",
    desc: "Built an AI-driven wildlife surveillance system using YOLOv8 for low-light and nighttime animal detection, with real-time alerts, GAN-based image enhancement, and intelligent reporting workflows.",
    cat: "AI",
    tech: ["YOLOv8", "GAN", "PyTorch", "OpenCV", "Flask"],
    image: "/wild.png",
    github: "https://github.com/VIJAYkollu-7568?tab=repositories",
    demo: "https://github.com/VIJAYkollu-7568?tab=repositories",
  },
  {
    title: "DevOps CI/CD Automation",
    desc: "Designed and implemented CI/CD pipelines for full-stack deployment with containerized services, automated cloud workflows, Jenkins integration, Ansible-based deployment, and release automation.",
    cat: "DevOps",
    tech: ["Docker", "AWS", "GitHub", "Jenkins", "Ansible"],
    image: "/devops.png",
    github: "https://github.com/VIJAYkollu-7568?tab=repositories",
    demo: "https://github.com/VIJAYkollu-7568?tab=repositories",
  },
  {
    title: "IDEAFORGE - Full Stack Development",
    desc: "Built an Instagram-like full-stack platform with RESTful backend APIs, user-focused database design, voting, notifications, categorization features, and fast API response performance.",
    cat: "Web",
    tech: ["Java", "React", "Spring"],
    image: "/idea.png",
    github: "https://github.com/VIJAYkollu-7568?tab=repositories",
    demo: "https://clinquant-sawine-4a535b.netlify.app/",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.cat === filter);

  return (
    <section id="projects" className="section-padding">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
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
                filter === c
                  ? "bg-primary text-primary-foreground"
                  : "glass text-muted-foreground hover:text-foreground"
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
              className="glass p-6 group hover:neon-border transition-all duration-300 hover:-translate-y-1 rounded-2xl"
            >
              <div className="h-48 rounded-xl overflow-hidden bg-muted mb-4">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                {p.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {p.desc}
              </p>

              <div className="flex gap-2 mb-4 flex-wrap">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={18} />
                </a>

                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}