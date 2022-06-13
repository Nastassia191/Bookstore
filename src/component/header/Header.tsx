import React from "react";
import Timer from '../timer/Timer';
import { ReactComponent as Logo } from "../assets/logo.svg";
import { Link } from "react-router-dom";
import ThemeControl from "./theme/ThemeIcon";
import useTranslete from "../hooks/useTranslete";


import "./Header.scss";





const Header: React.FC = () => {

  const { lang, setLang } = useTranslete();

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
          {lang === "en"
            ?
            <button className='button_registration_lang' onClick={() => setLang("ru")}>
              ru
            </button>
            :
            <button className='button_registration_lang' onClick={() => setLang("en")}>
              en
            </button>
          }
        </li>
        <li>
          <ThemeControl />
        </li>

      </ul>


    </nav>

  )
}

export default Header;
