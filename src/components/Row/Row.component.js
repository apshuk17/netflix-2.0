import React, { useState, useEffect } from "react";
import { RowWrapper } from "./Row.styles";
import axios from "../../api/axios";
import { TMDB_IMAGE_URL_PREFIX } from "../../constants";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request?.data?.results);
      return request;
    })();
  }, [fetchUrl]);

  return (
    <RowWrapper className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(({ poster_path, backdrop_path, original_title, id }) => {
          return (isLargeRow && poster_path) ||
            (!isLargeRow && backdrop_path) ? (
            <img
              key={id}
              className={`row__poster ${
                isLargeRow ? "row__poster__large" : ""
              }`}
              src={`${TMDB_IMAGE_URL_PREFIX}${
                isLargeRow ? poster_path : backdrop_path
              }`}
              alt={original_title}
              height={isLargeRow ? 250 : 100}
              width={isLargeRow ? 444 : 178}
            />
          ) : null;
        })}
      </div>
    </RowWrapper>
  );
};

export default Row;
