import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import FormField from '../FormField/FormField';

import { required, email, minLength } from '../../InputChecks';
const minLength8 = minLength(8);

const SignupForm = (props: any) => {
  const { submitting, handleSubmit, widthPercent, reset, pristine } = props;

  return (
    <div
      style={{ height: '100vh', width: `${widthPercent}%` }}
      className='container is-flex is-flex-direction-column is-justify-content-center'
    >
      <h2 className='title is-2 has-text-centered'>
        Sign up for a new Account
      </h2>
      <form onSubmit={() => props.handleSubmit(handleSubmit)}>
        <Field
          name='name'
          type='text'
          label='Name'
          placeholder='Max Mustermann'
          validate={required}
          component={FormField}
          iconLeft='fa-user'
        />
        <Field
          name='email'
          type='email'
          label='Email'
          placeholder='max@gmail.com'
          component={FormField}
          validate={[email, required]}
          iconLeft='fa-envelope'
        />
        <Field
          name='password'
          type='password'
          label='Password'
          component={FormField}
          validate={[minLength8, required]}
          iconLeft='fa-key'
        />
        <div className='is-pulled-right'>
          <button
            type='submit'
            className='button is-link mr-2'
            disabled={submitting}
          >
            Sign Up!
          </button>
          <button
            className='button is-secondary mr-2'
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear
          </button>
          <Link to='/identify' className='button is-secondary'>
            Back
          </Link>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'SignUpDesktopForm',
})(SignupForm);
