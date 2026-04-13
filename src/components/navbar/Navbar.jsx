function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md dark:border-white/10 dark:bg-black/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 lg:px-6">
        <a
          href="#"
          className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white"
        >
          ASTROSCOPE
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex dark:text-slate-400">
          <a
            href="#epic"
            className="transition hover:text-slate-900 dark:hover:text-white"
          >
            Epic
          </a>
        </nav>
        <details className="relative lg:hidden">
          <summary className="list-none cursor-pointer rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 dark:border-white/15 dark:text-slate-300 [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <div className="absolute right-0 top-full z-50 mt-2 min-w-[12rem] rounded-xl border border-slate-200 bg-white py-2 shadow-xl dark:border-white/10 dark:bg-zinc-950">
            <a
              href="#epic"
              className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-white/5"
            >
              Epic
            </a>
            <a
              href="#about"
              className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-white/5"
            >
              About Us
            </a>

            <a
              href="#blog"
              className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-white/5"
            >
              Blog
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}

export default Navbar;
