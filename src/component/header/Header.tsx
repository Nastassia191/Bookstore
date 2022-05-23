import React from "react";

import Timer from '../timer/Timer';
import { ReactComponent as Logo } from "../assets/logo.svg";



import "./Header.scss";



const Header: React.FC = () => {





  return (
    <nav className="header-container">
      <div className="logo">
        <Logo />
        <div className="app-name">
          Book.store
        </div>
      </div>

      <Timer />

    </nav>

  )
}

export default Header;
