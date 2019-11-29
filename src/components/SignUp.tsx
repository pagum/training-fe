import React, { ChangeEvent, FormEvent } from 'react';
import { requestCreateUserAccount } from '../api';

export const SignUp = () => {

  const createUserAccount = (e:FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    const target = e.target
    //@ts-ignore
    let username =  target[`username`].value;
    //@ts-ignore
    let password =  target[`password`].value;
    console.log("Creating!",username,password);
      requestCreateUserAccount({username,password})
  }

  return <div className="card p-3 col-6">
  <h2>
      Complete the following form to create a new account.
  </h2>

  <form onSubmit={createUserAccount}>
      <label>
          <span>User Name</span>
          <input type="text" placeholder="username" name="username" defaultValue="Morty" className="form-control"/>
      </label>
      <label>
          <span>Password</span>
          <input type="text" placeholder="password" name="password" defaultValue="COURAGE" className="form-control mt-2"/>
      </label>

      <p>A user by that name already exists.</p>
      <button type="submit" className="form-control mt-2 btn btn-primary">Sign Up</button>
  </form>

</div>
}