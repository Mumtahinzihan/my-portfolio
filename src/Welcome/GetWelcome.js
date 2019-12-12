import React from 'react';
import './Welcome.css';
import Welcome from './Welcome';
import video1 from '../images/video1.mp4';
export default function GetWelcome() {
  return (
    <div className='welcome'>
      <Welcome video={video1} type="video/mp4" playmode='autoPlay' volume='muted'
        continuation='loop' message='My Name is Mumtahin.
        I Am A Software Developer.
        Welcome To My Portfolio.'/>
    </div>
  )
}
