import Favicon from 'react-favicon';
import './App.css';
import React from 'react';

const icon_url =
  process.env.REACT_APP_ENV === 'production'
    ? '../production-icon.png'
    : '../dev-icon.png';

function App() {
  return (
    <div>
      <Favicon url={icon_url} />
      hello
    </div>
  );
}

export default App;
