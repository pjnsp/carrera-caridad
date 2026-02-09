import { loadConfig } from "../config";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import RegistrationBanner from "./components/RegistrationBanner";
import MisionSection from "./components/MisionSection";
import EventoSection from "./components/EventoSection";
import DistanciasSection from "./components/DistanciasSection";
import InscripcionSection from "./components/InscripcionSection";
import AyudaSection from "./components/AyudaSection";
import Footer from "./components/Footer";

export default function Home() {
  const config = loadConfig();

  return (
    <div className="bg-white">
      <Nav raceOver={config.raceOver} />
      <Hero
        event={config.event}
        distancias={config.distancias}
        raceOver={config.raceOver}
      />

      {config.raceOver ? (
        <div className="bg-lime text-ink py-6 px-6 text-center">
          <p className="font-impact text-2xl md:text-3xl uppercase">
            {config.raceOverMessage}
          </p>
        </div>
      ) : (
        <RegistrationBanner registration={config.registration} />
      )}

      <MisionSection />
      <EventoSection
        schedule={config.schedule}
        location={config.location}
      />
      <DistanciasSection distancias={config.distancias} />
      <InscripcionSection
        registrationFormUrl={config.registrationFormUrl}
        raceOver={config.raceOver}
        raceOverMessage={config.raceOverMessage}
        registrationDeadline={config.event.registrationDeadline}
      />
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
