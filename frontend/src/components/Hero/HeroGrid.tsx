import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";
import ProjectCard from "../FeaturedProjects/ProjectCard";
import StatCardStyles from "./StatCard";

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

        <h1 className="mt-4 text-lg font-medium max-w-4xl">
          Olá, eu sou
        </h1>

        <h1 className="mt-4 text-5xl font-bold max-w-4xl">
          {title}
        </h1>

        <p className="font-medium font-light mt-6 max-w-2xl text-xl font-bold text-purple-600">
          {subtitle}
        </p>
        
        <HeroButtons/>

        <HeroStats/>

      </section>
    </>
  );
}

export default Hero;