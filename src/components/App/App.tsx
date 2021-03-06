import React from 'react';
import Favicon from 'react-favicon';
import Start from '../Start/Start';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Identify from '../Identify/Identify';
import SignUp from '../SignUp/SignUp';
import Login from '../Login/Login';
import Home from '../Home/Home';

const icon_url =
  process.env.REACT_APP_ENV === 'production'
    ? '../production-icon.png'
    : '../dev-icon.png';

function App() {
  return (
    <div className='has-background-light'>
      <Favicon url={icon_url} />
      <Router>
        <Switch>
          <Route exact path='/' component={Start} />
          <Route path='/identify' component={Identify} />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={Login} />
          <Route path='/home' component={Home} />
          <Redirect to='/' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
