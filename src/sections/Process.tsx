import { Reveal } from "../components/common/Reveal";
import { SectionHeading } from "../components/common/SectionHeading";
const steps = [
  ["Entender", "Compreender problema, contexto e requisitos."],
  ["Arquitetar", "Definir tecnologias, estruturas, componentes e responsabilidades."],
  ["Desenvolver", "Transformar planejamento em software funcional e sustentável."],
  ["Evoluir", "Testar, realizar deploy, monitorar e melhorar continuamente."],
];
export function Process() {
  return (
    <section className="section container process">
      <Reveal>
        <SectionHeading index="COMO EU TRABALHO" title="Do problema até a produção." />
      </Reveal>
      <div className="process-grid">
        {steps.map(([name, text], i) => (
          <Reveal key={name} delay={i * 0.08}>
            <article>
              <span>0{i + 1}</span>
              <h3>{name}</h3>
              <p>{text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
