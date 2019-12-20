import React from 'react';
import { Link } from 'react-router-dom';
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
                    I finished my bootcamp from <a href='https://www.kodiri.com/bootcamp/testimonials' terget='_blank' rel="noopener noreferrer"> Kodri </a>
                        at the end of the last year.
                      <br /> My journey in software developement started almost from zero - I learned a lot from Kodori boot-camp about 
                      new progamming langueges. I don't only code-
                        To know more about me, <Link to='/about-me'>click here</Link>
                    </p>
                </div>
                <div className='story1'>
                    <p>I worked on a number of projects, where I completed tasks independently as well as participated in multiple team projects.<br />
                        During team work, I did a lot of pair progamming with my colleagues which helped me to discover a lot of new things.
                    <br />I have shared couple of my projects <Link to='/my-projects'>here</Link>
                    </p>
                </div>
            </div>
            <div className='my-work'>
                <div className='story2'>
                    <p>I love to use new technologies in my project such as <br />React.js, <br />Node.js and <br />mongoDB</p>
                </div>
                <div className='story2'>
                    <p>Last not but the least, <br /> I want to take my career further.<br /><br />
                        I am actively looking for a junior developer
                    role. If you want to collaborate with me, <br />feel free to contact me &#128519;
                    </p>
                </div>
            </div>
            <h2>
                What progamming langueges do I use in my project ???
            </h2>

            <div className='story3'>
                <div className='img-logo'>
                    <a href='https://en.wikipedia.org/wiki/HTML5' target='_blank' rel="noopener noreferrer">
                    <img src={html} alt='html' />
                    <h3>HTML5</h3></a>
                </div>
                <div className='img-logo'>
                <a href='https://en.wikipedia.org/wiki/Cascading_Style_Sheets' target='_blank' rel="noopener noreferrer">
                    <img src={css} alt='css' /><h3>CSS3</h3></a>
                </div>
                <div className='img-logo'>
                <a href='https://en.wikipedia.org/wiki/JavaScript' target='_blank' rel="noopener noreferrer">
                    <img src={javascript} alt='javascript' /><h3>JavaScript</h3></a>
                </div>
                <div className='img-logo'>
                <a href='https://en.wikipedia.org/wiki/React_(web_framework)' target='_blank' rel="noopener noreferrer">

                    <img src={react} alt='react'/><h3>React.Js</h3></a>
                </div>
                <div className='img-logo'>
                <a href='https://en.wikipedia.org/wiki/Node.js' target='_blank' rel="noopener noreferrer">
                    <img src={node} alt='node' /><h3>Node.Js</h3></a>
                </div>
                
                <div className='img-logo'>
                <a href='https://en.wikipedia.org/wiki/MongoDB' target='_blank' rel="noopener noreferrer">
                    <img src={mongodb} alt='mongodb' /><h3>MONGODB</h3></a>
                </div>
            </div>
        </div>
    )
}