import { HttpStatusCode } from "axios";
import { Dayjs } from "dayjs";

export type MUIColors =
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning"
  | "inherit";

export type MUILoaderVariants = "determinate" | "indeterminate";

interface IAirlineData {
  id: number;
  name: string;
  icao: string;
  about: string;
  logoName: string;
  logoSmallName: string;
  locale: string;
  showOnSite: boolean;
  registrationTime: number;
  createdAt: number;
  updatedAt: number;
}

export interface IFlightData {
  ID: number;
  fltNo: string;
  "fltTypeID.code": string;
  "fltTypeID.name": string;
  "fltCatID.code": string;
  "fltCatID.name": string;
  "planeTypeID.code": string;
  "planeTypeID.IATA": string;
  "planeTypeID.name": string;
  planeNo: string;
  "airportToID.code": string;
  "airportToID.IATA": string;
  "airportToID.name": string;
  checkinNo: string;
  gateNo: string;
  term: string;
  "standID.code": string;
  "carrierID.code": string;
  "carrierID.IATA": string;
  timeDepShedule: string;
  timeBoard: string;
  timeDepExpectCalc: string;
  timeTakeofCalc: string;
  timeDepFact: string;
  timeTakeofFact: string;
  timeToStand: string;
  timeLandFact: string;
  "delayReasonID.code": string;
  "delayReasonID.name": string;
  psgCount: number;
  cargoCount: number;
  mailCount: number;
  bagCount: number;
  bagWeigth: number;
  "handlerID.code": string;
  "handlerID.name": string;
  actual: string;
  status: string;
  "airportToID.name_en": string;
  "airportToID.city": string;
  "airportToID.city_en": string;
  "airportFromID.city": string;
  "airportFromID.city_en": string;
  showOnSite: number;
  logo: string;
  airline: {
    en: IAirlineData;
    ua: IAirlineData;
  };
  codeShareData: [
    {
      icao: string;
      codeShare: string;
      logo: string;
      airline: {
        en: IAirlineData;
        ua: IAirlineData;
      };
    }
  ];
  delay: boolean;
}

export interface IFlightsData {
  body: {
    departure: IFlightData[];
    arrival: IFlightData[];
    error: {
      code: HttpStatusCode;
    };
  };
}

export interface IStore {
  flightsData: {
    departure: IFlightData[];
    arrival: IFlightData[];
  };
  isDataFetching: boolean;
  selectedDay: Dayjs;
  filterText: string;
  isSnackbarOpen: boolean;
}

export enum TabsIndex {
  Departure = 0,
  Arrival = 1,
}
