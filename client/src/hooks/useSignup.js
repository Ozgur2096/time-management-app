import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
  const { dispatch } = useAuthContext();
  let error = null;

  const signUp = async user => {
    const { firstName, lastName, email, password } = user;
    const apiPath = process.env;
    console.log(apiPath);
    const jsonResult = await fetch(`http://localhost:5000/api/auth/signup`, {
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
    if (userResult.success) {
      localStorage.setItem('auth', JSON.stringify(userResult));
      dispatch({ type: 'LOGIN', payload: userResult });
    } else {
      error = userResult.msg;
    }
  };

  return { signUp, error };
};
