import React from 'react';
import { Breakpoint } from 'react-socks';
import { useHistory } from 'react-router-dom';

import SignupForm from './SignupForm';

const SignUp = () => {
  const history = useHistory();
  const handleSubmit = (formValues: any) => {
    console.log('Signing up!');
    history.push('/home');
  };

  return (
    <div>
      <Breakpoint customQuery='(max-width: 769px)'>
        <SignupForm
          // @ts-expect-error
          widthPercent={75}
          onSubmit={handleSubmit}
        />
      </Breakpoint>
      <Breakpoint customQuery='(min-width: 769px)'>
        <SignupForm
          // @ts-expect-error
          widthPercent={25}
          onSubmit={handleSubmit}
        />
      </Breakpoint>
    </div>
  );
};

export default SignUp;
