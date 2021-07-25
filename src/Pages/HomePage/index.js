import React from "react";

<<<<<<< HEAD
import MoviesBar from "../../Components/MoviesBar/index";

=======
import MovieBar from "../../Components/MoviesBar/index";
import Navbar from "../../Components/Navbar/index";
>>>>>>> 6c7a7ead4ae9327b37e83f09437cb45809ec8ffa
import requests from "../../api";

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <MoviesBar title="Trending Now" fetchUrl={requests.fetchTrending} />
      <MoviesBar title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <MoviesBar title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <MoviesBar
=======
      <Navbar />

      <MovieBar title="Trending Now" fetchUrl={requests.fetchTrending} />
      <MovieBar title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <MovieBar title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <MovieBar
>>>>>>> 6c7a7ead4ae9327b37e83f09437cb45809ec8ffa
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
<<<<<<< HEAD
      <MoviesBar title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <MoviesBar title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <MoviesBar title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <MoviesBar title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
=======
      <MovieBar title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <MovieBar title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <MovieBar title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <MovieBar title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
>>>>>>> 6c7a7ead4ae9327b37e83f09437cb45809ec8ffa
    </div>
  );
}

export default App;