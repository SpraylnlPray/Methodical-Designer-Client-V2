import React from 'react';
import ProjectBox from './ProjectBox/ProjectBox';

const DesktopProjectsBox = () => {
  return (
    <div className='tile box p-0 is-ancestor mx-0 mt-1 has-background-grey-lighter is-vertical'>
      <h2 className='title is-3 mt-1 mb-0 ml-3'>
        <u>Projects</u>
      </h2>
      <div
        className='tile is-1 is-parent is-flex is-flex-wrap-wrap is-justify-content-center mb-3 mt-3'
        style={{
          width: '100%',
          maxHeight: `calc(100vh - 100px)`,
          overflowY: 'auto',
        }}
      >
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
      </div>
    </div>
  );
};

export default DesktopProjectsBox;
