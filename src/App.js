import React from 'react';
import './App.css';
import HeaderNav from './Header';
import GetWelcome from './GetWelcome';
import GetMiddleBody from './GetMiddleBody';
import SideBar from './SideBar';

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <SideBar />
      <GetWelcome />
      <GetMiddleBody />
      <footer id='footer'>
        <p>Email: <a href="mailto:mumtahin@yahoo.com">mumtahin@yahoo.com</a></p>
      </footer>
    </div>
  );
}
export default App;