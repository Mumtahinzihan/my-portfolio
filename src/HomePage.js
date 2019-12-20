import React from 'react';
import HeaderNav from './Header/Header';
import GetWelcome from './Welcome/GetWelcome';
import GetMiddleBody from './GetMiddleBody/GetMiddleBody';
import SideBar from './SideBar/SideBar';
import Footer from './Footer/Footer';
export default function HomePage() {
    return (
      <>
        <HeaderNav />
        <SideBar />
        <GetWelcome />
        <GetMiddleBody />
        <Footer />
      </>
    )
  }