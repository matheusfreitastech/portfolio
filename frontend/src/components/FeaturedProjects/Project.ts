export type Project = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Project 1",
    description: "A simple project",
    technologies: ["React", "TypeScript"],
    github: "https://github.com/example/project1"
  },
  {
    title: "Project 2",
    description: "Another project",
    technologies: ["Node.js", "Express"],
    github: "https://github.com/example/project2"
  },
  {
    title: "Project 3",
    description: "A more complex project",
    technologies: ["Python", "Django"],
    github: "https://github.com/example/project3"
  }
];