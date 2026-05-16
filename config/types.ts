export interface TitleLine {
  text: string;
  faded: boolean;
}

export interface EventConfig {
  name: string;
  titleLines: TitleLine[];
  tagline: string;
  invitation: string;
  date: string;
  time: string;
  displayDate: string;
  displayTime: string;
  fullDate: string;
  maxCapacity: number;
  registrationDeadline: string;
}

export interface RegistrationConfig {
  price: number;
  currency: string;
  playeraImage: string;
  playeraImageAlt: string;
  medallaImage: string;
  medallaImageAlt: string;
  despensaTitle: string;
  despensaItems: string[];
}

export interface LocationConfig {
  name: string;
  description: string;
  mapsUrl?: string;
}

export interface DistanciaFeature {
  text: string;
  highlight: boolean;
}

export interface Distancia {
  id: string;
  name: string;
  subtitle: string;
  distance: string;
  description: string;
  routeDescription: string;
  mapImage: string;
  mapUrl?: string;
  popular: boolean;
  features: DistanciaFeature[];
}

export interface PreScheduleItem {
  date: string;
  time: string;
  description: string;
}

export interface PreScheduleConfig {
  tagline: string;
  items: PreScheduleItem[];
}

export interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  highlight: boolean;
}

export interface Contact {
  name?: string;
  email?: string;
  phone?: string;
}

export interface SocialNetwork {
  platform: string;
  url: string;
  label: string;
}

export interface RaceConfig {
  event: EventConfig;
  /** When true: minimal thank-you page (hero sans CTA, post-race banner, misión, ayuda, footer only). */
  raceOver: boolean;
  /** Large headline in the accent stripe when raceOver (e.g. Gracias). */
  raceOverBannerTitle: string;
  /** Optional smaller line under the banner title when raceOver. */
  raceOverMessage: string;
  registrationFormUrl: string;
  registration: RegistrationConfig;
  location: LocationConfig;
  distancias: Distancia[];
  preSchedule: PreScheduleConfig;
  schedule: ScheduleItem[];
  contacts: Contact[];
  socialNetworks: SocialNetwork[];
}
