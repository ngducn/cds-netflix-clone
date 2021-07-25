import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/index";
import Footer from "./Components/Footer/index";
import HomePage from "./Pages/HomePage/index";
import SearchPage from "./Pages/SearchPage/index";

const App = () => {
  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY < 40;
      if (top) {
        setScroll(false);
      } else {
        setScroll(true);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="wrapper">
        <Navbar scrolled={scroll} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/search" component={SearchPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
