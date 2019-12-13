import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

function openNav(e) {
  document.getElementById("menu").style.right = "0";
}
function closeNav(e) {
  document.getElementById("menu").style.right = "-350%";
}
function SideBar() {
  return (
    <div id='menu' className='menu' >
      <span id='cross' onClick={(e) => closeNav()}>X</span>
      <span id='btn' onClick={(e) => openNav()}>&#9776;</span>
      <div className='side-bar' >
        <Link to='./about-me' className='side'>About-me</Link>
        <Link to='./my-projects' className='side'>My projects</Link>
        <Link to='./my-resume' className='side'>Resume</Link>
        <a className='side' href='mailto:mumtahin@yahoo.com'>Email</a>
      </div>
    </div>
  )
}
export default SideBar;