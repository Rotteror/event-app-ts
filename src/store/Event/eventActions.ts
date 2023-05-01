import {
  setCurrentEvent,
  setEvents,
  setSuggesedEvents,
  setFilteredEvents,
} from "./eventSlice";
import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../index";
import {
  getAllEvents,
  getSuggestedEvents,
  getEventDetail,
  fetchSearchedEvents,
} from "../../service/eventService";
import { TicketMasterResponse } from "../../models/api-models";

export const fetchAllEvents = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    if (getState().event.events.length === 0) {
      const { _embedded, _links, page }: TicketMasterResponse =
        await getAllEvents();
      dispatch(setEvents(_embedded.events));
    }
  };
};

export const fetchSuggestedEvenets = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    if (getState().event.suggestedEvents) {
      const data: any = await getSuggestedEvents();
      dispatch(setSuggesedEvents(data));
    }
  };
};

export const fetctEventDetail = (
  id: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, _) => {
    const data: any = await getEventDetail(id);
    dispatch(setCurrentEvent(data));
  };
};

export const fetchFilteredEvents = (
  keyword: string,
  category: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, _) => {
    const { _embedded, _links, page }: any = await fetchSearchedEvents(
      keyword,
      category
    );
    dispatch(setFilteredEvents(_embedded.events));
  };
};
