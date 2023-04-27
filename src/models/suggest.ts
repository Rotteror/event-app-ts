import { Classifications, Image, Dates, EventInterface } from "./index";

export interface Venue {
  name: string;
  type: string;
  id: string;
  url: string;
  locale: string;
  aliases: string[];
  images: Image[];
  timezone: string;
  city: {
    name: string;
  };
  state: {
    name: string;
    stateCode: string;
  };
  country: {
    name: string;
    countryCode: string;
  };
  address: {};
  location: {
    longitude: string;
    latitude: string;
  };
  upcomingEvents: {
    _total: number;
    ticketmaster: number;
    _filtered: number;
  };
  _links: {
    self: {
      href: string;
    };
  };
}

export interface Attractions {
  name: string;
  type: string;
  id: string;
  url: string; // Pur ticket s
  locale: string;
  externalLinks: any; // YouTube, Facebook etc
  images: Image[];
  classifications: Classifications[];
  upcomingEvents: {
    _total: 24;
    tmr: 18;
    ticketmaster: 6;
    _filtered: 0;
  };
  _links: {
    self: {
      href: string;
    };
  };
}

export interface Products {
  name: string;
  type: string;
  id: string;
  url: string;
  locale: string;
  images: Image[];
  dates: Dates;
  classifications: Classifications[];
  location: {
    longitude: string;
    latitude: string;
  };
  _links: any;
  attractions: any;
  venues: any;
}

export interface Suggested {
  attractions: Attractions[];
  events: EventInterface[];
  products: Products[];
  venues: Venue[];
}
