import React from "react";
import Timer from '../timer/Timer';
import { ReactComponent as Logo } from "../assets/logo.svg";
import { Link } from "react-router-dom";


import "./Header.scss";
import ThemeControl from "./theme/ThemeIcon";





const Header: React.FC = () => {





  return (
    <nav className="header-container">
      <div className="logo-container">
        <div className="logo">
          <Logo />
          <Link className="app-name" to="/books">
            Book.store
          </Link>
        </div>
        <Timer />
      </div>

      < ul className="links">
        <li>
          <Link to="/newBooks">
            New books
          </Link>

        </li>
        <li>
          <Link to="/registration">
            Registration
          </Link>
        </li>
        <li>
          <ThemeControl />
        </li>

      </ul>


    </nav>

  )
}

export default Header;
