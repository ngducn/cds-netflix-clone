import React, { useEffect, useState } from "react";
import Navbar from './Components/Navbar/index';

import Navbar from "./Components/Navbar/index";
import HomePage from "./Pages/HomePage/index";
import MyList from "./Pages/MyListPage/index";
import SearchPage from "./Pages/SearchPage/index";
import MoviePage from "./Pages/MoviePage/index";
import Footer from "./Components/Footer/index";

const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <Navbar nav={state.scrolled} />
          <Switch>
            <Route exact path='/' component={HomePage} />

          </Switch>            
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
