export default function InscripcionSection() {
  return (
    <section id="inscripcion" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-2">
            <span className="section-num">04</span>
          </div>
          <div className="lg:col-span-5">
            <h2 className="font-impact text-4xl md:text-5xl uppercase text-ink leading-[0.95]">
              Asegura tu <span className="text-lime">lugar</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-8 flex items-end">
            <p className="text-mute leading-relaxed">
              Inscríbete antes del{" "}
              <strong className="text-ink">10 de marzo</strong>. Los cupos son
              limitados y se agotan rápido.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="border-2 border-ink p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 bg-lime rounded-full animate-pulse"></div>
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

            <div className="bg-paper border border-soft min-h-[400px] flex items-center justify-center">
              <div className="text-center px-6">
                <svg
                  className="w-8 h-8 text-ink/10 mx-auto mb-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
                <p className="text-ink/20 text-sm font-medium">
                  Google Form o formulario custom
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-faint mt-8">
            ¿Preguntas?{" "}
            <a
              href="#"
              className="text-ink font-semibold underline underline-offset-4 decoration-lime hover:text-lime transition-colors"
            >
              pastoraljuvenil@nsp.org
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
