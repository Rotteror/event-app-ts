import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Event } from "../models/index";

type state = {
  events: Event[];
};

const initialState: state = {
  events: [],
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setEvents(state, action: PayloadAction<Event[]>) {
      state.events = action.payload;
    },
  },
});

export const { setEvents } = eventSlice.actions;
export default eventSlice.reducer;
