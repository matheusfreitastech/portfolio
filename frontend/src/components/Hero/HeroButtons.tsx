function HeroButtons() {
    return (
     <div className="flex gap-4">
        <button
          className="
            rounded-lg
            bg-purple-600
            px-6
            py-3
            text-black
            font-semibold
            inline-flex
            items-center
            focus:ring 
            transition hover:bg-purple-400 
            active:bg-purple-200
          "
        >
          Ver Projetos
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 ml-1.5">
                <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
            </svg>
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
    )
}

export default HeroButtons;