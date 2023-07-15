import React from "react";
import "./styles.scss";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import DetailsBanner from "./detailsBanner/DetailsBanner";

const Details = () => {
  // const { data, loading } = useFetch("/movies/{movie}");
  return (
    <div>
      <DetailsBanner />
    </div>
  );
};

export default Details;
