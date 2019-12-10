import React from 'react';
import './SideBar.css';

function openNav(e) {
  document.getElementById("menu").style.right = "0px";
  document.getElementById("menu").style.top = "0px";
}
function closeNav(e) {
  document.getElementById("menu").style.right = "-350px";
  document.getElementById("menu").style.top= "0";
}
function SideBar() {
  return (
    <div id='menu' className='menu'>
    <span id='cross' onClick={(e)=> closeNav()}>X <br/> close</span>
    <span id='btn' onClick={(e)=> openNav()}>&Xi;</span>
    <div className='side-bar' >
      <div className='side'><a href='link'>About</a></div>
      <div className='side'><a href='link'>Contact</a></div>
      <div className='side'><a href='link'>About</a></div>
      <div className='side'><a href='link'>Email</a></div>
    </div>
    </div>
  )
}
export default SideBar;