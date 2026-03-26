import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Send } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="section-padding">
      <div ref={ref} className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-display font-bold mb-8 text-center gradient-text"
        >
          Get In Touch
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="glass p-8 space-y-5"
          onSubmit={(e) => e.preventDefault()}
        >
          {(["name", "email"] as const).map((field) => (
            <div key={field}>
              <label className="text-sm text-muted-foreground capitalize mb-1 block">{field}</label>
              <input
                type={field === "email" ? "email" : "text"}
                value={form[field]}
                onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
          ))}
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Message</label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all duration-300"
          >
            Send Message <Send size={16} />
          </button>
        </motion.form>

        <div className="flex justify-center mt-6">
          <a href="mailto:hello@example.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Mail size={16} /> hello@example.com
          </a>
        </div>
      </div>
    </section>
  );
}
