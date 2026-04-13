import videoFile from '../../assets/video.mp4';

function Globe() {
  return (
    <section className="relative overflow-hidden py-10 pt-10 lg:py-10 pt-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(168,85,247,0.15),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(168,85,247,0.25),transparent)]"></div>
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-6">
        <div>
          <p className="gradient-text text-lg font-semibold md:text-xl">
            Space exploration.
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl lg:text-5xl dark:text-white">
            Discover the cosmos.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            Explore the universe interactively with our project, which brings
            you the most fascinating data from NASA. With access to the APOD,
            EPIC, and other space data APIs, our site allows you to view daily
            images of space, follow astronomical events, and explore historic
            missions.
          </p>
          <a
            href="#epic"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-800 dark:border-white/20 dark:bg-white/10 dark:hover:bg-white/20"
          >
            Get Started
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
        <div className="globe-wrap relative flex min-h-[280px] items-center justify-center lg:min-h-[400px]">
          <video
            width="640"
            height="360"
            controls
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={videoFile} type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
        </div>
      </div>
    </section>
  );
}

export default Globe;
