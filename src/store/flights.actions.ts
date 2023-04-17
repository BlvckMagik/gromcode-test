import { AnyAction, Dispatch } from "redux";
import { getFlightsList } from "../gateway/flightsGateway";
import { IFlightsData } from "../types";
import { Dayjs } from "dayjs";

export const FLIGHTS_RECEIVED = "FLIGHTS_RECEIVED";
export const FLIGHTS_FETCHING = "FLIGHTS_FETCHING";
export const DATE_CHANGED = "DATE_CHANGED";
export const OPEN_SNACKBAR = "OPEN_SNACKBAR";
export const CLOSE_SNACKBAR = "CLOSE_SNACKBAR";
export const TEXT_CHANGED = "TEXT_CHANGED";

export const flightsReceived = (flightsData: IFlightsData) => {
  return {
    type: FLIGHTS_RECEIVED,
    payload: flightsData,
  };
};

export const changeDate = (newDate: Dayjs) => {
  return {
    type: DATE_CHANGED,
    payload: newDate,
  };
};

export const openSnackbar = () => {
  return {
    type: OPEN_SNACKBAR,
  };
};

export const closeSnackbar = () => {
  return {
    type: CLOSE_SNACKBAR,
  };
};

export const flightsFetching = () => {
  return {
    type: FLIGHTS_FETCHING,
  };
};

export const changeFilterText = (newValue: string) => {
  return {
    type: TEXT_CHANGED,
    payload: newValue,
  };
};

export const getFlights = (params: Dayjs) => {
  return function (dispatch: Dispatch<AnyAction>) {
    dispatch(flightsFetching());
    getFlightsList(params)
      .then((response) => dispatch(flightsReceived(response.data)))
      .catch((err) => {
        dispatch(openSnackbar());
        throw new Error(err);
      });
  };
};
