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

        <div className="flex
          flex-col
          mb-2">

        <h2 className="mt-4 text-lg font-medium
         max-w-4xl">
          Olá, eu sou
        </h2>

        <h1 className="mt-4 text-5xl font-bold max-w-4xl">
          {title}
        </h1>

        <p className="font-semibold tracking-normal mt-6 text-xl text-purple-600 drop-shadow-[0_0_6px_currentColor]">
          {subtitle}
        </p>

        
        <h2 className="mt-4 text-lg font-normal
         max-w-4xl">
          Transformo ideas em soluções tecnológicas através de software, eletrônica e pesquisa aplicada.
          Do laboratório ao produto, da teoria à prática.
        </h2>

        </div>
        
        <HeroButtons/>

        <HeroStats/>

      </section>
    </>
  );
}

export default Hero;