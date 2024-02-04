import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/png/logo.png";
import searchIcon from "../../assets/png/searchIcon.png";
import notifications from "../../assets/png/notifications.png";
import profile from "../../assets/png/profile.png";
import Search from "../../components/Search/Search";
import "./styles/Header.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <Link to="/home">
          <img src={logo} alt="logo" className="logo" />
        </Link>

        <Search />

        <nav>
          <Link to="/profile">
            <img src={profile} alt="profile" className="navIcons" />
          </Link>
          <Link to="/notifications">
            <img src={notifications} alt="notifications" className="navIcons" />
          </Link>
          <Link to="/search">
            <img src={searchIcon} alt="search" className="searchIcon" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
