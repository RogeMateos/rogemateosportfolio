import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import LearningHub from "@/components/LearningHub";
import Skills from "@/components/Skills";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <LearningHub />
        <Skills />
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
