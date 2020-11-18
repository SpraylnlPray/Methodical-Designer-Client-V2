import React from 'react';
import { Breakpoint } from 'react-socks';

import SignupForm from './SignupForm';

const SignUp = () => {
  const handleSubmit = (formValues: any) => {
    console.log('Signing up!');
  };

  return (
    <div>
      <Breakpoint customQuery='(max-width: 769px)'>
        <SignupForm
          // @ts-expect-error
          widthPercent={75}
          handleSubmit={handleSubmit}
        />
      </Breakpoint>
      <Breakpoint customQuery='(min-width: 769px)'>
        <SignupForm
          // @ts-expect-error
          widthPercent={25}
          handleSubmit={handleSubmit}
        />
      </Breakpoint>
    </div>
  );
};

export default SignUp;
