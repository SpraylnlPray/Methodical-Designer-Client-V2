import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import FormField from '../FormField/FormField';

import { required, email, minLength } from '../../InputChecks';

const minLength8 = minLength(8);

// todo: extract into separate file to make usable for mobile as well
const SignUp = (props: any) => {
  const handleSubmit = (formValues: any) => {
    console.log('Singin up!');
  };

  const { pristine, reset, submitting } = props;
  return (
    <div
      style={{ height: '100vh', width: '25%' }}
      className='container is-flex is-flex-direction-column is-justify-content-center'
    >
      <form onSubmit={props.handleSubmit(handleSubmit)}>
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
            className='button is-link mr-3'
            disabled={submitting}
          >
            Sign Up!
          </button>
          <button
            className='button is-secondary mr-3'
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
  form: 'SignUpForm',
})(SignUp);
