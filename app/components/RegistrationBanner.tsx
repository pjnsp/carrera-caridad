import type { RegistrationConfig } from "../../config/types";

interface RegistrationBannerProps {
  registration: RegistrationConfig;
}

export default function RegistrationBanner({ registration }: RegistrationBannerProps) {
  return (
    <div className="bg-lime text-ink py-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
        <p className="font-impact text-2xl md:text-3xl uppercase">
          Inscripción: ${registration.price} {registration.currency}
        </p>
        <span className="hidden sm:block w-px h-8 bg-ink/20"></span>
        <p className="font-impact text-xl md:text-2xl uppercase opacity-80">
          + {registration.donationItem}
        </p>
      </div>
    </div>
  );
}
