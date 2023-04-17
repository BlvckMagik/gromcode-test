import { FC } from "react";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import * as Styled from "./InputBase.styles";

type Props = {
  placeholder: string;
  buttonText: string;
  inputValue: string;
  onClick: () => void;
  onChange: (arg: string) => void;
};

const InputBase: FC<Props> = ({
  buttonText,
  placeholder,
  inputValue,
  onClick,
  onChange,
}) => {
  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <Styled.InputBase>
      <Styled.TextField
        id="input-with-icon-textfield"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <Styled.Button onClick={onClick}>{buttonText}</Styled.Button>
    </Styled.InputBase>
  );
};

export default InputBase;
