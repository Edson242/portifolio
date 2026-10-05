export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  year: string;
}

export const experiences: Experience[] = [
  {
    company: "Sysmo Sistemas",
    role: "Desenvolvedor de Software Pleno",
    period: "2 anos • Atual",
    year: "2024",
    description:
      "Atuação no desenvolvimento e manutenção de aplicações e soluções Web, contribuindo no Front-end e Back-end com diferentes tecnologias e arquiteturas.",
    technologies: ["Angular", "TypeScript", "Java", "Quarkus", "NG ZORRO", "APIs REST", "Docker"],
  },
  {
    company: "Torfresma Industrial",
    role: "Desenvolvedor de Software Jr",
    period: "1 ano",
    year: "2023",
    description:
      "Desenvolvimento Web voltado à automação industrial, participando da construção de soluções Front-end, Back-end e integrações. Experiência com noções de lógica de CLP, IHM e robótica aplicada ao contexto industrial.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "APIs",
      "Docker",
      "Automação Industrial",
      "CLP",
      "IHM",
      "Robótica",
    ],
  },
];
