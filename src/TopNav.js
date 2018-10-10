import React, { Component } from 'react';
//import * from './images';
////  <i class="listIcon" style="line-height: inherit;">clear</i>
class TopNav extends Component {

componentDidMount() {
  this.addListener()
}
  /*
   * Open the drawer when the menu ison is clicked.
   */

addListener=() => {
  var menu = document.querySelector('#menu');
//  var main = document.querySelector('main');
  var drawer = document.querySelector('.locations-list');

  menu.addEventListener('click', function(e) {
    drawer.classList.toggle('open');
    e.stopPropagation();
  });
//  main.addEventListener('click', function() {
//    drawer.classList.remove('open');
//  })
}



  render() {



    return (
      <nav className="topNav" >
        <div id="nav-inner">
          <div id="#navLogo">
              <img id="naLogo" alt="N A logo" src={require('./images/NAlogo.gif')} />
          </div>
            <div id="navText">
              <h1 id="navName">T A S C N A</h1>
              <h2 id="navSubName">Trumbull Area Service Committee of Narcotics Anonymous</h2>
            </div>

  <button id="menu" className="header__menu" aria-label="Open Close Text View">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z"/>
        </svg>
      </button>

        </div>
      </nav>
    )
  }
}


export default TopNav;
