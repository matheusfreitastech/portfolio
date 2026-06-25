type HeroProps = {
  title: string;
  subtitle: string;
};

function Hero({
  title,
  subtitle,
}: HeroProps) {
  return (
    <section className="flex-1 p-12">
      <span className="text-zinc-400">
        Software Engineer • R&D
      </span>

      <h1 className="mt-4 text-6xl font-bold max-w-4xl">
        {title}
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-zinc-400">
        {subtitle}
      </p>

      <div className="mt-8 flex gap-4">
        <button
          className="
            rounded-lg
            bg-white
            px-6
            py-3
            text-black
            font-semibold
          "
        >
          Ver Projetos
        </button>

        <button
          className="
            rounded-lg
            border
            border-zinc-700
            px-6
            py-3
          "
        >
          Minha Jornada
        </button>
      </div>
    </section>
  );
}

export default Hero;