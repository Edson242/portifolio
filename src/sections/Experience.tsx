import { ArrowDown } from "lucide-react";
import { experiences } from "../data/experience";
import { Reveal } from "../components/common/Reveal";
import { SectionHeading } from "../components/common/SectionHeading";
export function Experience() {
  return (
    <section id="experiencia" className="section container">
      <Reveal>
        <SectionHeading index="02 / EXPERIÊNCIA" title="Minha jornada profissional" />
      </Reveal>
      <div className="timeline">
        {experiences.map((item, i) => (
          <Reveal key={item.company} delay={i * 0.1}>
            <article className="experience">
              <div className="timeline-mark">
                <b>{item.year}</b>
                <span />
                {i < experiences.length - 1 && <ArrowDown size={16} />}
              </div>
              <div className="experience-card glass">
                <p className="period">{item.period}</p>
                <h3>{item.company}</h3>
                <h4>{item.role}</h4>
                <p>{item.description}</p>
                <div className="tags">
                  {item.technologies.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
