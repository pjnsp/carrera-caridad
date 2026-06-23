import type { Metadata } from "next";
import { loadConfig } from "../../config";
import RacePage from "../components/RacePage";

export const metadata: Metadata = {
  title: "Demo — Carrera por la Caridad",
  robots: { index: false, follow: false },
};

export default function DemoPage() {
  const config = loadConfig();

  return <RacePage config={config} raceOver={false} />;
}
