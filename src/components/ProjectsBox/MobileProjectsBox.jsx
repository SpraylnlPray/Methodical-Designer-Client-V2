import React from 'react';
import ProjectBox from './ProjectBox/ProjectBox';

const MobileProjectsBox = () => {
  return (
    <div className='p-0 is-ancestor mx-0 mt-1 is-vertical'>
      <div
        className='is-1 is-parent is-flex is-flex-wrap-wrap is-justify-content-center mb-3 mt-3'
        style={{
          width: '100%',
          maxHeight: `calc(100vh - 250px)`,
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

export default MobileProjectsBox;
