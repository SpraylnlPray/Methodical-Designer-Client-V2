import React from 'react';
import logo from './production-icon.png';

import './Start.css';

const Start = () => {
  return (
    <div className='hero is-fullheight'>
      <div className='hero-head'>
        <nav className='navbar'>
          <div className='container'>
            <div className='navbar-brand'>
              <a className='navbar-item'>
                <div className='image is-round is-32x32 mt-1 mr-2'>
                  <img src={logo} alt='Logo' />
                </div>
                <h3 className='title is-5'>Methodical Designer</h3>
              </a>
            </div>

            <div id='navbarMenuHeroA' className='navbar-menu'>
              <div className='navbar-end'>
                <a className='navbar-item is-active'>Home</a>
                <a className='navbar-item'>Examples</a>
                <a className='navbar-item'>Documentation</a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className='hero-body is-flex is-align-items-center is-flex-direction-column'>
        <div className='container is-flex is-align-items-center is-justify-content-space-around is-flex-direction-column'>
          <figure className='image logo mt-3'>
            <img className='is-rounded' src={logo} />
          </figure>
          <div className='is-flex is-flex-direction-column is-align-items-center'>
            <h1 className='title'>Methodical Designer</h1>
            <h2 className='subtitle'>Graph Your Projects</h2>
          </div>
          <div>
            <button className='button is-primary mx-3'>Get Started</button>
            <button className='button is-secondary mx-3'>See More</button>
          </div>
        </div>
      </div>

      <div className='hero-foot'>
        <nav className='tabs'>
          <div className='container'>
            <ul>
              <li>
                <a>Contact</a>
              </li>
              <li>
                <a>Contribute</a>
              </li>
              <li>
                <a>Members</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Start;
