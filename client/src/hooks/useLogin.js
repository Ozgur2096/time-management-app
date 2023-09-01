import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const { dispatch } = useAuthContext();
  const [errorLogin, setError] = useState(null);
  const navigate = useNavigate();

  const login = async user => {
    const { email, password } = user;
    const apiPath = process.env.REACT_APP_API_PATH;
    console.log(email, password);

    const jsonResult = await fetch(`${apiPath}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          email,
          password,
        },
      }),
    });

    const userResult = await jsonResult.json();
    console.log(userResult);
    if (userResult.success) {
      localStorage.setItem('auth', JSON.stringify(userResult));
      dispatch({ type: 'LOGIN', payload: userResult });
      setError(null);
      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);
    } else {
      setError(userResult.msg);
    }
  };

  return { login, errorLogin };
};
