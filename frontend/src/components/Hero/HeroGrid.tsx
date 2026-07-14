import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";
import ProjectCard from "../FeaturedProjects/ProjectCard";

type HeroProps = {
  title: string;
  subtitle: string;
};

function Hero({title,subtitle,}: HeroProps) {
  return (
    <>
      <section className="flex
          flex-col
          gap-8
          flex-1
          p-12">
        <span className="text-zinc-400">
          Software Engineer • R&D
        </span>

        <h1 className="mt-4 text-6xl font-bold max-w-4xl">
          {title}
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-zinc-400">
          {subtitle}
        </p>
        
        <HeroButtons/>

        <HeroStats/>

      </section>
    </>
  );
}

export default Hero;