import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-strong"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="font-display text-xl font-bold gradient-text">Portfolio</span>

        {/* Desktop */}
        <div className="hidden md:flex gap-8">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {l}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden glass-strong border-t border-border px-6 pb-4"
        >
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="block py-2 text-muted-foreground hover:text-foreground transition-colors w-full text-left"
            >
              {l}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
