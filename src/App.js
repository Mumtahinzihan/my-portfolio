import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import AboutMe from './AboutMe/AboutMe';
import MyProjects from './MyProjects/Myprojects';
import NotFound from './NotFound';
import Resume from './Resume/Resume';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about-me' component={AboutMe} />
          <Route exact path='/my-projects' component={MyProjects} />
          <Route exact path='/my-resume' component={Resume} />
          <Route exact path='/not-found' component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
