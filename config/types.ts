export interface TitleLine {
  text: string;
  faded: boolean;
}

export interface EventConfig {
  name: string;
  titleLines: TitleLine[];
  tagline: string;
  date: string;
  time: string;
  displayDate: string;
  displayTime: string;
  fullDate: string;
  maxCapacity: number;
  registrationDeadline: string;
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
  price: number;
  currency: string;
  description: string;
  popular: boolean;
  ctaText: string;
  features: DistanciaFeature[];
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
  raceOver: boolean;
  raceOverMessage: string;
  registrationFormUrl: string;
  location: LocationConfig;
  distancias: Distancia[];
  schedule: ScheduleItem[];
  contacts: Contact[];
  socialNetworks: SocialNetwork[];
}
