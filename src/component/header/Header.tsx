import React from "react";

import Timer from '../timer/Timer';
import useTranslete from "../hooks/useTranslete";
import { ReactComponent as Logo } from "../assets/logo.svg";



import "./Header.scss";
import { Link } from "react-router-dom";




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

      < ul className="links">
        <li>
          <Link to="/books">
            New books
          </Link>

        </li>
        <li>
          <Link to="/registration">
            Registration
          </Link>
        </li>

      </ul>

    </nav>

  )
}

export default Header;
