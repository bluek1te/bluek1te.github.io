import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import "antd/dist/antd.css";

import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Projects from './Projects/Projects';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
