import React, { useState, useEffect } from 'react';
import { useSignup } from '../hooks/useSignup';

export const LoginSignup = () => {
  const { signUp, error } = useSignup();
  const [message, setMessage] = useState(error);
  const [isSignup, setIsSignUp] = useState(false);
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    setMessage(error);
    console.log(error);
  }, [error]);

  const handleSubmit = e => {
    e.preventDefault();
    signUp(user);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1 className='text-2xl'>{isSignup ? 'Sign Up' : 'Login'}</h1>
        {isSignup && (
          <>
            <div>
              <label>First Name</label>
              <input
                type='text'
                onChange={e => setUser({ ...user, firstName: e.target.value })}
                value={user.firstName}
              ></input>
            </div>
            <div>
              <label>Last Name</label>
              <input
                type='text'
                onChange={e => setUser({ ...user, lastName: e.target.value })}
                value={user.lastName}
              ></input>
            </div>
          </>
        )}
        <div>
          <label>Email</label>
          <input
            type='email'
            onChange={e => setUser({ ...user, email: e.target.value })}
            value={user.email}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type='password'
            onChange={e => setUser({ ...user, password: e.target.value })}
            value={user.password}
          ></input>
        </div>
        {isSignup ? (
          <button type='submit'>Sign Up</button>
        ) : (
          <button type='submit'>Login</button>
        )}
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
      </form>
      <div>{message}</div>
    </>
  );
};
