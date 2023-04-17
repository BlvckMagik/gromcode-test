import { flightsAxiosInstance } from "./instance";
import { IFlightsData } from "../types";
import dayjs, { Dayjs } from "dayjs";

export const getFlightsList = async (date: Dayjs) => {
  const query = dayjs(date).format("DD-MM-YYYY");
  return await flightsAxiosInstance.get<IFlightsData>(`/${query}`);
};
