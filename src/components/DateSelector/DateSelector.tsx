import { FC, SyntheticEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { Dayjs } from "dayjs";
import { Tab, Tabs } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useDispatch, useSelector } from "react-redux";
import { changeDate } from "../../store/flights.actions";
import { IStore } from "../../types";

import * as Styled from "./DateSelector.styles";

const DateSelector: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [dayIndex, setDayIndex] = useState<number>(1);

  const selectedDay = useSelector((store: IStore) => store.selectedDay);

  const handleDayChange = (event: SyntheticEvent, newValue: number) => {
    setDayIndex(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <Styled.DateSelector>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Styled.DatePicker
          value={selectedDay}
          onAccept={(newValue) => dispatch(changeDate(newValue as Dayjs))}
          format="DD/MM/YYYY"
          disableFuture
        />
      </LocalizationProvider>
      <Styled.Tooltip
        title={t(
          "Unfortunately, due to the situation in the country, there are no flights on the current dates"
        )}
      >
        {/* TODO: remove disabled when flights will be available */}
        <Tabs
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "rgba(0, 0, 0, 0.38)",
            },
          }}
          value={dayIndex}
          onChange={handleDayChange}
        >
          <Tab disabled label={t("yesterday")} {...a11yProps(0)} />
          <Tab disabled label={t("today")} {...a11yProps(1)} />
          <Tab disabled label={t("tomorrow")} {...a11yProps(2)} />
        </Tabs>
      </Styled.Tooltip>
    </Styled.DateSelector>
  );
};

export default DateSelector;
