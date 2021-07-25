import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/index";
import Footer from "./Components/Footer/index";
import HomePage from "./Pages/HomePage/index";
import MyList from "./Pages/MyListPage/index";
import SearchPage from "./Pages/SearchPage/index";
import MoviePage from "./Pages/MoviePage/index";

const App = () => {
  let state = { scrolled:false };

  const componentDidMount = () => {
    window.addEventListener("scroll", () => {
      const top = window.scrollY < 20;
      if (top) {
        this.setState({ scrolled: false });
      } else {
        this.setState({ scrolled: true });
      }
    });
  };

  const componentWillUnmount = () => {
    window.removeEventListener("scroll");
  };

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
