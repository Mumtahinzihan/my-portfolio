import React from 'react';
import SocialMedia from './Social-media-logos/SocialMedia';
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
        <SocialMedia image={emailLogo} logo={emailLogo} />
        <SocialMedia image={githubLogo} logo={githubLogo} />
        <SocialMedia image={instagramLogo} logo={instagramLogo} />
        <SocialMedia image={linkedinLogo} logo={linkedinLogo} />
        <SocialMedia image={facebookLogo} logo={facebookLogo} />
      </header>
    </div>
  );
}


export default App;
