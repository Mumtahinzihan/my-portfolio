import React from 'react';
import './MyProjects.css';
import SideBar from '../SideBar/SideBar';

export default function MyProjects () {
    return (
        <div className='project'>
            <SideBar />
            <h1>get my project</h1>
            <p><a href='https://kodflix-eleop64jj.now.sh/' download>My Kodflix Project</a></p>
            <p><a href='https://mumtahinzihan.github.io/comlaracademy/' target='_blank' rel="noopener noreferrer">Comlar Academy</a></p>
            <p><a href='../images/3d-ball.jpg'download>image</a></p>
        </div>
    )
}