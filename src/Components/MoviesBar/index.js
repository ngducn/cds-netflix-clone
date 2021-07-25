import React, { useState, useEffect } from "react";
import Youtube from "react-youtube";
import './style.css';

// baseImgURL in order to connect with the .poster_path to view the poster img
const baseImgUrl = "https://image.tmdb.org/t/p/original";
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "6c9d87b8ea43d3f0c26e6d11da8ae352";

function MoviesBar({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  // Options for react-youtube
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    async function fetchData() {
      const resp = await fetch(fetchUrl);
      const data = await resp.json();
      console.log(data.results);
      setMovies(data.results);
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      let trailerurl = await fetch(
        `${BASE_URL}/movie/${movie.id}/videos?api_key=${API_KEY}`
      );
      const json = await trailerurl.json();
      console.log(json);
      setTrailerUrl(json.results[0]?.key);
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map(
          (movie) =>
            movie.backdrop_path !== null && (
              <img
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                src={`${baseImgUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                key={movie.id}
                onClick={() => handleClick(movie)}
              />
            )
        )}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default MoviesBar;
