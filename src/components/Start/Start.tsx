import React from 'react';

import './Start.css';
import Main from './Main';
import Navbar from './Navbar';
import Footer from './Footer';

const Start = () => {
  return (
    <div className='hero is-fullheight'>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default Start;
