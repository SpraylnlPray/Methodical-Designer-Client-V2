import React from 'react';
import ProjectBox from '../ProjectBox';

const MobileProjectsBox = () => {
  return (
    <div
      className='p-0 mx-0 is-flex is-flex-wrap-wrap is-justify-content-center my-3'
      style={{
        width: '100%',
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
  );
};

export default MobileProjectsBox;
