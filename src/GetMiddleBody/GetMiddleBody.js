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
                     a lot of coding challanges, board challanges, personal and team projects, weekly reviews. </p>
                </div>
                <div className='story1'>
                    <p style={divStyle}>my personal info Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
                        egestas arcu, non pretium mauris. Maecenas felis metus, porttitor a aliquet nec, gravida a
                        ligula. Etiam venenatis eleifend velit, vel scelerisque tortor rutrum id. Aenean nec justo
                        id lacus cursus ornare ut et purus. Nunc sit amet blandit sem. Etiam maximus orci nec nibh
                         tristique facilisis. Maecenas bibendum ante at urna ullamcorper, et luctus felis feugiat.
                         Cras nisl nisi, suscipit non lorem vel, venenatis faucibus metus. Morbi placerat tortor
                         vitae tellus fringilla sagittis mollis vel lorem.</p>
                </div>
            </div>

            <div className='my-work'>
                <div className='story2'>
                    <p style={colorName}>I work with Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet egestas arcu, non pretium mauris. Maecenas felis metus, porttitor a aliquet nec, gravida a ligula. Etiam venenatis eleifend velit, vel scelerisque tortor rutrum id. Aenean nec justo id lacus cursus ornare ut et purus. Nunc sit amet blandit sem. Etiam maximus orci nec nibh tristique facilisis. Maecenas bibendum ante at urna ullamcorper, et luctus felis feugiat. Cras nisl nisi, suscipit non lorem vel, venenatis faucibus metus. Morbi placerat tortor vitae tellus fringilla sagittis mollis vel lorem.</p>
                </div>
                <div className='story2'>
                    <p >my personal info Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras sit amet egestas arcu, non pretium mauris. Maecenas felis metus,
                        porttitor a aliquet nec, gravida a ligula. Etiam venenatis eleifend velit, vel scelerisque
                        tortor rutrum id. Aenean nec justo id lacus cursus ornare ut et purus. Nunc sit amet blandit
                        sem. Etiam maximus orci nec nibh tristique facilisis. Maecenas bibendum ante at urna ullamcorper, et luctus felis feugiat. Cras nisl nisi, suscipit non lorem vel, venenatis faucibus metus. Morbi placerat tortor vitae tellus fringilla sagittis mollis vel lorem.</p>
                </div>
            </div>
            <h2>What do I use in my project?</h2>

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