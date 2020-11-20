import React from 'react';
import ProfileBox from '../ProfileBox/ProfileBox';
import './Home.css';

const DesktopHome = () => {
  return (
    <div style={{ height: '100vh', marginTop: '10px' }}>
      <div
        className='columns is-flex is-align-items-center'
        style={{ height: '100%' }}
      >
        <div className='column is-align-self-flex-start'>
          <h1 className='title is-h1 ml-5 mt-2'>Welcome Back John Smith!</h1>
          <ProfileBox />
        </div>

        <div className='divider is-vertical' />
        <div className='column is-align-self-flex-start'>Desktop Home!</div>
        <div className='divider is-vertical' />
        <div className='column is-align-self-flex-start'>Desktop Home!</div>
      </div>
    </div>
  );
};

export default DesktopHome;
