function Apod() {
  return (
    <section id="apod" className="py-20 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-20 lg:px-6">
        <div>
          <p className="gradient-text text-sm font-semibold uppercase tracking-wider">
            AI Marketing 1
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-white">
            Optimized Reach
          </h2>

          <p className="mt-6 text-slate-600 dark:text-slate-400">
            Segmentação preditiva e orçamento dinâmico garantem que cada real
            investido trabalhe mais. Nossa plataforma aprende com cada campanha
            e refina o targeting em tempo real.
          </p>

          <a
            href="#"
            className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-purple-600 hover:text-purple-500 dark:text-cyan-400 dark:hover:text-cyan-300"
          >
            Learn more
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative h-72 w-72 md:h-80 md:w-80">
            <div className="cube-glow absolute inset-0 rotate-12 rounded-3xl backdrop-blur-sm"></div>

            <div
              className="absolute inset-4 rounded-2xl border border-white/20 bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20 shadow-2xl"
              style={{
                transform: 'rotate(-6deg) perspective(600px) rotateY(-12deg)',
              }}
            ></div>

            <div className="absolute inset-8 rounded-xl bg-gradient-to-tr from-fuchsia-500/30 to-cyan-400/40 blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Apod;
