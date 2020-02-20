import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Characters from "./containers/Characters";
import ComicsCharacters from "./containers/ComicsCharacters";
import Favorites from "./containers/Favorites";
import Header from "./components/Header";
import ComicsId from "./containers/ComicsId";
import Comics from "./containers/Comics";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMask,
  faBookReader,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import "./App.css";

library.add(faMask, faBookReader, faStar);

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/favorites">
          {/* <Favorites /> */}
        </Route>
        <Route exact path="/comics/:id">
          <div className="selection-comics">
            <ComicsId />
          </div>
        </Route>
        <Route exact path="/comics">
          <div className="comics-page">
            <Comics />
          </div>
        </Route>
        <Route exact path="/characters/:id" className="character-image">
          <ComicsCharacters />
        </Route>
        <Route exact path="/">
          <Characters />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
