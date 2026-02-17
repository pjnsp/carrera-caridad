import type { EventConfig, Distancia } from "../../config/types";
import { ScrollCircle } from "./ScrollCircle";

interface HeroProps {
  event: EventConfig;
  distancias: Distancia[];
  raceOver: boolean;
}

export default function Hero({ event, distancias, raceOver }: HeroProps) {
  const distanceSummary = distancias.map((d) => d.distance).join(" / ");

  return (
    <section className="pt-14 overflow-x-clip overflow-y-visible relative">
      {/* Mobile scroll circle — top-right, hidden on lg+ */}
      <div className="absolute -top-10 -right-10 z-10 lg:hidden">
        <ScrollCircle size={280} thickness={3} logoSrc="/nsp-logo-black.png" logoOpacity={0.25} />
      </div>

      <div className="grid lg:grid-cols-2 min-h-[calc(100vh-3.5rem)] overflow-visible">
        {/* Left */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 xl:px-20 py-20">
          <div className="max-w-lg">
            <div className="anim flex items-center gap-3 mb-10">
              <div className="w-8 h-[3px] bg-lime"></div>
              <span className="text-faint font-semibold text-[11px] uppercase tracking-[0.25em]">
                {event.tagline}
              </span>
            </div>

            <h1 className="font-impact uppercase leading-[0.88] mb-8 anim d1">
              {event.titleLines.map((line, i) => (
                <span
                  key={i}
                  className={`block text-[clamp(3rem,6vw,5.5rem)] ${
                    line.faded ? "text-ink/20" : "text-ink"
                  }`}
                >
                  {line.text}
                </span>
              ))}
            </h1>

            <p className="text-mute text-base leading-relaxed max-w-sm mb-12 anim d2">
              {event.invitation}
            </p>

            <div className="flex flex-wrap gap-10 mb-12 anim d3">
              <div>
                <p className="text-[10px] font-bold text-faint uppercase tracking-[0.2em] mb-1">
                  Fecha
                </p>
                <p className="font-impact text-2xl uppercase">
                  {event.displayDate}
                </p>
              </div>
              <div className="w-px bg-soft"></div>
              <div>
                <p className="text-[10px] font-bold text-faint uppercase tracking-[0.2em] mb-1">
                  Hora
                </p>
                <p className="font-impact text-2xl uppercase">
                  {event.displayTime}
                </p>
              </div>
              <div className="w-px bg-soft"></div>
              <div>
                <p className="text-[10px] font-bold text-faint uppercase tracking-[0.2em] mb-1">
                  Distancias
                </p>
                <p className="font-impact text-2xl uppercase">
                  {distanceSummary}
                </p>
              </div>
            </div>

            {!raceOver && (
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
                  Camisa y medalla de participación solo para las primeras {event.maxCapacity} personas registradas
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Right: grayscale hero image + scroll circle */}
        <div className="relative hidden lg:block overflow-visible">
          <div
            className="hero-photo absolute inset-0"
            style={
              {
                "--hero-img": "url('/many-racers.jpg')",
                backgroundImage: "var(--hero-img)",
              } as React.CSSProperties
            }
          />
          {/* Scroll-spinning circle — outside hero-photo to avoid grayscale */}
          <div className="absolute -bottom-32 -right-20 z-10">
            <ScrollCircle size={480} thickness={3} />
          </div>
        </div>
      </div>
    </section>
  );
}
