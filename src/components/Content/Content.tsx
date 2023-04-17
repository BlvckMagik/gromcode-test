import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { changeFilterText } from "../../store/flights.actions";
import { InputBase } from "../../ui-components";
import FlightInfo from "../FlightInfo";

import * as Styled from "./Content.styles";

const Content: FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState<string>("");

  const handleSearch = () => {
    dispatch(changeFilterText(inputValue));
  };

  const handleTextChange = (newValue: string) => {
    setInputValue(newValue);
  };

  const isWideScreen = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Styled.ContentMain>
      <Typography variant={isWideScreen ? "h1" : "h5"}>
        {t("flight search")}
      </Typography>
      <InputBase
        placeholder={t("flight number or city")}
        buttonText={t("search")}
        inputValue={inputValue}
        onClick={handleSearch}
        onChange={handleTextChange}
      />
      <FlightInfo />
    </Styled.ContentMain>
  );
};

export default Content;
