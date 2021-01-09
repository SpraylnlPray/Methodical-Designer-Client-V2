import React from 'react';
import { connect } from 'react-redux';

import { toggleEditProfileVisibility as toggleVisibility } from '../../actions/';
import Modal from '../Modal/Modal';

// todo: refactor into smaller components
const ProfileBox = (props: any) => {
  const { isVisible, toggleVisibility } = props;

  return (
    <div>
      <Modal isOpen={isVisible} toggleVisibility={toggleVisibility}>
        <div className='box'>
          <header className='modal-card-head'>
            <p className='modal-card-title'>Edit your Profile</p>
          </header>
          <section className='modal-card-body is-flex is-flex-direction-column is-align-items-center'>
            <figure className='image is-128x128'>
              <img
                src='https://bulma.io/images/placeholders/128x128.png'
                alt='Image'
              />
            </figure>
            <div className='field mt-3' style={{ width: '70%' }}>
              <label className='label'>Username</label>
              <div className='control has-icons-left'>
                <input
                  className='input'
                  type='text'
                  placeholder='Max Example'
                  value='Username'
                />
                <span className='icon is-small is-left'>
                  <i className='fas fa-user'></i>
                </span>
              </div>
            </div>
            <div className='field mt-3' style={{ width: '70%' }}>
              <label className='label'>Email</label>
              <div className='control has-icons-left'>
                <input
                  className='input'
                  type='Email'
                  placeholder='example@example.com'
                  value='Email'
                />
                <span className='icon is-small is-left'>
                  <i className='fas fa-envelope'></i>
                </span>
              </div>
            </div>
          </section>
          <footer className='modal-card-foot'>
            <button className='button' onClick={toggleVisibility}>
              Cancel
            </button>
            <button className='button is-success' onClick={toggleVisibility}>
              Save Changes
            </button>
          </footer>
        </div>
      </Modal>
      <div className='box ml-3'>
        <div className='is-flex is-justify-content-space-between'>
          <h3 className='title is-3'>Your Profile</h3>
          <button className='button is-danger'>Log Out</button>
        </div>
        <article className='media'>
          <div className='media-left'>
            <figure className='image is-128x128'>
              <img
                src='https://bulma.io/images/placeholders/128x128.png'
                alt='Image'
              />
            </figure>
          </div>
          <div className='is-flex' style={{ width: '100%' }}>
            <div className='media-content'>
              <div className='content'>
                <p>
                  <strong className='is-size-4'>John Smith</strong>
                  <br />
                  <strong>
                    <u>
                      <small>Email</small>
                    </u>
                  </strong>
                  <br />
                  jsmith@gmail.com
                  <br />
                  <strong>
                    <u>
                      <small>Last Login</small>
                    </u>
                  </strong>
                  <br />
                  20.11.2020
                </p>
              </div>
            </div>
            <a
              className='level-item is-align-self-flex-end is-justify-self-end'
              aria-label='like'
            >
              <span className='icon is-large' onClick={toggleVisibility}>
                <i className='fas fa-2x fa-user-edit' aria-hidden='true'></i>
              </span>
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isVisible: state.editProfileStatus.isOpen,
  };
};

const mapDispatchToProps = {
  toggleVisibility,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(ProfileBox);
