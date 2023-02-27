import React from 'react'
import { signIn } from 'next-auth/react'
import { AiFillGoogleCircle, AiFillGithub } from 'react-icons/ai'

const Login = () => {
  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form>
        <h3>Login Here</h3>

        <label htmlFor="username">Email</label>
        <input
          type="text"
          placeholder="Enter your email"
          id="username"
          data-cy="email-input"
        ></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          data-cy="password-input"
        ></input>
        <button className="button--login" data-cy="login-btn">
          Log In
        </button>
        <div className="social" data-cy="google-login-btn">
          <div className="go" onClick={() => signIn('google')}>
            {/* <i className="fab fa-google"></i> */}
            <AiFillGoogleCircle style={{ paddingTop: '2px' }} /> Google
          </div>
          <div
            className="gi"
            data-cy="gitHub-login-btn"
            onClick={() =>
              signIn('github', { callbackUrl: 'http://localhost:3000/parents' })
            }
          >
            <AiFillGithub style={{ paddingTop: '2px' }} /> GitHub
          </div>
        </div>
      </form>
    </>
  )
}

export default Login
