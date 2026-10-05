import { ArrowUp } from "lucide-react";
import { useEffect, useState, type CSSProperties } from "react";
import { Navbar } from "./components/layout/Navbar";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Experience } from "./sections/Experience";
import { Hero } from "./sections/Hero";
import { GithubSection, Projects } from "./sections/Projects";
import { Process } from "./sections/Process";
import { Skills } from "./sections/Skills";
export default function App() {
  const [progress, setProgress] = useState(0);
  const [cursor, setCursor] = useState({ x: 50, y: 10 });
  useEffect(() => {
    const scroll = () =>
      setProgress(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100,
      );
    const move = (event: PointerEvent) =>
      setCursor({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("pointermove", move, { passive: true });
    scroll();
    return () => {
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("pointermove", move);
    };
  }, []);
  return (
    <div
      className="app"
      style={{ "--mouse-x": `${cursor.x}%`, "--mouse-y": `${cursor.y}%` } as CSSProperties}
    >
      <div className="progress" style={{ width: `${progress}%` }} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <GithubSection />
        <Process />
        <Contact />
      </main>
      <footer className="container">
        <span>Designed & Built by Edson Silveira</span>
        <span>© 2026 Edson Silveira</span>
      </footer>
      <button
        className={`back-to-top ${progress > 12 ? "visible" : ""}`}
        type="button"
        aria-label="Voltar ao início"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
}
