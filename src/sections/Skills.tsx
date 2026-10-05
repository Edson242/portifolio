import { Braces, Cloud, Server } from "lucide-react";
import { technologyGroups } from "../data/technologies";
import { Reveal } from "../components/common/Reveal";
import { SectionHeading } from "../components/common/SectionHeading";
const icons = [Braces, Server, Cloud];
export function Skills() {
  return (
    <section id="skills" className="section container">
      <Reveal>
        <SectionHeading index="03 / STACK" title="Tecnologias que fazem parte do meu dia a dia" />
      </Reveal>
      <div className="skill-groups">
        {technologyGroups.map((group, index) => {
          const Icon = icons[index];
          return (
            <Reveal key={group.title} delay={index * 0.08}>
              <article className="skill-group glass">
                <div className="group-title">
                  <Icon size={19} />
                  <h3>{group.title}</h3>
                </div>
                <div className="tech-grid">
                  {group.items.map((x, i) => (
                    <div className="tech" key={x}>
                      <small>0{i + 1}</small>
                      {x}
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
      <Reveal>
        <div className="architecture">
          <p className="eyebrow">FLUXO DE TECNOLOGIA</p>
          {[
            ["Frontend", "React + Angular + TypeScript"],
            ["Backend", "Java + Spring + Quarkus · Node.js + Express"],
            ["Real-time", "Socket.IO"],
            ["Infrastructure", "Docker + GCP + PM2"],
          ].map(([a, b], i) => (
            <div className="architecture-step" key={a}>
              <span>0{i + 1}</span>
              <strong>{a}</strong>
              <p>{b}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
