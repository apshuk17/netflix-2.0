import React, { useState, useEffect } from "react";
import { truncateStr } from "../../utils/utils";
import { BannerWrapper } from "./Banner.styles";
import axios from "../../api/axios";
import requests from "../../api/requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(requests.fetchTrending);
      setMovie(
        response?.data?.results[
          Math.floor(Math.random() * (response?.data?.results?.length - 1))
        ]
      );
      return response;
    })();
  }, []);

  console.log("##movie", movie);

  return (
    <BannerWrapper className="banner" backdropPath={movie?.backdrop_path}>
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h2 className="banner__description">
          {truncateStr(movie?.overview, 150)}
        </h2>
      </div>

      <div className="banner--fadeBottom" />
    </BannerWrapper>
  );
};

export default Banner;
