import Image from "next/image";
import type { LocationConfig } from "../../../config/types";

interface AltFooterProps {
  location: LocationConfig;
}

export default function AltFooter({ location }: AltFooterProps) {
  return (
    <footer className="bg-forest py-12">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-3">
            <Image
              src="/pj.png"
              alt="Pastoral Juvenil NSP"
              width={28}
              height={28}
              className="rounded"
            />
            <span className="font-display font-bold text-cream/80 text-sm">
              Pastoral Juvenil{" "}
              <span className="text-faint">/</span>{" "}
              <span className="text-cream">NSP</span>
            </span>
          </div>
          <p className="text-cream/30 text-sm">{location.description}</p>
        </div>
        <div className="h-px bg-cream/10 mb-6"></div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-cream/20 text-xs">
            &copy; {new Date().getFullYear()} Pastoral Juvenil — Parroquia NSP
          </p>
          <p className="text-cream/25 text-xs">
            Hecho con amor por <a href="https://diogneto-labs.pjnsp.com" target="_blank" rel="noopener noreferrer" className="hover:text-lime text-white/50 transition-colors underline underline-offset-4">Diogneto</a> para nuestra comunidad
          </p>
        </div>
      </div>
    </footer>
  );
}
