import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";
import { EventInterface } from "../../models/index";
import { Suggested, Attractions, Products, Venue } from "../../models/suggest";
import {fetchAllEvents, fetchSuggestedEvenets, fetctEventDetail, fetchFilteredEvents} from './eventActions'

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
  status: string
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
  status:'idle'
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllEvents.fulfilled, (state, action ) => {
        state.events = action.payload?._embedded.events || [];
        state.status = 'success'
        return state
      })
      .addCase(fetchAllEvents.pending, (state, action ) => {
        state.status = 'loading'
      })
      .addCase(fetchAllEvents.rejected, (state) => {
        state.status = "failed";
      })
  },
});

export const {
  setEvents,
  setSuggesedEvents,
  setCurrentEvent,
  setFilteredEvents,
} = eventSlice.actions;
export default eventSlice.reducer;
