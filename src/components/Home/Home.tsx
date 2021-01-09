import React from 'react';
import { Breakpoint } from 'react-socks';
import DesktopHome from './DesktopHome';
import MobileHome from './MobileHome';

const Home = () => {
  return (
    <div style={{ maxHeight: '100vh', height: '100vh' }}>
      <Breakpoint customQuery='(max-width: 769px)' style={{ height: '100%' }}>
        <MobileHome />
      </Breakpoint>
      <Breakpoint customQuery='(min-width: 769px)' style={{ height: '100%' }}>
        <DesktopHome />
      </Breakpoint>
    </div>
  );
};

export default Home;
