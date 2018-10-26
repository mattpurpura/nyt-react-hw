import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';
import Home from './components/Home';
import Saved from './components/Saved';
import Navbar from './components/Navbar';
import './App.css'


const App = () => (
  <Router>
  <div>
    <Navbar />
    <Route exact path = '/' component={Home}/>
    <Route exact path = '/saved' component={Saved} />
  </div>  
  </Router>
)


export default App;
