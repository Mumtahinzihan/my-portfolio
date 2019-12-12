import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

function openNav(e) {
  document.getElementById("menu").style.right = "0px";
  // document.getElementById("menu").style.top = "0px";
}
function closeNav(e) {
  document.getElementById("menu").style.right = "-350px";
  // document.getElementById("menu").style.top= "0";
}
function SideBar() {
  return (
    <div id='menu' className='menu' >
    <span id='cross' onClick={(e)=> closeNav()}>X</span>
    <span id='btn' onClick={(e)=> openNav()}>&#9776;</span>
    <div className='side-bar' >
      <Link to='./about-me' className='side'>About-me</Link>
      <Link to='./my-projects' className='side'>My projects</Link>
      <a  className='side' href='mailto:mumtahin@yahoo.com'>Email</a>
    </div>
    </div>
  )
}
export default SideBar;