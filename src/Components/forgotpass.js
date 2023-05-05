import React from 'react'
import Base from '../Base/Base'


const Forgotpass = () => {

  return (
    <Base>
      <div className='container'>
        <div class="forgot-password-page">
          <h1>Forgot Your Password?</h1>
          <p>Please enter your email address and we'll send you a link to reset your password.</p>
          <form>
            <label for="email">Email Address:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email address" />
            <button type="submit"
            >Send Link</button>
            <img className='forimg' src="https://img.freepik.com/premium-vector/concept-man-thinking-laptop-forgot-your-password-account-login_505620-922.jpg" />
          </form>
        </div>
      </div>
    </Base>
  )
}

export default Forgotpass