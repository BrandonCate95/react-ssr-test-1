import React, { Component } from 'react';
//import logo from './logo.svg';
// import './App.css';
import { Link, Switch, Route } from "react-router-dom";
import routes from "./server/routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Switch>
          { routes.map( route => <Route key={ route.path } { ...route } /> ) }
        </Switch>
      </div>
    );
  }
}

export default App;
