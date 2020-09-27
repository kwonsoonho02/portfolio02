import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Portfolio from "./containers/Portfolio/Portfolio";
import PortfolioSub from "components/PortfolioSub";
import Hiring from "./containers/Hiring/Hiring";
import HiringSub from "components/HiringSub";
import Contact from "./containers/Contact/Contact";
import MediaLink from "./components/MediaLink/MediaLink";
import About from "./containers/About/About";
import History from "./containers/History/History";



function App() {
  return (
    <BrowserRouter>
      <div id="wrap">
        <Header />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Portfolio} />
          <Route path="/portfolio/:id" component={PortfolioSub} />
          <Route exact path="/history" component={History} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/hiring" component={Hiring} />
          <Route path="/hiring/:id" component={HiringSub} />
        </Switch>
        <MediaLink />
      </div>
    </BrowserRouter>
  );
}

export default App;
