import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

export const flightsAxiosInstance = axios.create({
  baseURL,
  timeout: 5000,
  withCredentials: false,
  headers: { "Content-Type": "application/json" },
});
