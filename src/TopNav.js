import React from 'react';


//class TopNav extends Component {

const NALogo = require('./images/NAlogo.gif');

const name = 'T A S C N A';
const subHeader = 'Trumbull Area Service Committee of Narcotics Anonymous';

const TopNav = () => {
  const toggleDrawer = () => {
    const drawer = document.querySelector('.locations-list');
    drawer.classList.toggle('open');
  }

    return (
      <nav className="topNav" >
        <div id="nav-inner">
          <div id="#navLogo">
              <img id="naLogo" alt="N A logo" src={NALogo} />
          </div>
            <div id="navText">
              <h1 id="navName">{name}</h1>
              <h2 id="navSubName">{subHeader}</h2>
            </div>
          <button
            id="menu"
            className="header__menu"
            aria-label="Open Close Text View"
            onClick={ () => toggleDrawer() }
          >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z"/>
          </svg>
          </button>
        </div>
      </nav>
    )
  }

export default TopNav;
