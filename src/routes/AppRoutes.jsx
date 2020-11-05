import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { HomeScreen } from "../views/HomeScreen";
import { ResultScreen } from "../views/ResultScreen";
import { DetailScreen } from "../views/DetailScreen";
import { NavBar } from "../components/navbar/NavBar";

export const AppRoutes = () => {
  return (
    <Router>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path='/items/:id' component={ DetailScreen } />
            <Route exact path='/items' component={ ResultScreen } />
            <Route path="/" component={ HomeScreen } />
            <Redirect to="/" />
          </Switch>
        </div>
    </Router>
  );
}