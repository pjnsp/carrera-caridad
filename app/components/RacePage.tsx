import type { RaceConfig } from "@/config/types";
import Nav from "./Nav";
import Hero from "./Hero";
import PostRaceBanner from "./PostRaceBanner";
import RegistrationBanner from "./RegistrationBanner";
import MisionSection from "./MisionSection";
import EventoSection from "./EventoSection";
import DistanciasSection from "./DistanciasSection";
import InscripcionSection from "./InscripcionSection";
import AyudaSection from "./AyudaSection";
import Footer from "./Footer";

interface RacePageProps {
  config: RaceConfig;
  raceOver: boolean;
}

export default function RacePage({ config, raceOver }: RacePageProps) {
  const navVariant = raceOver ? "postRace" : "full";

  return (
    <div className="bg-white">
      <Nav variant={navVariant} />
      <Hero
        event={config.event}
        distancias={config.distancias}
        raceOver={raceOver}
      />

      {raceOver ? (
        <PostRaceBanner
          title={config.raceOverBannerTitle}
          message={config.raceOverMessage}
        />
      ) : (
        <RegistrationBanner registration={config.registration} />
      )}

      <MisionSection registration={config.registration} />
      {!raceOver ? (
        <>
          <EventoSection
            preSchedule={config.preSchedule}
            schedule={config.schedule}
            location={config.location}
          />
          <DistanciasSection distancias={config.distancias} />
          <InscripcionSection
            registrationFormUrl={config.registrationFormUrl}
            raceOver={false}
            raceOverMessage={config.raceOverMessage}
            registrationDeadline={config.event.registrationDeadline}
          />
        </>
      ) : null}
      <AyudaSection
        contacts={config.contacts}
        socialNetworks={config.socialNetworks}
      />
      <Footer
        event={config.event}
        location={config.location}
        contacts={config.contacts}
        socialNetworks={config.socialNetworks}
      />
    </div>
  );
}
