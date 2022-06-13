import React from "react";
import { ReactComponent as ThemeIcon } from "../../assets/theme.svg"
import { handleTheme } from "../../hooks/handleTheme";




const ThemeControl: React.FC = () => {
  const handleClick = () => {
    handleTheme(true);
  }

  return (
    <div className="header-theme">
      <ThemeIcon
        onClick={handleClick} />
    </div>
  )
}

export default ThemeControl;