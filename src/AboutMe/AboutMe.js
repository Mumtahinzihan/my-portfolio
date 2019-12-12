import React from 'react';
import './AboutMe.css'
import { Link } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';


export default function AboutMe() {
    return (

        <div className='about'>
            <div id='sidebar'><SideBar /></div>
            <Link className='link' to='./'>Back to home page</Link>
            <h1 className='head'>Who Am I ?</h1>
            <p>It gives me great pleasure to welcome you to my website! In case this is your first time here,
            let me introduce myself.<br /><br />
                My name is Mumtahin Zihan, and I am an aspiring software developer.<br /><br />
                If you're here on official business, you should find any information about my work <Link className='here' to='my-projects'><b>here.</b></Link><br /><br />
                If you just want to know more about me and how I stumbled across my passion for software development,
            here you go:<br /><br />
                Since my childhood I have been very keen on understanding the nature and functionalities of computers. I wanted to be a Computer Engineer, but unfortunately, I had to step into a career as military officer.
                 I've lived and travelled many countries as a govermental Close Protection Officer (those guys in black suits and black sunglasses)
              but it didn't really fulfill me.<br />
                Don't get me wrong, it was nice travelling and meeting new people from different countries but I just felt
              like I needed to do something else, something more creative. <br />
                So I landed as a Sales and Marketing representative in a corporate environment, but this wasn't quite what I was looking for either.<br /><br />
                One day, out of curiosity, I decided to go to a Kodiri meet-up and was so impressed with the work they do,
                 which was coding. Websites, we think are so simple to look at but they require a lot of effort (and brainwork!)
              to make it look the way we want them to be - my fascination was grown then.<br /><br />
                I decided to join Kodiri bootcamp and learn the world of coding and voilà - here we are! I've enjoyed it since :)<br />
                You may also ask yourself , what I do in my free time - no I don't ONLY code and sit with my laptop! I enjoy playing
                 cricket, running, watching movies and series (big fan of FRIENDS).. But I also love to cook and try new recipes,
              go on long walks and enjoy the nature and of course travel and learn more about other cultures.<br /><br />
                So if there's anything else you want to learn about me, send me an email and let's connect!<br /><br />
                Hope to hear from you soon,<br /><br />
                Mumtahin
            </p>
        </div>
    )
}