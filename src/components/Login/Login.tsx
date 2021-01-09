import React from 'react';
import { reduxForm } from 'redux-form';
import { Breakpoint } from 'react-socks';
import { useHistory } from 'react-router-dom';

import LoginForm from './LoginForm';

const Login = () => {
  const history = useHistory();

  const handleSubmit = (formValues: any) => {
    history.push('/home');
  };

  return (
    <div>
      <Breakpoint customQuery='(max-width: 769px)'>
        <LoginForm
          // @ts-expect-error
          widthPercent={75}
          onSubmit={handleSubmit}
        />
      </Breakpoint>
      <Breakpoint customQuery='(min-width: 769px)'>
        <LoginForm
          // @ts-expect-error
          widthPercent={25}
          onSubmit={handleSubmit}
        />
      </Breakpoint>
    </div>
  );
};

export default reduxForm({
  form: 'LoginForm',
})(Login);
