import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
