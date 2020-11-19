import React from 'react';
import { Link } from 'react-router-dom';
import logo from './production-icon.png';

const Main = () => {
  return (
    <div className='hero-body is-flex is-align-items-center is-flex-direction-column'>
      <div className='container is-flex is-align-items-center is-justify-content-space-evenly is-flex-direction-column'>
        <figure className='image logo mt-3'>
          <img className='is-rounded' src={logo} />
        </figure>
        <div className='is-flex is-flex-direction-column is-align-items-center'>
          <h1 className='title'>Methodical Designer</h1>
          <h2 className='subtitle'>Graph Your Projects</h2>
        </div>
        <div>
          <Link to='/identify' className='button is-primary mx-3'>
            Get Started
          </Link>
          <button className='button is-secondary mx-3'>See More</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
