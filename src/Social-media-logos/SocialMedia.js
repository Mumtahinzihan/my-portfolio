import React from 'react';

export default function SocialMedia(props) {
    return (
      <span>
        <img src={props.image} alt={`${props.logo} logo`} />
      </span>
    )
  }