import React from 'react';
import { reduxForm } from 'redux-form';
import { Breakpoint } from 'react-socks';

import LoginForm from './LoginForm';

const Login = () => {
  const handleSubmit = (formValues: any) => {
    console.log('Signing in!');
  };

  return (
    <div>
      <Breakpoint customQuery='(max-width: 769px)'>
        <LoginForm
          // @ts-expect-error
          widthPercent={75}
          handleSubmit={handleSubmit}
        />
      </Breakpoint>
      <Breakpoint customQuery='(min-width: 769px)'>
        <LoginForm
          // @ts-expect-error
          widthPercent={25}
          handleSubmit={handleSubmit}
        />
      </Breakpoint>
    </div>
  );
};

export default reduxForm({
  form: 'LoginForm',
})(Login);
