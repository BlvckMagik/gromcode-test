import { FC, SyntheticEvent, useEffect, useMemo, useState } from "react";
import { AnyAction } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Snackbar, Stack } from "@mui/material";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import DateSelector from "../DateSelector";
import { closeSnackbar, getFlights } from "../../store/flights.actions";
import { IFlightData, IStore, TabsIndex } from "../../types";
import { filterFlightsData, getColumnsData } from "../../utils";

import * as Styled from "./FlightInfo.styles";

const FlightInfo: FC = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const [tabIndex, setTabIndex] = useState<number>(0);

  const filterText = useSelector((store: IStore) => store.filterText);
  const arrival = filterFlightsData(
    useSelector((store: IStore) => store.flightsData.arrival),
    filterText,
    TabsIndex.Arrival,
    i18n.language
  );
  const departure = filterFlightsData(
    useSelector((store: IStore) => store.flightsData.departure),
    filterText,
    TabsIndex.Departure,
    i18n.language
  );
  const isDataFetching = useSelector((store: IStore) => store.isDataFetching);
  const selectedDay = useSelector((store: IStore) => store.selectedDay);
  const isSnackbarOpen = useSelector((store: IStore) => store.isSnackbarOpen);

  const columns = useMemo(
    () => getColumnsData(tabIndex, t, i18n),
    [i18n, t, tabIndex]
  );

  useEffect(() => {
    dispatch(getFlights(selectedDay) as unknown as AnyAction);
  }, [dispatch, selectedDay]);

  const handleTabChange = (event: SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <Styled.InfoLayout>
      <Styled.Tabs value={tabIndex} onChange={handleTabChange}>
        <Styled.Tab
          icon={<FlightTakeoffIcon />}
          iconPosition="start"
          label={t("departure")}
          {...a11yProps(0)}
        />
        <Styled.Tab
          icon={<FlightLandIcon />}
          iconPosition="end"
          label={t("arrival")}
          {...a11yProps(1)}
        />
      </Styled.Tabs>
      <DateSelector />
      {isDataFetching ? (
        <Styled.Skeleton variant="rectangular" />
      ) : (
        <Styled.DataGrid
          rows={tabIndex === TabsIndex.Departure ? departure : arrival}
          // @ts-ignore
          columns={columns}
          components={{
            NoRowsOverlay: () => (
              <Stack
                sx={{ fontWeight: 500 }}
                height="100%"
                alignItems="center"
                justifyContent="center"
              >
                {t("no flight")}
              </Stack>
            ),
          }}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 15,
              },
            },
          }}
          autoHeight
          pageSizeOptions={[15, 25, 50]}
          disableRowSelectionOnClick
          // @ts-ignore
          getRowId={(row: IFlightData) => row.ID}
        />
      )}
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={6000}
        onClose={() => dispatch(closeSnackbar())}
      >
        <Styled.Alert severity="error">
          {t("something went wrong")}
        </Styled.Alert>
      </Snackbar>
    </Styled.InfoLayout>
  );
};

export default FlightInfo;
