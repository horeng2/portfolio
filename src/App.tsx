import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Strengths from "./components/Strengths";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Header />
      <main className="mx-auto max-w-5xl px-4 pb-0">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Strengths />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
