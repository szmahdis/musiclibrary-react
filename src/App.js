import React from "react";
import MainPage from './pages/MainPage';
import SongPage from './pages/SongPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  return(
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage></MainPage>
        </Route>
        <Route path="/song/:id">
          <SongPage></SongPage>
        </Route>
      </Switch>
    </Router>
  )
}