import React from 'react';
import HeaderNav from './Header/Header';
import GetWelcome from './Welcome/GetWelcome';
import GetMiddleBody from './GetMiddleBody/GetMiddleBody';
import SideBar from './SideBar/SideBar';
import Footer from './Footer/Footer';
import AboutMe from './AboutMe/AboutMe';
export default function HomePage() {
    return (
      <div>
        <HeaderNav />
        <SideBar />
        <GetWelcome />
        <GetMiddleBody />
        <GetMiddleBody />
        <Footer />
        <AboutMe />
      </div>
    )
  }