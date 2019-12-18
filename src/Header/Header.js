import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SocialMedia from './SocialMedia';
import facebook from '../images/facebook.svg';
import github from '../images/github.svg';
import instagram from '../images/instagram.svg';
import linkedin from '../images/linkedin.svg';
import email from '../images/email.svg';

export default function HeaderNav() {
  return (
    <div className='container'>
      <header className='social-media'>
        <SocialMedia link='https://accounts.google.com/ServiceLogin/signinchooser?flowName=GlifWebSignIn&flowEntry=ServiceLogin' target='_blank' image={email} logo={email} />
        <SocialMedia link='https://github.com/Mumtahinzihan' target='_blank' image={github} logo={github} />
        <SocialMedia link='https://www.instagram.com/accounts/signup/' target='_blank' image={instagram} logo={instagram} />
        <SocialMedia link='https://www.linkedin.com/in/mumtahin-zihan-27985b151/' target='_blank' image={linkedin} logo={linkedin} />
        <SocialMedia link='https://www.facebook.com/' target='_blank' image={facebook} logo={facebook} />
      </header>
      <header className='header'>
        <Link to='./about-me' id='head'>About-me</Link>
        <Link to='./my-projects' id='head'>My projects</Link>
        <Link to='./my-resume' id='head'>Resume</Link>
        <a id='head' href='mailto:mumtahin@yahoo.com'>Email</a>
      </header>
    </div>
  )
}