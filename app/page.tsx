import { loadConfig } from "../config";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import PostRaceBanner from "./components/PostRaceBanner";
import RegistrationBanner from "./components/RegistrationBanner";
import MisionSection from "./components/MisionSection";
import EventoSection from "./components/EventoSection";
import DistanciasSection from "./components/DistanciasSection";
import InscripcionSection from "./components/InscripcionSection";
import AyudaSection from "./components/AyudaSection";
import Footer from "./components/Footer";

export default function Home() {
  const config = loadConfig();
  const navVariant = config.raceOver ? "postRace" : "full";

  return (
    <div className="bg-white">
      <Nav variant={navVariant} />
      <Hero
        event={config.event}
        distancias={config.distancias}
        raceOver={config.raceOver}
      />

      {config.raceOver ? (
        <PostRaceBanner
          title={config.raceOverBannerTitle}
          message={config.raceOverMessage}
        />
      ) : (
        <RegistrationBanner registration={config.registration} />
      )}

      <MisionSection registration={config.registration} />
      {!config.raceOver ? (
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
