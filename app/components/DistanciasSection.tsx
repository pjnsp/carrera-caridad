import Image from "next/image";
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
    <svg className="w-4 h-4 text-accent" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg
      className="w-5 h-5 text-faint"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
      />
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
              Elige tu <span className="text-accent">distancia</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-8 flex items-end">
            <p className="text-mute leading-relaxed">
              Todas las rutas parten de la explanada, son planas y aptas para todas
              las edades. Elige la que va contigo.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          {distancias.map((distancia) => (
            <div
              key={distancia.id}
              className={`bg-white hover-up group ${
                distancia.popular ? "ring-2 ring-accent" : ""
              }`}
            >
              {/* Card header */}
              <div className="bg-ink p-8 relative overflow-hidden">
                {distancia.popular && (
                  <div className="absolute top-0 right-0 bg-accent text-ink px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest">
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
                        ? "border-accent/40 text-accent"
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

              {/* Card body: two-column on desktop, stacked on mobile */}
              <div className="grid md:grid-cols-2">
                {/* Left: description + features + CTA */}
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
                  <div className="border-t border-soft pt-6">
                    <a
                      href="#inscripcion"
                      className={`inline-block px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors ${
                        distancia.popular
                          ? "bg-accent text-ink hover:bg-ink hover:text-accent"
                          : "bg-ink text-white hover:bg-accent hover:text-ink"
                      }`}
                    >
                      Inscríbete
                    </a>
                  </div>
                </div>

                {/* Right: map image + route description */}
                <div className="p-8 md:border-l border-t md:border-t-0 border-soft flex flex-col">
                  {distancia.mapUrl ? (
                    <a
                      href={distancia.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-full aspect-[3/2] bg-paper mb-4 overflow-hidden block group/map"
                    >
                      <Image
                        src={distancia.mapImage}
                        alt={`Mapa de ruta ${distancia.distance}`}
                        fill
                        className="object-cover transition-transform group-hover/map:scale-105"
                      />
                      <span className="absolute inset-0 bg-ink/0 group-hover/map:bg-ink/10 transition-colors flex items-center justify-center">
                        <span className="opacity-0 group-hover/map:opacity-100 transition-opacity bg-ink/70 text-white text-xs font-bold uppercase tracking-wider px-4 py-2">
                          Ver mapa completo
                        </span>
                      </span>
                    </a>
                  ) : (
                    <div className="relative w-full aspect-[3/2] bg-paper mb-4 overflow-hidden">
                      <Image
                        src={distancia.mapImage}
                        alt={`Mapa de ruta ${distancia.distance}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 mt-0.5">
                      <MapIcon />
                    </div>
                    <p className="text-faint text-sm leading-relaxed">
                      {distancia.routeDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
