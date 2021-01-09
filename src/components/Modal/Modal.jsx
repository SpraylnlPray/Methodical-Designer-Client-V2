import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Modal = (props) => {
  let { isOpen, toggleVisibility, children } = props;

  let isActiveClass = '';
  if (isOpen) isActiveClass = 'is-active';

  return ReactDOM.createPortal(
    <div className={`modal ${isActiveClass}`}>
      <div className='modal-background is-flex is-align-items-center'>
        <div className='modal-content'>{children}</div>
        <button
          className='modal-close'
          aria-label='close'
          onClick={toggleVisibility}
        />
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  toggleVisibility: PropTypes.func,
  children: PropTypes.element,
};

export default Modal;
