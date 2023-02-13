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
          <input type="text" id="name" name="name" placeholder="Display Name" />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email@email.com"
          />
          <input
            type="password"
            id="password1"
            name="password1"
            placeholder="********"
          />
          <input
            type="password"
            id="password2"
            name="password2"
            placeholder="Re-enter Password"
          />
          <label class="checkContainer">
            <p>
              By signing up you agree to
              <a href="#"> our terms of service</a>
            </p>
            <input
              type="checkbox"
              id="checkbox"
              name="checkbox"
              placeholder=""
            />
            <span class="checkmark"></span>
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
