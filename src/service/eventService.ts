import axios from "axios";
import { BASE_URL } from "../config";
import { TicketMasterResponse } from "../models/apiModels";

export async function getAllEvents(): Promise<any> {
  const { data } = await axios({
    method: "GET",
    url: BASE_URL,
  });

  //To DO add types
  return data as TicketMasterResponse;
}

// export async function getAllEvents(): Promise<any> {
//     return (
//       await axios.request<any>({
//         method: 'GET',
//         url: BASE_URL
//       })
//     ).data
// }
