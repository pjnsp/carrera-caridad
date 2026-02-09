import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import type { RaceConfig } from "./types";

let cached: RaceConfig | null = null;

export function loadConfig(): RaceConfig {
  if (cached) return cached;

  const filePath = path.join(process.cwd(), "config", "race.yaml");
  const raw = fs.readFileSync(filePath, "utf-8");
  const config = yaml.load(raw) as RaceConfig;

  cached = config;
  return config;
}
