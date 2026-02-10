interface AltInscripcionSectionProps {
  registrationFormUrl: string;
  raceOver: boolean;
  raceOverMessage: string;
  registrationDeadline: string;
}

export default function AltInscripcionSection({
  registrationFormUrl,
  raceOver,
  raceOverMessage,
  registrationDeadline,
}: AltInscripcionSectionProps) {
  return (
    <section id="inscripcion" className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-5">
        <div className="green-frame bg-cream p-6 md:p-10 text-center">
          {raceOver ? (
            <>
              <h2 className="font-display font-bold text-2xl md:text-4xl text-slate uppercase mb-4">
                Inscripciones Cerradas
              </h2>
              <p className="text-slate/60 text-base leading-relaxed">
                {raceOverMessage}
              </p>
            </>
          ) : (
            <>
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="w-2.5 h-2.5 bg-sage rounded-full animate-pulse"></div>
                <span className="text-[11px] font-bold text-slate/50 uppercase tracking-wider">
                  Inscripciones abiertas
                </span>
              </div>
              <h2 className="font-display font-bold text-2xl md:text-4xl text-slate uppercase mb-2">
                Formulario de Inscripción
              </h2>
              <p className="text-slate/60 text-sm mb-2">
                Completa el formulario para reservar tu lugar en la carrera.
              </p>
              <p className="text-slate/50 text-xs mb-8">
                Inscríbete antes del{" "}
                <strong className="text-forest">{registrationDeadline}</strong>.
              </p>

              <iframe
                src={registrationFormUrl}
                className="w-full min-h-[1000px] border-2 border-dashed border-forest/20 rounded-xl bg-forest/5"
                title="Formulario de inscripción"
              >
                Cargando…
              </iframe>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
