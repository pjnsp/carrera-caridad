import type { Distancia } from "../../../config/types";

interface AltCategoriasSectionProps {
  distancias: Distancia[];
}

const distanceColors: Record<string, { bg: string; text: string; btn: string; check: string; ring: string }> = {
  "3K": {
    bg: "bg-sky",
    text: "text-sky",
    btn: "bg-sky text-slate hover:bg-slate hover:text-cream",
    check: "text-sky",
    ring: "",
  },
  "5K": {
    bg: "bg-coral",
    text: "text-coral",
    btn: "bg-coral text-slate hover:bg-slate hover:text-cream",
    check: "text-coral",
    ring: "ring-3 ring-coral/50",
  },
  "10K": {
    bg: "bg-sage",
    text: "text-sage",
    btn: "bg-sage text-slate hover:bg-slate hover:text-cream",
    check: "text-sage",
    ring: "",
  },
};

function CheckIcon({ colorClass }: { colorClass: string }) {
  return (
    <svg
      className={`w-4 h-4 ${colorClass} flex-shrink-0`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      className="w-4 h-4 text-yellow flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" />
    </svg>
  );
}

export default function AltCategoriasSection({
  distancias,
}: AltCategoriasSectionProps) {
  return (
    <section id="categorias" className="py-16 md:py-24 bg-forest/5">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-slate uppercase mb-3 leading-tight">
            Elige tu categoría
          </h2>
          <p className="text-slate/60 text-base md:text-lg max-w-lg mx-auto">
            Tres distancias para todos los niveles. Todas parten de la Parroquia
            Nuestra Señora de la Paz.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {distancias.map((distancia) => {
            const colors = distanceColors[distancia.distance] ?? distanceColors["3K"];
            return (
              <div
                key={distancia.id}
                className={`bg-cream rounded-2xl overflow-hidden shadow-md hover-bounce group ${colors.ring}`}
              >
                <div
                  className={`${colors.bg} textured relative px-6 py-8 text-center`}
                >
                  {distancia.popular && (
                    <div className="absolute top-2 right-3 bg-yellow text-slate px-3 py-1 rounded-full text-[10px] font-bold uppercase z-10">
                      Popular
                    </div>
                  )}
                  <p className="relative z-10 font-display font-bold text-6xl text-slate uppercase">
                    {distancia.distance}
                  </p>
                  <p className="relative z-10 font-display font-bold text-slate/60 text-sm uppercase tracking-wide mt-1">
                    {distancia.subtitle}
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-slate/60 text-sm leading-relaxed mb-5">
                    {distancia.description}
                  </p>
                  <div className="space-y-2.5 mb-6">
                    {distancia.features.map((feature, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-2.5 text-sm ${
                          feature.highlight
                            ? "text-slate font-bold"
                            : "text-slate/70"
                        }`}
                      >
                        {feature.highlight ? (
                          <StarIcon />
                        ) : (
                          <CheckIcon colorClass={colors.check} />
                        )}
                        {feature.text}
                      </div>
                    ))}
                  </div>
                  <div className="border-t-2 border-slate/10 pt-4">
                    <a
                      href="#inscripcion"
                      className={`inline-block px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wide transition-colors ${colors.btn}`}
                    >
                      Inscríbete
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
