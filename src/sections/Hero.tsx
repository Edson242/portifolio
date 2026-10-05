import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowRight, BriefcaseBusiness, Camera, GitFork } from "lucide-react";
const socials = [
  { icon: GitFork, href: "https://github.com/Edson242", label: "GitHub" },
  {
    icon: BriefcaseBusiness,
    href: "https://www.linkedin.com/in/edson-silveira-1b717a245/",
    label: "LinkedIn",
  },
  { icon: Camera, href: "https://instagram.com/edson._silveira", label: "Instagram" },
];
export function Hero() {
  const reduced = useReducedMotion();
  return (
    <section id="inicio" className="hero container">
      <div className="hero-copy">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="availability"
        >
          <span /> Software Developer <i>•</i> Full Stack
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          Olá, eu sou
          <br />
          <span>Edson Silveira.</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
        >
          <p className="hero-role">Desenvolvedor de Software Pleno</p>
          <p className="hero-lead">
            Construindo aplicações modernas através de código, arquitetura e tecnologia.
          </p>
          <p className="hero-description">
            Desenvolvedor Full Stack com 3 anos de experiência profissional criando aplicações Web
            modernas, escaláveis e performáticas.
          </p>
          <div className="hero-actions">
            <a href="#experiencia" className="button primary">
              Ver minha experiência <ArrowDownRight size={17} />
            </a>
            <a href="#projetos" className="button ghost">
              Conhecer projetos <ArrowRight size={17} />
            </a>
          </div>
          <div className="social-row">
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                <Icon size={19} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
      <motion.div
        className="code-orbit"
        animate={reduced ? {} : { y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="code-card">
          <div className="code-top">
            <div>
              <i />
              <i />
              <i />
            </div>
            <span>developer.ts</span>
            <em>TS</em>
          </div>
          <pre>
            <code>
              <b>const</b> developer = {"{"}
              {`\n`} name: <s>"Edson Silveira"</s>,{`\n`} role: <s>"Software Developer"</s>,{`\n`}{" "}
              level: <s>"Pleno"</s>,{`\n`} experience: <s>"3+ years"</s>,{`\n`}
              {`\n`} stack: [{`\n`} <s>"React"</s>, <s>"Angular"</s>,{`\n`} <s>"TypeScript"</s>,{" "}
              <s>"Java"</s>,{`\n`} <s>"Node.js"</s>
              {`\n`} ],{`\n`}
              {`\n`} focus: <s>"Building great software"</s>
              {`\n`}
              {"}"};
            </code>
          </pre>
        </div>
        <span className="float-tag tag-one">{"{ }"}</span>
        <span className="float-tag tag-two">JAVA</span>
        <span className="float-tag tag-three">01</span>
      </motion.div>
      <div className="metrics">
        {[
          ["3+", "Anos de experiência"],
          ["2", "Empresas"],
          ["Full Stack", "Development"],
          ["Web", "Specialist"],
        ].map(([num, label]) => (
          <div key={num}>
            <strong>{num}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
