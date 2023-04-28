import axios from "axios";
import { URLS } from "../config";
import { TicketMasterResponse } from "../models/apiModels";

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

  return data._embedded as any;
}

// export async function getAllEvents(): Promise<any> {
//     return (
//       await axios.request<any>({
//         method: 'GET',
//         url: URLS.EVENTS
//       })
//     ).data
// }
