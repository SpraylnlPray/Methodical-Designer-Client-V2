import React from 'react';
import { Breakpoint } from 'react-socks';
import DesktopHome from './DesktopHome';
import MobileHome from './MobileHome';

const Home = () => {
  return (
    <div>
      <Breakpoint customQuery='(max-width: 769px)'>
        <MobileHome />
      </Breakpoint>
      <Breakpoint customQuery='(min-width: 769px)'>
        <DesktopHome />
      </Breakpoint>
    </div>
  );
};

export default Home;
