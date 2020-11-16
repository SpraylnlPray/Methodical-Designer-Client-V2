import React from 'react';
import Favicon from 'react-favicon';
import Start from '../Start/Start';
import './App.css';

const icon_url =
  process.env.REACT_APP_ENV === 'production'
    ? '../production-icon.png'
    : '../dev-icon.png';

function App() {
  return (
    <div className='has-background-light'>
      <Favicon url={icon_url} />
      <Start />
    </div>
  );
}

export default App;
