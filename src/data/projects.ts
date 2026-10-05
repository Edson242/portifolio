export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "sky-trace",
    title: "Sky Trace",
    subtitle: "Projeto acadêmico · Radar aéreo",
    description:
      "Sistema de radar aéreo e gerenciamento de risco ambiental em tempo real, construído sobre uma arquitetura orientada a eventos com comunicação via WebSocket.",
    image: "",
    technologies: ["WebSocket", "Tempo Real", "Arquitetura Orientada a Eventos"],
    github: "https://github.com/Edson242/sky-trace-client",
    demo: "https://sky-trace.vercel.app",
    featured: true,
  },
  {
    id: "dtalia",
    title: "D’Italia",
    subtitle: "Landing page para pizzaria",
    description:
      "Landing page moderna criada para apresentar uma pizzaria, destacando sua identidade visual, produtos e experiência digital.",
    image: "",
    technologies: ["React", "TypeScript", "Landing Page"],
    github: "https://github.com/Edson242/site-dtalia",
    demo: "https://dtalia.vercel.app",
    featured: true,
  },
];
