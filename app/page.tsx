import { loadConfig } from "../config";
import RacePage from "./components/RacePage";

export default function Home() {
  const config = loadConfig();

  return <RacePage config={config} raceOver={config.raceOver} />;
}
