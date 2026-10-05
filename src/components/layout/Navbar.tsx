import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = ["Início", "Sobre", "Experiência", "Skills", "Projetos", "Contato"];
const id = (label: string) =>
  label === "Início" ? "inicio" : label.toLowerCase().replace("ê", "e");

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -45% 0px" },
    );
    document.querySelectorAll("section[id]").forEach((e) => observer.observe(e));
    return () => observer.disconnect();
  }, []);
  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <a className="brand" href="#inicio">
          ES<span>.</span>
        </a>
        <button className="menu-btn" aria-label="Abrir menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
        <div className={`nav-links ${open ? "open" : ""}`}>
          {links.map((link) => (
            <a
              key={link}
              className={active === id(link) ? "active" : ""}
              onClick={() => setOpen(false)}
              href={`#${id(link)}`}
            >
              {link}
            </a>
          ))}
          <a
            className="talk-btn"
            href="https://wa.me/5549991759981?text=Olá%20Edson%2C%20gostaria%20de%20conversar%20sobre%20um%20projeto."
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            Vamos conversar
          </a>
        </div>
      </nav>
    </header>
  );
}
