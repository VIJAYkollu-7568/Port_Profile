import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Send } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // ✅ handle submit (mailto)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Message from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;

    window.location.href =
      `mailto:2300032991cseh1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

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

        {/* ✅ FORM */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass p-8 space-y-5"
        >
          {/* NAME */}
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">
              Name
            </label>
            <input
              type="text"
              required
              placeholder="Enter your name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>

          {/* MESSAGE */}
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">
              Message
            </label>
            <textarea
              rows={4}
              required
              placeholder="Write your message..."
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300 active:scale-95"
          >
            Send Message <Send size={16} />
          </button>
        </motion.form>

        {/* EMAIL LINK */}
        <div className="flex justify-center mt-6">
          <a
            href="mailto:2300032991cseh1@gmail.com"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail size={16} /> 
          </a>
        </div>
      </div>
    </section>
  );
}