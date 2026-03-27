import { Github, Linkedin, Twitter } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/VIJAYkollu-7568?tab=repositories" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/kollu-vijay/" },
  { icon: Twitter, href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 text-center">
      <div className="flex justify-center gap-4 mb-4">
        {socials.map(({ icon: Icon, href }, i) => (
          <a
            key={i}
            href={href}
            className="w-9 h-9 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-box transition-all duration-300"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>
      <p className="text-sm text-muted-foreground">© 2026  Vijay Kollu. All rights reserved.</p>
    </footer>
  );
}
