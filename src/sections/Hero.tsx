import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/kollu-vijay/" },
  { icon: Github, href: "https://github.com/VIJAYkollu-7568?tab=repositories" },
  { icon: Twitter, href: "#" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background text-foreground px-6 md:px-16 pt-24">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <p className="text-primary text-lg md:text-xl mb-4 font-medium">
            Hello, I&apos;m
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            Vijay Kollu
          </h1>

          <h2 className="text-2xl md:text-2xl text-muted-foreground font-medium mb-8">
            AI Engineer & Software Developer
          </h2>

          <p className="text-muted-foreground text-lg leading-9 max-w-xl mb-10">
            I build scalable applications and intelligent systems with a
            focus on clean design and real-world impact.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 rounded-2xl bg-primary text-primary-foreground text-base font-medium hover:opacity-90 transition"
            >
              View Projects
            </button>

            <a
              href="/my_profile.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 rounded-2xl border border-border text-base font-medium text-foreground hover:bg-muted transition"
            >
              Download Resume
            </a>
          </div>

          <div className="flex gap-6">
            {socials.map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative flex justify-center md:justify-end items-center min-h-[520px]"
        >
          {/* soft professional circles */}
          <div className="absolute right-10 top-8 w-72 h-72 rounded-full bg-purple-200/35 blur-[2px]" />
          <div className="absolute right-0 top-28 w-80 h-80 rounded-full bg-blue-200/35 blur-[2px]" />
          <div className="absolute right-16 bottom-6 w-96 h-96 rounded-full bg-violet-200/30 blur-[2px]" />
          <div className="absolute left-16 top-12 w-10 h-10 rounded-full bg-purple-100/60" />
          <div className="absolute left-0 bottom-24 w-64 h-64 rounded-full bg-purple-100/30 blur-[1px]" />

          {/* image */}
          <motion.img
            src="/my_picc-Photoroom.png"
            alt="Vijay Kollu"
            animate={{ scale: [1, 1.12, ] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-auto max-h-[360px] md:max-h-[760px] object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
          />
        </motion.div>
      </div>
    </section>
  );
}