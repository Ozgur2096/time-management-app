import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { useNavigate } from 'react-router-dom';

export const useSignup = () => {
  const { dispatch } = useAuthContext();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const signUp = async user => {
    const { firstName, lastName, email, password } = user;
    const apiPath = process.env.REACT_APP_API_PATH;

    const jsonResult = await fetch(`${apiPath}/auth/signup`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          firstName,
          lastName,
          email,
          password,
        },
      }),
    });

    const userResult = await jsonResult.json();
    // console.log(userResult);
    if (userResult.success) {
      localStorage.setItem('auth', JSON.stringify(userResult));
      dispatch({ type: 'LOGIN', payload: userResult });
      setError(null);
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } else {
      setError(userResult.msg);
    }
  };

  return { signUp, error };
};
