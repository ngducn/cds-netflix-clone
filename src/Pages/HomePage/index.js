import React from "react";

import MovieBar from "../../Components/MoviesBar/index";
import Navbar from "../../Components/Navbar/index";
import requests from "../../api";

function App() {
  return (
    <div className="App">
      <Navbar />

      <MovieBar title="Trending Now" fetchUrl={requests.fetchTrending} />
      <MovieBar title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <MovieBar title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <MovieBar
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <MovieBar title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <MovieBar title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <MovieBar title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <MovieBar title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;