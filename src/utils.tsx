import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { IFlightData, TabsIndex } from "./types";
import dayjs from "dayjs";

export const getColumnsData = (
  type: number,
  t: any,
  i18n: any
): GridColDef[] => [
  {
    field: "term",
    headerName: t("terminal"),
    align: "center",
    headerAlign: "center",
    disableColumnMenu: true,
    minWidth: 80,
    maxWidth: 120,

    flex: 1,
  },
  {
    field: type === TabsIndex.Departure ? "timeDepShedule" : "timeArrShedule",
    headerName: t("local time"),
    valueGetter: (params: GridValueGetterParams) =>
      formatDate(
        type === TabsIndex.Departure
          ? params.row.timeDepShedule
          : params.row.timeArrShedule,
        "HH:mm"
      ),
    align: "center",
    headerAlign: "center",
    disableColumnMenu: true,
    minWidth: 120,
    maxWidth: 140,
    flex: 1,
  },
  {
    field:
      type === TabsIndex.Departure
        ? i18n.language === "ua"
          ? "airportToID.city"
          : "airportToID.city_en"
        : i18n.language === "ua"
        ? "airportFromID.city"
        : "airportFromID.city_en",
    headerName:
      type === TabsIndex.Departure
        ? t("destination(departure)")
        : t("destination(arrival)"),
    align: "center",
    headerAlign: "center",
    disableColumnMenu: true,
    minWidth: 120,
    flex: 1,
  },
  {
    valueGetter: (params: GridValueGetterParams) =>
      type === TabsIndex.Departure
        ? `${t("departed")} ${formatDate(params.row.timeDepFact, "HH:mm")}`
        : `${t("landed")} ${formatDate(params.row.timeLandFact, "HH:mm")}`,
    field: "timeLandFact",
    headerName: t("status"),
    align: "center",
    headerAlign: "center",
    disableColumnMenu: true,
    minWidth: 120,
    flex: 1,
  },
  {
    valueGetter: (params: GridValueGetterParams) => params.row.airline.en.name,
    // @ts-ignore
    renderCell: (params: GridValueGetterParams) => (
      <>
        <img
          style={{ height: "42px", marginRight: "10px" }}
          src={params.row.airline.en.logoSmallName}
          alt="AirlineLogo"
        />
        <span>{params.row.airline.en.name}</span>
      </>
    ),

    field: "airline.en.name",
    headerName: t("airline"),
    align: "center",
    headerAlign: "center",
    disableColumnMenu: true,
    minWidth: 200,
    flex: 1,
  },
  {
    valueGetter: (params: GridValueGetterParams) =>
      params.row.codeShareData[0].codeShare,
    field: "codeShareData[0].codeShare",
    headerName: t("flight"),
    align: "center",
    headerAlign: "center",
    disableColumnMenu: true,
    minWidth: 120,
    flex: 1,
  },
];

export const formatDate = (date: Date, dateFormat: string) =>
  dayjs(new Date(date)).format(dateFormat);

export const setItem = (key: string, val: any) =>
  localStorage.setItem(key, JSON.stringify(val));

export const getItem = (key: string) =>
  JSON.parse(localStorage.getItem(key) as string);

export const filterFlightsData = (
  data: IFlightData[],
  filterText: string,
  type: TabsIndex,
  lang: string
) => {
  const cityKey =
    type === TabsIndex.Departure
      ? lang === "ua"
        ? "airportToID.city"
        : "airportToID.city_en"
      : lang === "ua"
      ? "airportFromID.city"
      : "airportFromID.city_en";

  return data.filter(
    (el) =>
      el.codeShareData[0].codeShare
        .toLowerCase()
        .includes(filterText.toLowerCase()) ||
      el[cityKey].toLowerCase().includes(filterText.toLowerCase())
  );
};
