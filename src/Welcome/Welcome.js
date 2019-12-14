import React from 'react';
import './Welcome.css';
export default function Welcome(props) {
  return (
    <div className='welcome'>
      <video autoPlay={props.playmode} muted={props.volume} loop={props.continuation} id='cover'>
        <source src={props.video} type={props.type}/>
      </video>
      <div className='video-text'>
        <h1>{props.message}</h1>
      </div>
    </div>
  )
}