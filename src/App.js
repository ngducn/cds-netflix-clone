import React, { useEffect, useState } from "react";
import Navbar from './Components/Navbar/index';

const apiKey = process.env.MOVIE_DATABASE_API_KEY;

const App = () => {
  return (
    <>
      <Navbar />
    </>
  );
};

export default App;
