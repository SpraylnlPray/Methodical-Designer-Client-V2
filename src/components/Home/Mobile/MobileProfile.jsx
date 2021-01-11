import React from 'react';
import { Breakpoint } from 'react-socks';

const MobileProfile = () => {
  return (
    <div className='is-flex-grow-2'>
      <Breakpoint customQuery='(max-width: 769px)' style={{ height: '100%' }}>
        <div>Mobile Profile Page!</div>
      </Breakpoint>
    </div>
  );
};

export default MobileProfile;
