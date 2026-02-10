import type { ScheduleItem } from "../../../config/types";

interface AltRegistroSectionProps {
  schedule: ScheduleItem[];
}

export default function AltRegistroSection({
  schedule,
}: AltRegistroSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-forest/5">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-slate uppercase mb-3">
            Registro
          </h2>
          <p className="text-slate/60 text-base md:text-lg max-w-xl mx-auto">
            Pre-regístrate en línea o visita la oficina parroquial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Online */}
          <div className="bg-cream rounded-2xl p-8 shadow-md text-center">
            <div className="w-14 h-14 bg-yellow/30 textured relative rounded-xl mx-auto mb-5 flex items-center justify-center">
              <svg
                className="relative z-10 w-7 h-7 text-slate/70"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
            </div>
            <h3 className="font-display font-bold text-xl text-slate uppercase mb-2">
              Pre-Registro en Línea
            </h3>
            <p className="text-slate/60 text-sm mb-5">
              Llena el formulario y asegura tu lugar desde casa.
            </p>
            <a
              href="#inscripcion"
              className="inline-block bg-forest text-cream px-6 py-3 rounded-full font-display font-bold text-sm hover:scale-105 transition-all"
            >
              Ir al formulario
            </a>
          </div>

          {/* In person */}
          <div className="bg-cream rounded-2xl p-8 shadow-md text-center">
            <div className="w-14 h-14 bg-sage/30 textured relative rounded-xl mx-auto mb-5 flex items-center justify-center">
              <svg
                className="relative z-10 w-7 h-7 text-slate/70"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H18"
                />
              </svg>
            </div>
            <h3 className="font-display font-bold text-xl text-slate uppercase mb-2">
              Oficina Parroquial
            </h3>
            <p className="text-slate/60 text-sm mb-5">
              Visítanos en persona para inscribirte y entregar tu despensa.
            </p>

            <div className="space-y-3 text-left">
              {schedule.length > 0 && (
                <>
                  <div className="bg-sky/15 textured relative rounded-xl p-4">
                    <div className="relative z-10">
                      <p className="font-display font-bold text-slate text-sm">
                        Lunes a Sábado
                      </p>
                      <p className="text-slate/60 text-sm">
                        9:00 AM — 7:00 PM
                      </p>
                    </div>
                  </div>
                  <div className="bg-coral/15 textured relative rounded-xl p-4">
                    <div className="relative z-10">
                      <p className="font-display font-bold text-slate text-sm">
                        Domingos
                      </p>
                      <p className="text-slate/60 text-sm">
                        9:00 AM — 3:00 PM
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
