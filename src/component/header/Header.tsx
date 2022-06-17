import React from "react";
import Timer from '../timer/Timer';
import { ReactComponent as Logo } from "../assets/logo.svg";
import { Link } from "react-router-dom";
import ThemeControl from "./theme/ThemeControl";
import useTranslete from "../hooks/useTranslete";


import "./Header.scss";






const Header: React.FC = () => {

  const { lang, setLang } = useTranslete();

  return (
    <nav className="header-container">
      <div className="logo-container">
        <div className="logo">
          <Logo className="image-logo" />
          <Link className="app-name" to="/newBooks">
            Book.store
          </Link>
        </div>
        <Timer />
      </div>

      < ul className="links">
        <li className="links_newBooks">
          <Link to="/mewBooks">
            New books
          </Link>
        </li>
        <li className="links_newBooks">
          <Link to="/books">
            Books searche
          </Link>
        </li>
        <li className="links_registration">
          <Link to="/registration">
            Registration
          </Link>
        </li>
        <li className="links_translate">
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
        <li className="links_theme">
          <ThemeControl />
        </li>

      </ul>


    </nav>

  )
}

export default Header;
