import React, { useState } from 'react';

export const LoginSignup = () => {
  const [isSignup, setIsSignUp] = useState(false);
  return (
    <div>
      <h1 className='text-2xl'>{isSignup ? 'Sign Up' : 'Login'}</h1>
      {isSignup && (
        <>
          <div>
            <label>First Name</label>
            <input type='text'></input>
          </div>
          <div>
            <label>Last Name</label>
            <input type='text'></input>
          </div>
        </>
      )}
      <div>
        <label>Email</label>
        <input type='email'></input>
      </div>
      <div>
        <label>Password</label>
        <input type='password'></input>
      </div>
      {isSignup ? <button>Sign Up</button> : <button>Login</button>}
      <p>
        Don't you have an account?{' '}
        <span
          onClick={() => {
            setIsSignUp(true);
          }}
        >
          Sign up
        </span>
      </p>
    </div>
  );
};
