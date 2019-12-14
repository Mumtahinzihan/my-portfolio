import React from 'react';
import './GetMiddleBody.css';
import html from '../images/html5.svg';
import css from '../images/css3.svg';
import react from '../images/react.svg';
import javascript from '../images/javascript.svg';
import node from '../images/node.svg';
import mongodb from '../images/mongodb.svg';

export default function GetMiddleBody() {
    return (
        <div className='wrapper'>
            <div className='personal'>
                <div className='story1'>
                    <p>I am a software developer from London.
                    I finished my bootcamp from <a href='https://www.kodiri.com/bootcamp/testimonials' terget='_blank'> Kodri </a>
                        at the end of the last year.
                      <br /> My journey in software developement started almost from zero - I learned a lot from Kodori, where I started from beginner
                            level and ended up in expert level in Javascript, intermediate in React and Node.
                            To learn more about me, click here
                    </p>
                </div>
                <div className='story1'>
                    <p>I worked on a number of projects, where I completed tasks independently as well as participated in multiple team projects.<br />
                        During team work, I did a lot of pair progamming with my colleagues which helped me to discover a lot of new things.
                    <br /><br />I have shared couple of my projects here
                    </p>
                </div>
            </div>

            <div className='my-work'>
                <div className='story2'>
                    <p>I used a lot of programming languages in my project such as <br />React.js, <br />Node.js and <br />mongoDB</p>
                </div>
                <div className='story2'>
                    <p>Last not but the least, <br /> I want to take my career further.<br /><br />
                        I am actively looking for a junior developer
                    role. If you want to collaborate with me, <br />feel free to contact me &#128519;
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