import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import EventPage from "./pages/event";
import Events from "./pages/events";
import MainPage from "./pages";

class App extends Component {
  render() {
    return  <Router>
      <Switch>
      <Route exact path="/" component={MainPage}/>
      <Route exact path="/event/:ccd/:year" component={EventPage}/>
      <Route exact path="/events" component={Events}/>
      </Switch>
      </Router>  }
}
  

export default App;
