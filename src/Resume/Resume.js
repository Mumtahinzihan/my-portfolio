import React from 'react';
import './Resume.css';
import { Link } from 'react-router-dom';
import dummy from '../images/dummy.pdf';
import SideBar from '../SideBar/SideBar';

export default function Resume() {
    return (
        <div className='resume'>
            <Link to='./' className='link'>Back to home page</Link>
            <SideBar />
            <h1>My resume</h1>
            <span id='download'>
                <a href='../images/dummy.pdf' download>Click here download my cv</a>
            </span>
            <div>
                <iframe title='cv' src={dummy} width='100%' height='auto' />
            </div>
        </div>
    )
}