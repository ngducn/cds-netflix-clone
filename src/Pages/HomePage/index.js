import React from "react";
import requests from "../../api";
import Banner from "../../Components/Banner/index";
import MoviesBar from "../../Components/MoviesBar/index";
import "./style.css"

function App() {
  return (
    <div className="App">
      <Banner/>

      <MoviesBar title="Trending Now" fetchUrl={requests.fetchTrending} />
      <MoviesBar title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <MoviesBar title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <MoviesBar
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <MoviesBar title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <MoviesBar title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <MoviesBar title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <MoviesBar title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App; 