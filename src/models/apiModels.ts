import { Event } from ".";

export interface TicketMasterResponse {
  _embedded: Embedded;
  _links: Links;
  page: Page;
}

export interface Embedded {
  events: Event[];
}

export interface Links {
  first: Href;
  self: Href;
  next: Href;
  last: Href;
}

export interface Page {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
}

type Href = {
  href: string;
};
