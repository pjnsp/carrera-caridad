import Image from "next/image";

interface NavProps {
  variant: "full" | "postRace";
}

export default function Nav({ variant }: NavProps) {
  const isPostRace = variant === "postRace";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-soft">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-14">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/pj.png"
            alt="Pastoral Juvenil NSP"
            width={28}
            height={28}
            className="rounded"
          />
          <span className="font-body font-bold text-sm tracking-tight">
            Pastoral Juvenil{" "}
            <span className="text-faint">/</span>{" "}
            <span className="text-mute">NSP</span>
          </span>
        </a>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6 text-xs font-semibold text-faint">
            <a href="#mision" className="hover:text-ink transition-colors">
              01 Misión
            </a>
            {isPostRace ? (
              <a href="#ayuda" className="hover:text-ink transition-colors">
                02 Ayuda
              </a>
            ) : (
              <>
                <a href="#evento" className="hover:text-ink transition-colors">
                  02 Evento
                </a>
                <a href="#distancias" className="hover:text-ink transition-colors">
                  03 Distancias
                </a>
                <a href="#inscripcion" className="hover:text-ink transition-colors">
                  04 Inscripción
                </a>
                <a href="#ayuda" className="hover:text-ink transition-colors">
                  ¿? Ayuda
                </a>
              </>
            )}
          </div>
          {!isPostRace ? (
            <a
              href="#inscripcion"
              className="bg-accent text-ink px-5 py-2 rounded-md font-bold text-xs uppercase tracking-wider hover:bg-ink hover:text-accent transition-colors"
            >
              Inscríbete
            </a>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
