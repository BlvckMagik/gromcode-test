import { FC } from "react";
import { CircularProgress } from "@mui/material";
import { MUIColors, MUILoaderVariants } from "../../types";

import * as Styled from "./Loader.styles";

type Props = {
  color?: MUIColors;
  variant?: MUILoaderVariants;
  style: object;
};

const Loader: FC<Props> = ({
  color = "primary",
  variant = "indeterminate",
  style,
}) => {
  return (
    <Styled.LoaderLayout style={style}>
      <CircularProgress color={color} variant={variant} />
    </Styled.LoaderLayout>
  );
};

export default Loader;
