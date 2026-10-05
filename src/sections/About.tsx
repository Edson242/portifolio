import { CheckCircle2 } from "lucide-react";
import { Reveal } from "../components/common/Reveal";
import { SectionHeading } from "../components/common/SectionHeading";
export function About() {
  return (
    <section id="sobre" className="section container about">
      <Reveal>
        <SectionHeading index="01 / SOBRE" title="Transformando problemas em software." />
      </Reveal>
      <Reveal delay={0.08}>
        <div className="about-content">
          <div className="about-copy">
            <p>
              Sou Edson Silveira, tenho 20 anos e atuo profissionalmente com desenvolvimento de
              software há 3 anos. Atualmente trabalho como Desenvolvedor de Software Pleno, atuando
              principalmente no desenvolvimento de aplicações Web.
            </p>
            <p>
              Minha experiência envolve Front-end e Back-end, permitindo participar de diferentes
              etapas: interfaces, experiência do usuário, APIs, regras de negócio, integrações e
              infraestrutura.
            </p>
            <p>
              Gosto de entender o problema antes de escrever código e busco desenvolver soluções
              organizadas, escaláveis e fáceis de manter.
            </p>
          </div>
          <aside className="principles">
            <span className="tiny-code">&lt;Developer /&gt;</span>
            {[
              "Visão de produto e engenharia",
              "Código legível e sustentável",
              "Interfaces responsivas e acessíveis",
            ].map((x) => (
              <p key={x}>
                <CheckCircle2 size={17} />
                {x}
              </p>
            ))}
          </aside>
        </div>
      </Reveal>
    </section>
  );
}
