import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="wrapper">
      <div id="login">
        <h1>Login</h1>
        <div class="external">
          <h2>Goooogle</h2>
          <h3>|</h3>
          <h2>Facebook</h2>
        </div>
        <hr />
        <form action="#" method="post">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email@email.com"
            required
          />
          <input
            type="password"
            id="password1"
            name="password1"
            placeholder="********"
            required
          />
          <button type="submit">Create Account</button>
        </form>
        <p>
          Don't have an account? <a href="/sign-up">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
