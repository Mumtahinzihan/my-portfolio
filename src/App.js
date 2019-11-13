import React from 'react';
import './App.css';
import facebookLogo from './images/facebook-logo.png';
import githubLogo from './images/github-logo.png';
import instagramLogo from './images/instagram-logo.png';
import linkedinLogo from './images/linkedin-logo.jpg';
import emailLogo from './images/emailLogo.png';

function App() {
  return (
    <div className="App">
      <header class='cover'>
        <span><img src={facebookLogo} alt='facebookLogo'/></span>
        <span><img src={githubLogo} alt='githubLogo'/></span>
        <span><img src={instagramLogo} alt='instagramLogo'/></span>
        <span><img src={linkedinLogo} alt='linkedinLogo'/></span>
        <span><img src={emailLogo} alt='emailLogo'/></span>
      </header>
    </div>
  );
}

export default App;
