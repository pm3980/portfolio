import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Appreciations from "@/components/Appreciations";
import Attributes from "@/components/Attributes";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Highlights />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Appreciations />
      <Attributes />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
