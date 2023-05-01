import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EventInterface } from "../../models/index";
import { Suggested, Attractions, Products, Venue } from "../../models/suggest";

type State = {
  events: EventInterface[];
  suggestedEvents: {
    attractions: Attractions[];
    products: Products[];
    venues: Venue[];
    events: EventInterface[];
  };
  currentEvent: EventInterface;
  filteredEvents: EventInterface[];
};

const initialState: State = {
  events: [],
  suggestedEvents: {
    attractions: [],
    products: [],
    venues: [],
    events: [],
  },
  currentEvent: {} as EventInterface,
  filteredEvents: [],
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setEvents(state, action: PayloadAction<EventInterface[]>) {
      state.events = action.payload;
    },

    setFilteredEvents(state, action: PayloadAction<EventInterface[]>) {
      state.filteredEvents = action.payload;
    },

    setSuggesedEvents({ suggestedEvents }, action: PayloadAction<Suggested>) {
      const { attractions, products, venues, events } = action.payload;
      suggestedEvents.attractions = attractions;
      suggestedEvents.events = events;
      suggestedEvents.venues = venues;
      suggestedEvents.products = products;
    },

    setCurrentEvent(state, action: PayloadAction<EventInterface>) {
      state.currentEvent = action.payload;
    },
  },
});

export const {
  setEvents,
  setSuggesedEvents,
  setCurrentEvent,
  setFilteredEvents,
} = eventSlice.actions;
export default eventSlice.reducer;
