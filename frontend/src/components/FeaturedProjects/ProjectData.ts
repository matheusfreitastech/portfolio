export type Card = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
};

export const cards: Card[] = [
  {
    title: "Portfolio",
    description: "Meu portfolio em React.",
    technologies: ["React", "TypeScript"],
    github: "github.com/..."
  },
  {
    title: "Sistema X",
    description: "Sistema legal.",
    technologies: ["Node", "Express"],
    github: "github.com/..."
  }
];