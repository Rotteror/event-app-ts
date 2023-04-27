import axios from "axios";
import { BASE_URL, URL_SUGGEST } from "../config";
import { TicketMasterResponse } from "../models/apiModels";

export async function getAllEvents(): Promise<any> {
  const { data } = await axios({
    method: "GET",
    url: BASE_URL,
  });

  return data as TicketMasterResponse;
}

export async function getSuggestedEvents(): Promise<any> {
  const { data } = await axios({
    method: "GET",
    url: URL_SUGGEST,
  });

  return data._embedded as any;
}

// export async function getAllEvents(): Promise<any> {
//     return (
//       await axios.request<any>({
//         method: 'GET',
//         url: BASE_URL
//       })
//     ).data
// }
