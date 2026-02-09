import type { Distancia } from "../../config/types";

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-ink/30"
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
    <svg className="w-4 h-4 text-lime" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" />
    </svg>
  );
}

interface DistanciasSectionProps {
  distancias: Distancia[];
}

export default function DistanciasSection({ distancias }: DistanciasSectionProps) {
  return (
    <section id="distancias" className="py-28 bg-paper">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-2">
            <span className="section-num">03</span>
          </div>
          <div className="lg:col-span-5">
            <h2 className="font-impact text-4xl md:text-5xl uppercase text-ink leading-[0.95]">
              Elige tu <span className="text-lime">distancia</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-8 flex items-end">
            <p className="text-mute leading-relaxed">
              Ambas rutas parten de la explanada, son planas y aptas para todas
              las edades. Elige la que va contigo.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {distancias.map((distancia) => (
            <div
              key={distancia.id}
              className={`bg-white hover-up group ${
                distancia.popular ? "ring-2 ring-lime" : ""
              }`}
            >
              <div className="bg-ink p-8 relative overflow-hidden">
                {distancia.popular && (
                  <div className="absolute top-0 right-0 bg-lime text-ink px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest">
                    Más Popular
                  </div>
                )}
                <span className="absolute -right-2 -top-4 font-impact text-[8rem] leading-none text-white/5 select-none">
                  {distancia.distance}
                </span>
                <div className="relative">
                  <span
                    className={`inline-block px-3 py-1 border text-[10px] font-bold uppercase tracking-widest mb-4 ${
                      distancia.popular
                        ? "border-lime/40 text-lime"
                        : "border-white/20 text-white"
                    }`}
                  >
                    {distancia.subtitle}
                  </span>
                  <h3 className="font-impact text-5xl text-white uppercase">
                    {distancia.name}
                  </h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-mute text-sm leading-relaxed mb-8">
                  {distancia.description}
                </p>
                <div className="space-y-3 mb-8">
                  {distancia.features.map((feature, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-3 text-sm ${
                        feature.highlight
                          ? "text-ink font-semibold"
                          : "text-ink/60"
                      }`}
                    >
                      {feature.highlight ? <StarIcon /> : <CheckIcon />}
                      {feature.text}
                    </div>
                  ))}
                </div>
                <div className="border-t border-soft pt-6 flex items-end justify-between">
                  <p className="font-impact text-4xl text-ink uppercase">
                    ${distancia.price}{" "}
                    <span className="text-lg text-faint">{distancia.currency}</span>
                  </p>
                  <a
                    href="#inscripcion"
                    className={`px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors ${
                      distancia.popular
                        ? "bg-lime text-ink hover:bg-ink hover:text-lime"
                        : "bg-ink text-white hover:bg-lime hover:text-ink"
                    }`}
                  >
                    {distancia.ctaText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
