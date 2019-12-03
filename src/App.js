import React from 'react';
import './App.css';
import HeaderNav from './Header';
import GetWelcome from './GetWelcome';
import GetMiddleBody from './GetMiddleBody';

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <GetWelcome />
      <GetMiddleBody />
      <footer id='footer'>
        <p>Contact: +447954846003</p>
        <p>Email: mumtahin@yahoo.com</p>
        <p>Address: London, United Kingdom</p>
      </footer>
    </div>
  );
}
export default App;