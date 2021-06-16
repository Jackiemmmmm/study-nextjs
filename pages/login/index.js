// import PropTypes from 'prop-types';
import { useMutation } from '@apollo/react-hooks';
import React, { useState } from 'react';
import { setCookie } from '~utils/cookie-operation';
import { Authorization } from '~utils/env-config';
import { LOGIN } from './gql';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login] = useMutation(LOGIN, {
    onCompleted: (data) => {
      const token = data.login?.authToken;
      if (token) {
        setCookie(Authorization, `Bearer ${token}`, 30);
      }
    },
  });
  const handleClickLogin = async () => {
    await login({ variables: { email, password } });
  };
  return (
    <div>
      <h1>LoginPage</h1>
      <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClickLogin}>Login</button>
    </div>
  );
}

Login.propTypes = {};

export default Login;
