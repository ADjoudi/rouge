import React from "react";
import "./signup.css";

const SignUp = () => {
  return (
    <div className="container">
      <div id="signup">
        <h1>Sign Up</h1>
        <div class="external">
          <h2>Goooogle</h2>
          <h3>|</h3>
          <h2>Facebook</h2>
        </div>
        <hr />
        <form action="#" method="post">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Display Name"
            required
          />
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
          <input
            type="password"
            id="password2"
            name="password2"
            placeholder="Re-enter Password"
            required
          />
          <label class="checkContainer">
            <input
              type="checkbox"
              id="checkbox"
              name="checkbox"
              placeholder=""
              required
            />
            <span class="checkmark"></span>
            <p>
              By signing up you agree to
              <a href="#"> our terms of service</a>
            </p>
          </label>
          <button type="submit">Create Account</button>
        </form>
        <p>
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
