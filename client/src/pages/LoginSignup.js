import React, { useState, useEffect } from 'react';
import { useSignup } from '../hooks/useSignup';
import { useLogin } from '../hooks/useLogin';

export const LoginSignup = () => {
  const { signUp, error } = useSignup();
  const { login, errorLogin } = useLogin();
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
  }, [error]);

  const handleSubmit = e => {
    e.preventDefault();
    isSignup ? signUp(user) : login(user);
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <form
        className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
        onSubmit={handleSubmit}
      >
        <h1 className='text-2xl mb-4'>{isSignup ? 'Sign Up' : 'Login'}</h1>
        {isSignup && (
          <>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                First Name
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                type='text'
                onChange={e => setUser({ ...user, firstName: e.target.value })}
                value={user.firstName}
              ></input>
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Last Name
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                type='text'
                onChange={e => setUser({ ...user, lastName: e.target.value })}
                value={user.lastName}
              ></input>
            </div>
          </>
        )}
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Email
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type='email'
            onChange={e => setUser({ ...user, email: e.target.value })}
            value={user.email}
          ></input>
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Password
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type='password'
            onChange={e => setUser({ ...user, password: e.target.value })}
            value={user.password}
          ></input>
        </div>
        {isSignup ? (
          <>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Sign Up
            </button>
            <p className='mt-4'>
              Already have an account?{' '}
              <span
                className='text-blue-500 cursor-pointer'
                onClick={() => setIsSignUp(false)}
              >
                Login
              </span>
            </p>
          </>
        ) : (
          <>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Login
            </button>
            <p className='mt-4'>
              Don't have an account?{' '}
              <span
                className='text-blue-500 cursor-pointer'
                onClick={() => setIsSignUp(true)}
              >
                Sign up
              </span>
            </p>
          </>
        )}
      </form>
      {message && <div className='text-red-500'>{message}</div>}
    </div>
  );
};
