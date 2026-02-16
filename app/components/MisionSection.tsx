import type { RegistrationConfig } from "../../config/types";
import MisionCards from "./MisionCards";

interface MisionSectionProps {
  registration: RegistrationConfig;
}

export default function MisionSection({ registration }: MisionSectionProps) {
  return (
    <section id="mision" className="py-28 bg-paper">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-2">
            <span className="section-num">01</span>
          </div>
          <div className="lg:col-span-5">
            <h2 className="font-impact text-4xl md:text-5xl uppercase text-ink leading-[0.95]">
              Más que una carrera, un acto de{" "}
              <span className="text-lime">amor</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-8 flex items-end">
            <p className="text-mute leading-relaxed">
              La <a href="https://www.pjnsp.com" target="_blank" className="text-lime">Pastoral Juvenil de Nuestra Señora de la Paz</a> organiza su primera
              carrera benéfica anual. El 100% de lo recaudado apoya a familias
              vulnerables de nuestra comunidad.
            </p>
          </div>
        </div>

        <MisionCards registration={registration} />
      </div>
    </section>
  );
}
