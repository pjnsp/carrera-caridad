import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-ink py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/pj.png"
                alt="Pastoral Juvenil NSP"
                width={28}
                height={28}
                className="rounded"
              />
              <span className="font-body font-bold text-white text-sm">
                Pastoral Juvenil
              </span>
            </div>
            <p className="text-white/30 text-sm leading-relaxed">
              Parroquia Nuestra Señora de la Paz. Construyendo comunidad a
              través del servicio.
            </p>
          </div>
          <div className="md:col-span-3 md:col-start-6">
            <p className="font-impact text-white/30 text-xs uppercase tracking-widest mb-4">
              Evento
            </p>
            <p className="text-white/20 text-sm">
              Domingo 15 de Marzo, 2026
            </p>
            <p className="text-white/20 text-sm">
              7:00 AM — Explanada NSP
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="font-impact text-white/30 text-xs uppercase tracking-widest mb-4">
              Contacto
            </p>
            <p className="text-white/20 text-sm">pastoraljuvenil@nsp.org</p>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <div className="w-6 h-[2px] bg-lime"></div>
          <div className="h-px flex-1 bg-white/10"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/15 text-xs">
            © 2026 Pastoral Juvenil NSP
          </p>
          <p className="text-white/10 text-xs">
            Hecho con amor para nuestra comunidad
          </p>
        </div>
      </div>
    </footer>
  );
}
