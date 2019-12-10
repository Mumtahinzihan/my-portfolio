import React from 'react';
import SocialMedia from './Social-media-logos/SocialMedia';
import facebookLogo from './images/facebook-logo.png';
import githubLogo from './images/github-logo.png';
import instagramLogo from './images/instagram-logo.png';
import linkedinLogo from './images/linkedin-logo.jpg';
import emailLogo from './images/emailLogo.png';

export default function HeaderNav() {
  return (
    <div className='container'>
      <header className='social-media'>
        <SocialMedia link='https://accounts.google.com/ServiceLogin/signinchooser?flowName=GlifWebSignIn&flowEntry=ServiceLogin' target='_blank' image={emailLogo} logo={emailLogo} />
        <SocialMedia link='https://github.com/Mumtahinzihan' target='_blank' image={githubLogo} logo={githubLogo} />
        <SocialMedia link='https://www.instagram.com/accounts/signup/' target='_blank' image={instagramLogo} logo={instagramLogo} />
        <SocialMedia link='https://www.linkedin.com/in/mumtahin-zihan-27985b151/' target='_blank' image={linkedinLogo} logo={linkedinLogo} />
        <SocialMedia link='https://www.facebook.com/' target='_blank' image={facebookLogo} logo={facebookLogo} />
      </header>
      {/* <header className='navigation'>
        <li> About me</li>
        <li><a href='#footer'>Contact me</a></li>
      </header> */}
    </div>
  )
}