import React from 'react';

import InvitesBox from '../InvitesBox/InvitesBox';
import ProfileBox from '../ProfileBox/ProfileBox';
import ProjectsBox from '../ProjectsBox/DesktopProjectsBox';

import './Home.css';

const DesktopHome = () => {
  return (
    <div style={{ marginTop: '10px', height: '100%' }}>
      <div
        className='columns is-flex is-align-items-center'
        style={{ height: '100%' }}
      >
        <div
          className='is-flex is-flex-direction-column column is-align-self-flex-start pb-4'
          style={{ height: '100%' }}
        >
          <h1 className='title is-h1 ml-5 mt-2'>Welcome Back John Smith!</h1>
          <ProfileBox />
          <div className='divider home-section-separator ml-3 mt-4' />
          <InvitesBox />
        </div>

        <div className='divider home-column-separator' />
        <div
          className='column is-align-self-flex-start pb-4'
          style={{ height: '100%' }}
        >
          <ProjectsBox />
        </div>
        <div className='divider home-column-separator' />
        <div className='column is-align-self-flex-start'>Desktop Home!</div>
      </div>
    </div>
  );
};

export default DesktopHome;
