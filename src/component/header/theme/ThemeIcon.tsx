

import React, { useEffect } from "react";
import { useActions } from "../../hooks/useActions";


import { ReactComponent as ThemeIcon } from "../../assets/theme.svg"


const ThemeControl: React.FC = () => {

  const handleClick = () => {
    const currentTheme = document.body.dataset.theme;
    const newTheme = currentTheme !== "dark" ? "dark" : "";
    console.log(newTheme);
    document.body.dataset.theme = newTheme;
  }

  return (
    <div className="header-theme">

      <ThemeIcon onClick={handleClick} />
    </div>
  )
}

export default ThemeControl;