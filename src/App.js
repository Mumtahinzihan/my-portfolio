import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import AboutMe from './AboutMe/AboutMe';


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about-me' component={AboutMe} />
      </div>
    </Router>
  );
}
export default App;
