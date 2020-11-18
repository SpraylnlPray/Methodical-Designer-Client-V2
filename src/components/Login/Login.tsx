import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import FormField from '../FormField/FormField';
import { required, email } from '../../InputChecks';

const Login = (props: any) => {
  const handleSignIn = (formValues: any) => {
    console.log('Signing in!');
  };

  const { pristine, reset, submitting } = props;

  return (
    <div
      style={{ height: '100vh', width: '25%' }}
      className='container is-flex is-flex-direction-column is-justify-content-center'
    >
      <form onSubmit={props.handleSubmit(handleSignIn)}>
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
            className='button is-link mr-3'
            disabled={submitting}
          >
            Login!
          </button>
          <button
            className='button is-secondary mr-3'
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
  form: 'LoginForm',
})(Login);
