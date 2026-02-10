import Image from "next/image";

interface AltNavProps {
  raceOver: boolean;
}

export default function AltNav({ raceOver }: AltNavProps) {
  return (
    <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b-2 border-forest/20">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 h-16">
        <a href="#" className="flex items-center gap-2.5">
        <Image
            src="/pj.png"
            alt="Pastoral Juvenil NSP"
            width={28}
            height={28}
            className="rounded"
          />
          <span className="font-display font-bold text-forest text-sm hidden sm:inline">
            Pastoral Juvenil{" "}
            <span className="text-faint">/</span>{" "}
            <span className="text-mute">NSP</span>
          </span>
        </a>
        <div className="flex items-center gap-5">
          <div className="hidden md:flex items-center gap-5 text-sm font-bold text-slate/60">
            <a
              href="#evento"
              className="hover:text-forest transition-colors"
            >
              Evento
            </a>
            <a
              href="#categorias"
              className="hover:text-forest transition-colors"
            >
              Categorías
            </a>
            <a
              href="#recorridos"
              className="hover:text-forest transition-colors"
            >
              Recorridos
            </a>
            {!raceOver && (
              <a
                href="#inscripcion"
                className="hover:text-forest transition-colors"
              >
                Inscripción
              </a>
            )}
          </div>
          {!raceOver && (
            <a
              href="#inscripcion"
              className="bg-yellow text-slate px-5 py-2.5 rounded-full font-display font-bold text-sm shadow-md hover:shadow-lg hover:scale-105 transition-all"
            >
              Inscríbete
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}
