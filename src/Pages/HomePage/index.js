import React from "react";
import requests from "../../api";
import Banner from "../../Components/Banner/index";
import MoviesBar from "../../Components/MoviesBar/index";
import "./style.css";
import { useLocation } from "react-router-dom";

function HomePage() {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("search");
  console.log(keyword);
  return (
    <div className="HomePage">
      <Banner />

      <MoviesBar
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        isFirst
      />
      <MoviesBar title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <MoviesBar title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <MoviesBar
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <MoviesBar title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <MoviesBar title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <MoviesBar
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <MoviesBar title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomePage;
