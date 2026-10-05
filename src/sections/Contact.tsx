import { ArrowUpRight } from "lucide-react";
import { socialLinks } from "../data/socialLinks";
import { Reveal } from "../components/common/Reveal";
import { SectionHeading } from "../components/common/SectionHeading";
export function Contact() {
  return (
    <>
      <section className="cta container">
        <Reveal>
          <div>
            <p>VAMOS CONSTRUIR ALGO?</p>
            <h2>Tem um projeto, desafio ou oportunidade interessante?</h2>
            <span>
              Estou sempre aberto a conversar sobre tecnologia, projetos e novas oportunidades.
            </span>
            <a
              href="https://wa.me/5549991759981?text=Olá%20Edson%2C%20gostaria%20de%20conversar%20sobre%20um%20projeto."
              target="_blank"
              rel="noreferrer"
              className="button primary"
            >
              Vamos conversar <ArrowUpRight size={17} />
            </a>
          </div>
        </Reveal>
      </section>
      <section id="contato" className="section container contact">
        <Reveal>
          <SectionHeading index="06 / CONTATO" title="Vamos conversar." />
        </Reveal>
        <div className="contact-grid">
          {socialLinks.map(({ label, handle, href, icon: Icon }, i) => (
            <Reveal key={label} delay={i * 0.08}>
              <a className="contact-card glass" href={href} target="_blank" rel="noreferrer">
                <Icon size={22} />
                <div>
                  <small>{label}</small>
                  <h3>{handle}</h3>
                  <span>→ Acessar {label}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
