import Image from "next/image";
import type { Distancia } from "../../../config/types";

interface AltRecorridosSectionProps {
  distancias: Distancia[];
}

const distanceBgColor: Record<string, string> = {
  "3K": "bg-sky",
  "5K": "bg-coral",
  "10K": "bg-sage",
};

const distanceTimeBg: Record<string, string> = {
  "3K": "bg-sky/15",
  "5K": "bg-coral/15",
  "10K": "bg-sage/15",
};

const estimatedTime: Record<string, string> = {
  "3K": "~30 min",
  "5K": "~45 min",
  "10K": "~1 hr",
};

export default function AltRecorridosSection({
  distancias,
}: AltRecorridosSectionProps) {
  return (
    <section id="recorridos" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-slate uppercase mb-3">
            Recorridos
          </h2>
          <p className="text-slate/60 text-base md:text-lg max-w-lg mx-auto">
            Todas las rutas parten de la Parroquia Nuestra Señora de la Paz,
            Pradera Dorada.
          </p>
        </div>

        <div className="space-y-5">
          {distancias.map((distancia) => {
            const bgColor = distanceBgColor[distancia.distance] ?? "bg-sky";
            const timeBg = distanceTimeBg[distancia.distance] ?? "bg-sky/15";
            const time = estimatedTime[distancia.distance] ?? "—";

            return (
              <div
                key={distancia.id}
                className="green-frame bg-cream p-5 md:p-8 overflow-hidden"
              >
                <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                  <div
                    className={`w-20 h-20 ${bgColor} textured relative rounded-2xl flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="relative z-10 font-display font-bold text-3xl text-slate">
                      {distancia.distance}
                    </span>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="font-display font-bold text-xl text-slate uppercase mb-1">
                      {distancia.subtitle}
                    </h3>
                    <p className="text-slate/60 text-sm leading-relaxed">
                      {distancia.routeDescription}
                    </p>
                  </div>
                  <div
                    className={`flex-shrink-0 ${timeBg} rounded-xl px-5 py-3 text-center`}
                  >
                    <svg
                      className="w-5 h-5 text-slate/40 mx-auto mb-1"
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
                    <p className="font-display font-bold text-slate text-sm">
                      {time}
                    </p>
                  </div>
                </div>

                {/* Map image */}
                {distancia.mapUrl ? (
                  <a
                    href={distancia.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-full aspect-[3/1] rounded-xl overflow-hidden block group/map"
                  >
                    <Image
                      src={distancia.mapImage}
                      alt={`Mapa de ruta ${distancia.distance}`}
                      fill
                      className="object-cover transition-transform group-hover/map:scale-105"
                    />
                    <span className="absolute inset-0 bg-slate/0 group-hover/map:bg-slate/10 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover/map:opacity-100 transition-opacity bg-forest/80 text-cream text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full">
                        Ver mapa completo
                      </span>
                    </span>
                  </a>
                ) : (
                  <div className="relative w-full aspect-[3/1] rounded-xl overflow-hidden">
                    <Image
                      src={distancia.mapImage}
                      alt={`Mapa de ruta ${distancia.distance}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
