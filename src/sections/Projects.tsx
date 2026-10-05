import { ExternalLink, GitFork, Sparkles } from "lucide-react";
import { projects } from "../data/projects";
import { Reveal } from "../components/common/Reveal";
import { SectionHeading } from "../components/common/SectionHeading";
export function Projects() {
  return (
    <section id="projetos" className="section container">
      <Reveal>
        <SectionHeading index="04 / PROJETOS" title="Algumas coisas que construí" />
      </Reveal>
      {projects.length === 0 ? (
        <Reveal delay={0.1}>
          <div className="empty-projects glass">
            <Sparkles size={21} />
            <div>
              <h3>Novos projetos chegando em breve.</h3>
              <p>
                Esta área está preparada para reunir produtos, experimentos e soluções que fazem
                parte da minha jornada.
              </p>
            </div>
          </div>
        </Reveal>
      ) : (
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.1}>
              <article className={`project-card glass ${project.featured ? "featured" : ""}`}>
                <div className={`project-preview ${project.id}`}>
                  {project.image ? (
                    <img src={project.image} alt="" loading="lazy" />
                  ) : (
                    <>
                      <span>{project.subtitle}</span>
                      <strong>{project.title}</strong>
                      <i>{project.id === "sky-trace" ? "live radar" : "pizzaria"}</i>
                    </>
                  )}
                </div>
                <div className="project-content">
                  <p className="eyebrow">{project.subtitle}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.technologies.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <GitFork size={16} /> GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}
export function GithubSection() {
  return (
    <section className="github-section container">
      <Reveal>
        <div className="github-inner glass">
          <div>
            <p className="eyebrow">05 / OPEN SOURCE</p>
            <h2>Mais código no GitHub.</h2>
            <p>
              Projetos pessoais, experimentos, estudos e algumas das coisas que venho construindo.
            </p>
            <strong>@Edson242</strong>
          </div>
          <a
            className="button primary"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Edson242"
          >
            Explorar meu GitHub <GitFork size={17} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
