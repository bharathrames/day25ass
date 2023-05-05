import React from 'react'
import Base from '../Base/Base'

const Login = () => {
  return (
    <Base>
      <div className="login-box">
        <form>
          <h1>Login</h1>
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" placeholder='Enter UserName'></input><br />
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" placeholder='Enter Password'></input><br />
          <input type="submit" value="Log In"></input>
        </form>
      </div>
    </Base>
  )
}

export default Login

