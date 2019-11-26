import React from 'react';
export default function SocialMedia(props) {
    return (
      <span>
        <a href={props.link} target={props.target} >
          <img src={props.image} alt={`${props.logo} logo`}/>
        </a>
      </span>
    )
  }