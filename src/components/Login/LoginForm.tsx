import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import FormField from '../FormField/FormField';

import { required, email } from '../../InputChecks';

const LoginForm = (props: any) => {
  const {
    submitting,
    handleSubmit,
    onSubmit,
    widthPercent,
    reset,
    pristine,
  } = props;

  return (
    <div
      style={{ height: '100vh', width: `${widthPercent}%` }}
      className='container is-flex is-flex-direction-column is-justify-content-center'
    >
      <h2 className='title is-2 has-text-centered'>Log into your Account</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          name='email'
          type='email'
          label='Email'
          placeholder='max@gmail.com'
          component={FormField}
          validate={[required, email]}
          iconLeft='fa-envelope'
        />
        <Field
          name='password'
          type='password'
          label='Password'
          component={FormField}
          iconLeft='fa-key'
          validate={required}
        />
        <div className='is-pulled-right'>
          <button
            type='submit'
            className='button is-link mr-2'
            disabled={submitting}
          >
            Login!
          </button>
          <button
            className='button is-secondary mr-2'
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear
          </button>
          <Link to='/identify' className='button is-secondary '>
            Back
          </Link>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'SignUpDesktopForm',
})(LoginForm);
