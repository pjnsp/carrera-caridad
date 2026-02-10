import type { EventConfig, Distancia } from "../../../config/types";

interface AltHeroProps {
  event: EventConfig;
  distancias: Distancia[];
  raceOver: boolean;
  registrationPrice: number;
  registrationCurrency: string;
}

export default function AltHero({
  event,
  distancias,
  raceOver,
  registrationPrice,
  registrationCurrency,
}: AltHeroProps) {
  const distanceSummary = distancias.map((d) => d.distance).join(" · ");

  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      {/* Floating food decorations */}
      <div
        className="absolute top-8 left-4 md:left-12 float-slow opacity-60 pointer-events-none"
        aria-hidden="true"
      >
        <svg width="64" height="56" viewBox="0 0 64 56" fill="none">
          <ellipse cx="32" cy="22" rx="28" ry="16" fill="#9ECAD9" stroke="#3D5A73" strokeWidth="1.5" />
          <rect x="14" y="4" rx="2" width="36" height="18" fill="#A8B8C0" stroke="#3D5A73" strokeWidth="1.5" />
          <text x="20" y="16" fontFamily="Nunito" fontSize="8" fontWeight="700" fill="#3D5A73">TUNA</text>
          <ellipse cx="32" cy="22" rx="28" ry="4" fill="#7AAAB8" opacity="0.4" />
        </svg>
      </div>
      <div
        className="absolute top-16 right-6 md:right-16 float-med opacity-50 pointer-events-none"
        aria-hidden="true"
      >
        <svg width="52" height="68" viewBox="0 0 52 68" fill="none">
          <rect x="4" y="8" width="44" height="52" rx="4" fill="#F0EBE1" stroke="#3D5A73" strokeWidth="1.5" />
          <rect x="10" y="16" width="32" height="24" rx="2" fill="#F5C94C" opacity="0.5" />
          <text x="14" y="32" fontFamily="Nunito" fontSize="7" fontWeight="700" fill="#3D5A73">PASTA</text>
          <line x1="14" y1="48" x2="38" y2="48" stroke="#3D5A73" strokeWidth="1" opacity="0.4" />
          <line x1="14" y1="52" x2="32" y2="52" stroke="#3D5A73" strokeWidth="1" opacity="0.3" />
        </svg>
      </div>
      <div
        className="absolute bottom-12 left-8 md:left-24 float-fast opacity-50 pointer-events-none"
        aria-hidden="true"
      >
        <svg width="48" height="64" viewBox="0 0 48 64" fill="none">
          <rect x="6" y="10" width="36" height="48" rx="4" fill="#F0978F" stroke="#3D5A73" strokeWidth="1.5" />
          <rect x="10" y="20" width="28" height="16" rx="2" fill="#F0EBE1" />
          <text x="12" y="32" fontFamily="Nunito" fontSize="6" fontWeight="700" fill="#D94F42">VEGGIE</text>
          <text x="13" y="39" fontFamily="Nunito" fontSize="5" fontWeight="600" fill="#3D5A73">SOUP</text>
        </svg>
      </div>
      <div
        className="absolute bottom-8 right-10 md:right-28 float-slow opacity-50 pointer-events-none"
        aria-hidden="true"
      >
        <svg width="40" height="60" viewBox="0 0 40 60" fill="none">
          <path d="M10 16C10 10 14 6 20 6s10 4 10 10v32c0 4-4 8-10 8S10 52 10 48V16z" fill="#9ECAD9" stroke="#3D5A73" strokeWidth="1.5" />
          <rect x="12" y="24" width="16" height="8" rx="1" fill="#F0EBE1" opacity="0.7" />
          <ellipse cx="20" cy="12" rx="8" ry="3" fill="#7AAAB8" opacity="0.5" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-5 text-center relative z-10">
        {/* Main Title */}
        <div className="relative inline-block pop d1 mb-4">
          <div className="absolute -inset-x-6 -inset-y-2 bg-sky/40 rounded-2xl -rotate-1 textured"></div>
          <h1 className="relative font-display font-bold text-slate leading-[0.95] text-[clamp(2.8rem,8vw,6rem)] uppercase px-4 py-2">
            {event.titleLines.map((line, i) => (
              <span key={i}>
                {line.text}
                {i < event.titleLines.length - 1 && <br />}
              </span>
            ))}
          </h1>
        </div>

        {/* Parish icon */}
        <div className="pop d2 flex justify-center mb-8">
          <div className="w-16 h-16 rounded-full border-2 border-slate/30 bg-cream flex items-center justify-center">
            <svg className="w-8 h-8 text-slate/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 3c-1.2 0-3.4 1.6-4.5 3.5C5 7.5 3 9 3 12c0 4 3.5 7 7 8l2 1 2-1c3.5-1 7-4 7-8 0-3-2-4.5-4.5-5.5C15.4 4.6 13.2 3 12 3z" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 8v5m0 0l-2-2m2 2l2-2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <p className="pop d2 text-slate/70 text-lg md:text-xl font-medium max-w-lg mx-auto mb-10 leading-relaxed">
          {event.invitation}
        </p>

        {/* Date banner */}
        <div className="pop d3 inline-block relative mb-10">
          <div className="bg-yellow textured relative rounded-xl px-8 py-5 shadow-lg">
            <p className="relative z-10 font-display font-bold text-slate text-2xl md:text-3xl uppercase">
              {event.fullDate}
            </p>
            <p className="relative z-10 font-medium text-slate/70 text-base mt-1">
              Inscripción: <span className="text-forest text-lg">${registrationPrice} {registrationCurrency}</span> + Despensa
            </p>
          </div>
        </div>

        <div className="pop d4 flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 bg-cream border-2 border-forest/20 rounded-full px-5 py-2.5 text-sm font-bold text-slate/70">
            <svg className="w-5 h-5 text-coral" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
            </svg>
            Todas las edades
          </div>
          <div className="flex items-center gap-2 bg-cream border-2 border-forest/20 rounded-full px-5 py-2.5 text-sm font-bold text-slate/70">
            <svg className="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V3a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904M14.25 9h2.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
            </svg>
            Pet Friendly
          </div>
          <div className="flex items-center gap-2 bg-cream border-2 border-forest/20 rounded-full px-5 py-2.5 text-sm font-bold text-slate/70">
            <svg className="w-5 h-5 text-sky" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
            </svg>
            {distanceSummary}
          </div>
        </div>

        {!raceOver && (
          <a
            href="#inscripcion"
            className="pop d5 inline-flex items-center gap-3 bg-forest text-cream px-10 py-4 rounded-full font-display font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all group"
          >
            Inscríbete Ahora
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        )}
      </div>
    </section>
  );
}
