import React from 'react';
import './App.css';
import HeaderNav from './Header';
import cv1 from './images/cv1.jpg';
import cv from './images/cv.jpg';
import myblog from './images/myblog.jpg';
import projects from './images/projects.jpg';
import myphoto from './images/myphoto.JPG';

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <br /><br />

      <div class='welcome'>
        <h1>Welcome to The Web Development Blog where I share my ideas on working with HTML,
        CSS3, JavaScript, React and a lot of other stuff. I'm Mumtahin and I am very passionate
        about Web-Designing. Here I have shared all of the my own projects.
        </h1>
      </div>
      <br /><br />
      <div className='wrapper'>
        <div className='city'>
          <div className='image1'>
            <img src={myblog} alt='city' />
          </div>
          <h1 className='title'>PERSONAL BLOG</h1>
        </div>
        <div className='city'>
          <div className='image1'>
            <img src={cv} alt='city' />
          </div>
          <h1 className='title'>CERTIFICATIONS</h1>
        </div>
        <div className='city'>
          <div className='image1'>
            <img src={cv1} alt='city' />
          </div>
          <h1 className='title'>DOWNLOAD CV</h1>
        </div>
        <div className='city'>
          <div className='image1'>
            <img src={cv} alt='city' />
          </div>
          <h1 className='title'>MY PROJECTS</h1>
        </div>
        <div className='city'>
          <div className='image1'>
            <img src={myphoto} alt='city' />
          </div>
          <h1 className='title'>CERTIFICATIONS</h1>
        </div>
        <div className='city'>
          <div className='image1'>
            <img src={projects} alt='city' />
          </div>
          <h1 className='title'>OTHERS</h1>
        </div>
      </div>
      <footer id='footer'>
        <p>Contact: +447954846003</p>
        <p>Email: mumtahin@yahoo.com</p>
        <p>Address: London, United Kingdom</p>
      </footer>
    </div>
  );
}
function MiddleBody(props) {
  return (
      <div className='image1'>
        image={props.src} alt={`props.src`}
        <img src={myblog} alt='city' />
      </div>
      )
    }
export default App;