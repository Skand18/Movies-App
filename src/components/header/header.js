import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [showLinks, setShowLinks] = useState(true);
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
        />
      </Link>

      <div className="header-items" id={showLinks ? "hidden" : ""}>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span className="link">Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span className="link"> Top Rated </span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span className="link"> Upcoming </span>
        </Link>{" "}
      </div>
      <div className="hamburger-logo">&#9776;</div>
    </div>
  );
};

export default Header;
