import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div
      style={{ height: '100vh', width: '25%' }}
      className='container is-flex is-flex-direction-column is-justify-content-center'
    >
      <form>
        <div className='field'>
          <label className='label'>Email</label>
          <div className='control has-icons-left'>
            <input className='input' type='email' placeholder='max@gmail.com' />
            <span className='icon is-small is-left'>
              <i className='fas fa-envelope' />
            </span>
          </div>
        </div>
        <div className='field'>
          <label className='label'>Password</label>
          <input className='input' type='password' />
        </div>
        <div className='is-pulled-right'>
          <button className='button is-link mr-3'>Login!</button>
          <Link to='/identify' className='button is-secondary '>
            Back
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
