import React from 'react';
import MiddleBody from './MiddleBoby';
import projects from './images/projects.jpg';

export default function GetMiddleBody() {
    return (
        <div className='wrapper'>
            <MiddleBody text='others' photo={projects} logo={projects} />
            <MiddleBody text='certification' photo={projects} logo={projects} />
            <MiddleBody text='cv' photo={projects} logo={projects} />
            <MiddleBody text='others' photo={projects} logo={projects} />
        </div>
    )
}