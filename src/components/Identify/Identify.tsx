import React from 'react';
import { Link } from 'react-router-dom';

// Hier abhängig von Viewport buttons rendern, desktop ist link, mobile öffnet modal
const Identify = () => {
  return (
    <div
      style={{ height: '100vh' }}
      className='is-flex is-flex-direction-column is-align-items-center is-justify-content-center'
    >
      <div
        style={{ height: '30%' }}
        className='is-flex is-flex-direction-column is-justify-content-space-around'
      >
        <Link to='/login' className='button is-primary'>
          Login
        </Link>
        <Link to='/signup' className='button is-primary'>
          Sign Up
        </Link>
        <Link to='/' className='button is-secondary'>
          Back
        </Link>
      </div>
    </div>
  );
};

export default Identify;
