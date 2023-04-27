export interface EventInterface {
  name: string;
  type: string;
  id: string;
  test: boolean;
  url: string;
  locale: string;
  images: Image[];
  sales: PublicSale & PreSale[];
  dates: Dates;
  classifications: Classifications[];
  promoter: Promoter;
  promoters: Promoter[];
  info: string;
  pleaseNote: string;
  priceRanges: PriceRange[];
  seatmap: SeatMap;
  accessibility: Accessibility;
  ticketLimit: TicketLimit;
  ageRestrictions: AgeRestrictions;
  ticketing: Ticketing;
  _links: Links;
  _embedded: any;
}

export interface Links {
  self: Self;
  attractions: Attractions;
  venues: Venues;
}
export interface Self {
  href: boolean;
}
export interface Attractions {
  href: string;
}
export interface Venues {
  href: string;
}

export interface Ticketing {
  safeTix: {
    enabled: boolean;
  };
}

export interface AgeRestrictions {
  legalAgeEnforced: boolean;
}

export interface TicketLimit {
  info: string;
}

export interface Accessibility {
  ticketLimit: number;
}

export interface SeatMap {
  staticUrl: string;
}

export interface PriceRange {
  type: string;
  currency: string;
  min: number;
  max: number;
}

export interface Promoter {
  id: string;
  name: string;
  description: string;
}

export interface Classifications {
  primary: boolean;
  segment: Segment;
  genre: Genre;
  subGenre: SubGenre;
  type: Type;
  subType: SubType;
  family: boolean;
}

export interface Segment {
  id: string;
  name: string;
}
export interface Genre {
  id: string;
  name: string;
}
export interface SubGenre {
  id: string;
  name: string;
}
export interface Type {
  id: string;
  name: string;
}

export interface SubType {
  id: string;
  name: string;
}

export interface Image {
  ratio: string;
  url: string;
  width: number;
  height: number;
  fallback: boolean;
}

export interface PublicSale {
  startDateTime: string | Date;
  startTBD: boolean;
  startTBA: boolean;
  endDateTime: string | Date;
}

export interface PreSale {
  startDateTime: string | Date;
  endDateTime: string | Date;
  name: string;
}

export interface StartDate {
  localDate: string | Date;
  dateTBD: boolean;
  dateTBA: boolean;
  timeTBA: boolean;
  noSpecificTime: boolean;
}

export interface Status {
  code: string;
}

export interface Dates {
  start: StartDate;
  timezone: string;
  status: Status;
  spanMultipleDays: boolean;
}
