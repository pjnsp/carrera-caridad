import { loadConfig } from "../../config";
import AltNav from "./components/AltNav";
import AltHero from "./components/AltHero";
import AltDespensaSection from "./components/AltDespensaSection";
import AltCategoriasSection from "./components/AltCategoriasSection";
import AltRecorridosSection from "./components/AltRecorridosSection";
import AltRegistroSection from "./components/AltRegistroSection";
import AltInscripcionSection from "./components/AltInscripcionSection";
import AltContactoSection from "./components/AltContactoSection";
import AltFooter from "./components/AltFooter";

export default function PreviewPage() {
  const config = loadConfig();

  return (
    <>
      <AltNav raceOver={config.raceOver} />
      <AltHero
        event={config.event}
        distancias={config.distancias}
        raceOver={config.raceOver}
        registrationPrice={config.registration.price}
        registrationCurrency={config.registration.currency}
      />
      <AltDespensaSection
        event={config.event}
        location={config.location}
        registration={config.registration}
      />
      <AltCategoriasSection distancias={config.distancias} />
      <AltRecorridosSection distancias={config.distancias} />
      <AltRegistroSection schedule={config.schedule} />
      <AltInscripcionSection
        registrationFormUrl={config.registrationFormUrl}
        raceOver={config.raceOver}
        raceOverMessage={config.raceOverMessage}
        registrationDeadline={config.event.registrationDeadline}
      />
      <AltContactoSection
        contacts={config.contacts}
        socialNetworks={config.socialNetworks}
      />
      <AltFooter location={config.location} />
    </>
  );
}
