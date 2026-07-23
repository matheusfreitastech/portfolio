export type Card = {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
};

export const cards: Card[] = [
  {
    title: "Portfolio",
    image: "https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Meu portfolio em React.",
    technologies: ["React", "TypeScript"],
    github: "github.com/..."
  },
  {
    title: "Sistema X",
    image: "https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Sistema legal.",
    technologies: ["Node", "Express"],
    github: "github.com/..."
  }
];