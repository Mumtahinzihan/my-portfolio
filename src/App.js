import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import AboutMe from './AboutMe/AboutMe';
import MyProjects from './MyProjects/Myprojects';


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about-me' component={AboutMe} />
        <Route exact path='/my-projects' component={MyProjects} />
      </div>
    </Router>
  );
}
export default App;
