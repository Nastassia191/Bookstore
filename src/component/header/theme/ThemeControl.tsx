import React, { useEffect, useState } from "react";
import { ReactComponent as ThemeIcon } from "../../assets/theme.svg"




const ThemeControl: React.FC = () => {
  const SHOW_THEME = "showTheme";
  const handleClick = () => {
    const currentTheme = document.body.dataset.theme;
    const newTheme = currentTheme !== "dark" ? "dark" : "";
    console.log(newTheme);
    document.body.dataset.theme = newTheme;
    localStorage.setItem(SHOW_THEME, newTheme.toString());
  }

  return (
    <div className="header-theme">

      <ThemeIcon
        onClick={handleClick} />
    </div>
  )
}

export default ThemeControl;