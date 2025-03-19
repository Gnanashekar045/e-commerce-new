import React from 'react'
import '../Pages/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your name' />
          <input type="email" placeholder='Enter your email' />
          <input type="password" placeholder='Enter your password' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already you have and account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing. i agree to the terms and conditions and use of the privacy policy </p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup;