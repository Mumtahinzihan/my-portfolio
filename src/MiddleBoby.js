import React from 'react';

export default function MiddleBody(props) {
    return (
        <div className='city'>
            <div className='image1'>
                <img src={props.photo} alt={`${props.logo} logo`} />
            </div>
            <h1 className='title'>{props.text}</h1>
        </div>

    )
}