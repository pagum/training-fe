import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { requestAuthenticateUser } from '../api';

export const Login = () => {
  const authenticateUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //@ts-ignore
    let username = e.target[`username`].value;

    //@ts-ignore
    let password = e.target[`password`].value;
    requestAuthenticateUser({ username, password });
  };

  return (
    <div className='card p-3 col-6'>
      <h2>Please login</h2>
      <h3>
        <Link to='signup'>Don't have an account? Sign up.</Link>
      </h3>
      <form onSubmit={authenticateUser}>
        <input
          type='text'
          placeholder='username'
          name='username'
          defaultValue='Dev'
          className='form-control'
        />
        <input
          type='password'
          placeholder='password'
          name='password'
          defaultValue='TUPLES'
          className='form-control mt-2'
        />

        <p>Login incorrect.</p>

        <button type='submit' className='form-control mt-2 btn btn-primary'>
          Login
        </button>
      </form>
    </div>
  );
};
