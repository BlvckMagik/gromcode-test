import dayjs from "dayjs";
import { IStore } from "../types";
import { getItem, setItem } from "../utils";
import {
  FLIGHTS_RECEIVED,
  FLIGHTS_FETCHING,
  DATE_CHANGED,
  OPEN_SNACKBAR,
  CLOSE_SNACKBAR,
  TEXT_CHANGED,
} from "./flights.actions";

if (!getItem("date")) setItem("date", dayjs(new Date("11-01-2022")));

const initData: IStore = {
  flightsData: {
    departure: [],
    arrival: [],
  },
  isDataFetching: true,
  selectedDay: dayjs(new Date(getItem("date"))),
  filterText: "",
  isSnackbarOpen: false,
};

const usersReducer = (state: IStore = initData, action: any) => {
  switch (action.type) {
    case FLIGHTS_FETCHING:
      return {
        ...state,
        isDataFetching: true,
      };

    case FLIGHTS_RECEIVED:
      return {
        ...state,
        flightsData: {
          departure: action.payload.body.departure,
          arrival: action.payload.body.arrival,
        },
        isDataFetching: false,
      };

    case DATE_CHANGED:
      setItem("date", dayjs(new Date(action.payload)));

      return {
        ...state,
        selectedDay: action.payload,
      };

    case OPEN_SNACKBAR:
      return {
        ...state,
        isSnackbarOpen: true,
      };

    case CLOSE_SNACKBAR:
      return {
        ...state,
        isSnackbarOpen: false,
      };

    case TEXT_CHANGED:
      return {
        ...state,
        filterText: action.payload,
      };

    default:
      return state;
  }
};

export default usersReducer;
