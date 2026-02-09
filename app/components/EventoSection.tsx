import type { ScheduleItem, LocationConfig } from "../../config/types";

interface EventoSectionProps {
  schedule: ScheduleItem[];
  location: LocationConfig;
}

export default function EventoSection({ schedule, location }: EventoSectionProps) {
  return (
    <section id="evento" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-2">
            <span className="section-num">02</span>
          </div>
          <div className="lg:col-span-5">
            <h2 className="font-impact text-4xl md:text-5xl uppercase text-ink leading-[0.95]">
              El día del <span className="text-lime">evento</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-8 flex items-end">
            <p className="text-mute leading-relaxed">
              Llega temprano, calienta con nosotros y prepárate para dar lo
              mejor. Aquí tienes la agenda completa.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-0">
            {schedule.map((item, index) => {
              const isLast = index === schedule.length - 1;
              return (
                <div key={index} className="grid grid-cols-[80px_1fr] gap-6">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-full py-3 text-center font-impact text-sm uppercase ${
                        item.highlight
                          ? "bg-lime text-ink"
                          : "bg-ink text-white"
                      }`}
                    >
                      {item.time}
                    </div>
                    {!isLast && (
                      <div className="w-px flex-1 bg-soft min-h-[24px]"></div>
                    )}
                  </div>
                  <div className={isLast ? "" : "pb-8"}>
                    <p className="font-impact text-xl uppercase text-ink mb-1">
                      {item.title}
                    </p>
                    <p className="text-faint text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Location card */}
          <div className="mt-10 bg-ink p-6 flex items-start gap-4">
            <svg
              className="w-5 h-5 text-lime shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <div>
              <p className="text-white font-bold text-sm">{location.name}</p>
              <p className="text-white/40 text-sm mt-1">
                {location.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
