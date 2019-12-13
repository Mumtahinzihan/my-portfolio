import React from 'react';
import './GetMiddleBody.css';
import html from '../images/html5.svg';
import css from '../images/css3.svg';
import react from '../images/react.svg';
import javascript from '../images/javascript.svg';
import node from '../images/node.svg';
import mongodb from '../images/mongodb.svg';

export default function GetMiddleBody() {
    var divStyle = {
        color: 'crimson',
    };
    var colorName = {
        color: 'azure',
    };
    return (
        <div className='wrapper'>
            <div className='personal'>
                <div className='story1'>
                    <p>I am a softeare developer from London.
                    I finished my bootcamp from <a href='https://www.kodiri.com/bootcamp/testimonials' terget='_blank'> Kodri </a>
                        at the end of the last year.
                       Throughout the bootcamp, I earned a lot of knowledge. My journey in Software developement
                       started almost from zero, I managed to learn a lot from Kodori which started from beginner
                        level to expart level in Javascript, intermediate in React and Node. My knowledge was not only
                        confined into those but also folloewd by morning meeting in agile methodology, workshops,
                        a lot of coding challanges, board challanges, personal and team projects, weekly reviews.
                </p>
                </div>
                <div className='story1'>
                    <p style={divStyle}>I worked with couple of projects. <br/>I love to work not only by myself but also as a team.<br/>
                    In my bootcamp, I did a lot of pair progamming with my team-members which helped me to discover a lot of new things.
                    <br/><br/>I have shared couple of my projects here</p>
                </div>
            </div>

            <div className='my-work'>
                <div className='story2'>
                    <p style={colorName}>I used a lot of new technologies in my project such as <br/>React.js, <br/>Node.js and <br/>mongoDB</p>
                </div>
                <div className='story2'>
                    <p>Last not but the least, <br/>I dont want to stop here rather I want to take my career futher.<br/><br/>
                     Currently, I am actively looking for a junior developer
                    role. If you find my works draw you interest, <br/>feel free to contact me &#128519;
                    </p>
                </div>
            </div>
            <h2>
                What do I use in my project?
                </h2>

            <div className='story3'>
                <div className='img-logo'>
                    <img src={html} alt='html' /><h3>HTML5</h3>
                </div>
                <div className='img-logo'>
                    <img src={css} alt='css' /><h3>CSS3</h3>
                </div>
                <div className='img-logo'>
                    <img src={javascript} alt='javascript' /><h3>JAVASCRIPT</h3>
                </div>
                <div className='img-logo'>
                    <img src={react} alt='html' /><h3>REACT</h3>
                </div>
                <div className='img-logo'>
                    <img src={node} alt='html' /><h3>NODE</h3>
                </div>
                <div className='img-logo'>
                    <img src={mongodb} alt='mongodb' /><h3>MONGODB</h3>
                </div>
            </div>
        </div>
    )
}