interface InscripcionSectionProps {
  registrationFormUrl: string;
  raceOver: boolean;
  raceOverMessage: string;
  registrationDeadline: string;
}

export default function InscripcionSection({
  registrationFormUrl,
  raceOver,
  raceOverMessage,
  registrationDeadline,
}: InscripcionSectionProps) {
  return (
    <section id="inscripcion" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-2">
            <span className="section-num">04</span>
          </div>
          <div className="lg:col-span-5">
            <h2 className="font-impact text-4xl md:text-5xl uppercase text-ink leading-[0.95]">
              Asegura tu <span className="text-accent">lugar</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-8 flex items-end">
            <p className="text-mute leading-relaxed">
              Inscríbete antes del{" "}
              <strong className="text-ink">{registrationDeadline}</strong>. Haz tu pre-registro en el siguiente formulario y pasa a la oficina parroquial para dejar tu aportación.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          {raceOver ? (
            <div className="border-2 border-ink p-8 md:p-12 text-center">
              <svg
                className="w-12 h-12 text-accent mx-auto mb-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h3 className="font-impact text-2xl uppercase text-ink mb-4">
                Inscripciones cerradas
              </h3>
              <p className="text-mute leading-relaxed">{raceOverMessage}</p>
            </div>
          ) : (
            <div className="border-2 border-ink p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-[10px] font-bold text-faint uppercase tracking-[0.2em]">
                  Inscripciones abiertas
                </span>
              </div>
              <h3 className="font-impact text-2xl uppercase text-ink mb-2">
                Formulario de Inscripción
              </h3>
              <p className="text-faint text-sm mb-8">
                Completa el formulario para reservar tu lugar en la carrera.
              </p>

              <iframe
                src={registrationFormUrl}
                className="w-full min-h-[1000px] border border-soft bg-paper"
                title="Formulario de inscripción"
              >
                Cargando…
              </iframe>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
