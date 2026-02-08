export default function Hero() {
  return (
    <section className="pt-14">
      <div className="grid lg:grid-cols-2 min-h-[calc(100vh-3.5rem)]">
        {/* Left */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 xl:px-20 py-20">
          <div className="max-w-lg">
            <div className="anim flex items-center gap-3 mb-10">
              <div className="w-8 h-[3px] bg-lime"></div>
              <span className="text-faint font-semibold text-[11px] uppercase tracking-[0.25em]">
                Carrera Benéfica 2026
              </span>
            </div>

            <h1 className="font-impact uppercase leading-[0.88] mb-8 anim d1">
              <span className="block text-[clamp(3rem,6vw,5.5rem)] text-ink">
                Carrera
              </span>
              <span className="block text-[clamp(3rem,6vw,5.5rem)] text-ink/20">
                Por La
              </span>
              <span className="block text-[clamp(3rem,6vw,5.5rem)] text-ink">
                Esperanza
              </span>
            </h1>

            <p className="text-mute text-base leading-relaxed max-w-sm mb-12 anim d2">
              Corre, camina o acompaña. Cada paso construye un futuro mejor para
              nuestra comunidad.
            </p>

            <div className="flex flex-wrap gap-10 mb-12 anim d3">
              <div>
                <p className="text-[10px] font-bold text-faint uppercase tracking-[0.2em] mb-1">
                  Fecha
                </p>
                <p className="font-impact text-2xl uppercase">15 Marzo</p>
              </div>
              <div className="w-px bg-soft"></div>
              <div>
                <p className="text-[10px] font-bold text-faint uppercase tracking-[0.2em] mb-1">
                  Hora
                </p>
                <p className="font-impact text-2xl uppercase">7:00 AM</p>
              </div>
              <div className="w-px bg-soft"></div>
              <div>
                <p className="text-[10px] font-bold text-faint uppercase tracking-[0.2em] mb-1">
                  Distancias
                </p>
                <p className="font-impact text-2xl uppercase">3K / 5K</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-5 anim d4">
              <a
                href="#inscripcion"
                className="bg-lime text-ink px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-ink hover:text-lime transition-colors flex items-center gap-3 group"
              >
                Inscríbete Ahora
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
              <span className="text-xs text-faint font-medium">
                Cupo limitado — 200 personas
              </span>
            </div>
          </div>
        </div>

        {/* Right: grayscale hero image */}
        <div
          className="hero-photo relative hidden lg:block"
          style={
            {
              "--hero-img": "url('/pj-cover.png')",
              backgroundImage: "var(--hero-img)",
            } as React.CSSProperties
          }
        ></div>
      </div>
    </section>
  );
}
