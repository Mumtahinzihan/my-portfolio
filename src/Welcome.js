import React from 'react';
export default function Welcome(props) {
    return (
        <video autoplay={props.playmode} muted={props.volume} loop={props.continuation} width={props.wide} height={props.high}>
          <source src={props.video} type={props.type} />
        </video>
    )
  }