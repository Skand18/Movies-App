import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const searchQueryhandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`./search/${query}`);
    }
  };
  return (
    <div className="heroBanner">
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="titel">Welcome.</span>
          <span className="subTitle">
            Millions fo movies, TV shows ans people to discover. Explore Now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or tv show..."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryhandler}
            />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
