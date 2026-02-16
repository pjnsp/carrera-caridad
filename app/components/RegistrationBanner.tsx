"use client";

import type { RegistrationConfig } from "../../config/types";
import DespensaModal from "./DespensaModal";

interface RegistrationBannerProps {
  registration: RegistrationConfig;
}

export default function RegistrationBanner({ registration }: RegistrationBannerProps) {
  return (
    <div className="bg-lime text-ink py-6 px-6 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
        <p className="font-impact text-2xl md:text-3xl uppercase">
          Inscripción: ${registration.price} {registration.currency}
        </p>
        <span className="hidden sm:block w-px h-8 bg-ink/20"></span>
        <DespensaModal
          title={registration.despensaTitle}
          items={registration.despensaItems}
        >
          {(openModal) => (
            <button
              type="button"
              onClick={openModal}
              className="font-impact text-xl md:text-2xl uppercase opacity-80 hover:opacity-100 hover:underline hover:decoration-2 hover:underline-offset-4 transition-all cursor-pointer"
            >
              + traer despensa
            </button>
          )}
        </DespensaModal>
      </div>
    </div>
  );
}
