import Nav from "./components/Nav";
import Hero from "./components/Hero";
import MisionSection from "./components/MisionSection";
import EventoSection from "./components/EventoSection";
import DistanciasSection from "./components/DistanciasSection";
import InscripcionSection from "./components/InscripcionSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-white">
      <Nav />
      <Hero />
      <MisionSection />
      <EventoSection />
      <DistanciasSection />
      <InscripcionSection />
      <Footer />
    </div>
  );
}
