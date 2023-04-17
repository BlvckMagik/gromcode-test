import { FC } from "react";
import { useTranslation } from "react-i18next";
import Logo from "../../images/Logo.png";

import * as Styled from "./Header.styles";

const Header: FC = () => {
  const { i18n } = useTranslation();

  const handleToggleLang = () => {
    const newLang = i18n.language === "ua" ? "en" : "ua";
    i18n.changeLanguage(newLang);
  };

  return (
    <Styled.HeaderContainer>
      <Styled.HeaderLogo alt="LogoImage" src={Logo} />
      <Styled.HeaderLangButton onClick={handleToggleLang}>
        {i18n.language.toUpperCase()}
      </Styled.HeaderLangButton>
    </Styled.HeaderContainer>
  );
};

export default Header;
