import React from 'react';
import Welcome from './Welcome';
import video3 from './images/video3.mp4';
import video1 from './images/video1.mp4';
export default function GetWelcome() {
    return (
      <div className='welcome'>
          <Welcome video={video3} type="video/mp4" playmode='autoPlay' volume='muted'
            continuation='loop' wide='50%' high='50%' />
          <Welcome video={video1} type="video/mp4" playmode='autoPlay' volume='muted'
            continuation='loop' wide='50%' high='50%' />
        </div>
    )
  }