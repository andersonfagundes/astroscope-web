function Navbar() {
  return (
    <header class="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md dark:border-white/10 dark:bg-black/80">
      <div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 lg:px-6">
        <a
          href="#"
          class="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white"
        >
          ASTROSCOPE
        </a>
        <nav class="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex dark:text-slate-400">
          <a
            href="#apod"
            class="transition hover:text-slate-900 dark:hover:text-white"
          >
            Apod
          </a>
          <a
            href="#cases"
            class="transition hover:text-slate-900 dark:hover:text-white"
          >
            Epic
          </a>
          <a
            href="#about"
            class="transition hover:text-slate-900 dark:hover:text-white"
          >
            About Us
          </a>

          <a
            href="#blog"
            class="transition hover:text-slate-900 dark:hover:text-white"
          >
            Blog
          </a>
        </nav>
        <details class="relative lg:hidden">
          <summary class="list-none cursor-pointer rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 dark:border-white/15 dark:text-slate-300 [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <div class="absolute right-0 top-full z-50 mt-2 min-w-[12rem] rounded-xl border border-slate-200 bg-white py-2 shadow-xl dark:border-white/10 dark:bg-zinc-950">
            <a
              href="#apod"
              class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-white/5"
            >
              Apod
            </a>
            <a
              href="#cases"
              class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-white/5"
            >
              Case Studies
            </a>
            <a
              href="#about"
              class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-white/5"
            >
              About Us
            </a>

            <a
              href="#blog"
              class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-white/5"
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
