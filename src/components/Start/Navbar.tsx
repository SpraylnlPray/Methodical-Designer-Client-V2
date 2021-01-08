import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import logo from './production-icon.png';

import { toggleMobileMenuVisibility as toggleMenuVisibility } from '../../actions/';

interface Props extends PropsFromRedux {}

const Navbar = (props: Props) => {
  const { isMenuVisible, toggleVisibility } = props;

  let isOpenClass = '';
  if (isMenuVisible) isOpenClass = 'is-active';

  return (
    <div className='hero-head'>
      <nav className='navbar'>
        <div className='container'>
          <div className='navbar-brand'>
            <a className='navbar-item'>
              <div className='image is-round is-32x32 mt-1 mr-2'>
                <img src={logo} alt='Logo' />
              </div>
              <h3 className='title is-5'>Methodical Designer</h3>
            </a>
            <a
              role='button'
              className={`navbar-burger ${isOpenClass}`}
              aria-label='menu'
              aria-expanded='false'
              onClick={toggleVisibility}
            >
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
            </a>
          </div>

          <div className={`navbar-menu ${isOpenClass}`}>
            <div className='navbar-end'>
              <a className='navbar-item'>Home</a>
              <a className='navbar-item'>Examples</a>
              <a className='navbar-item'>Documentation</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state: IStartMenuVisibilityState) => {
  console.log(state);
  return {
    isMenuVisible: state.isStartMenuVisible,
  };
};

const mapDispatchToProps = {
  toggleVisibility: toggleMenuVisibility,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Navbar);
