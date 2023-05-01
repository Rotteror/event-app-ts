import axios from "axios";
import { API_KEY, URLS } from "../config";
import { TicketMasterResponse } from "../models/api-models";

export async function getAllEvents(): Promise<any> {
  const { data } = await axios({
    method: "GET",
    url: URLS.EVENTS,
  });

  return data as TicketMasterResponse;
}

export async function getSuggestedEvents(): Promise<any> {
  const { data } = await axios({
    method: "GET",
    url: URLS.SUGGEST,
  });

  //   import correct interface
  return data._embedded as any;
}

export async function getEventDetail(id: string): Promise<any> {
  const { data } = await axios({
    method: "GET",
    url: `${URLS.DETAIL}${id}.json${API_KEY}`,
  });

  return data as any;
}
export async function fetchSearchedEvents(
  keyword: string = "",
  category: string = ""
): Promise<any> {
  const { data } = await axios({
    method: "GET",
    url: URLS.EVENTS,
    params: {
      keyword: keyword,
      segmenName: category === "Others" ? "Miscellaneous" : category,
    },
  });

  return data as any;
}
