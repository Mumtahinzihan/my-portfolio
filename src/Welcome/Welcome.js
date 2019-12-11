import React from 'react';
import './Welcome.css';
export default function Welcome(props) {
  return (
    <div className='welcome'>
      <video autoplay={props.playmode} muted={props.volume} loop={props.continuation}>
        <source src={props.video} type={props.type} />
      </video>
      <div className='video-text'>
        <h1>{props.message}</h1>
      </div>
    </div>
  )
}