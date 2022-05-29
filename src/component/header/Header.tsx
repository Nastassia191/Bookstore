import React from "react";

import Timer from '../timer/Timer';
import useTranslete from "../hooks/useTranslete";
import { ReactComponent as Logo } from "../assets/logo.svg";



import "./Header.scss";




const Header: React.FC = () => {






  return (
    <nav className="header-container">
      <div className="logo-container">
        <div className="logo">
          <Logo />
          <div className="app-name">
            Book.store
          </div>
        </div>
        <Timer />
      </div>

      <div className="controls">
      </div>






    </nav>

  )
}

export default Header;
