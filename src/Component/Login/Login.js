import React from "react";
import './Login.css';
import img from './login-logo.svg'
const Login = (props) => {
    return (
        <div className="login">
        <img
          src={img}
          alt="linkin logo"
        />
        <form>
          <input 
            type="text"
            value=""
            placeholder="Full name (required if registering)"
          />
          <input
            type="text"
            value=""
            placeholder="Profile picture URL (optional)"
          />
          <input
            type="email"
            value=""
            placeholder="Email"
          />
          <input
            type="password"
            value=""
            placeholder="Password"
          />
          <button type="submit">Sign In</button>
        </form>
        <p>
          Not a member? {" "}
          <span className="login_register" >Register Now</span>
        </p>
      </div>
    )}
export default Login;