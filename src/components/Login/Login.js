import React from "react";
import "./Login.css";
import useAuth from "../../hooks/useAuth";
const Login = () => {
  const { signInUsingGoogle } = useAuth();
  return (
    <div className="body">
      <div className="form-container">
        <form id="contact" action="" method="post">
          <h3>Login Form</h3>
         
          <fieldset>
            <input
              placeholder="Your name"
              type="text"
              tabindex="1"
              required
              autofocus
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your Email Address"
              type="email"
              tabindex="2"
              required
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your Phone Number (optional)"
              type="tel"
              tabindex="3"
              required
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Type Password"
              type="pass"
              tabindex="4"
              required
            />
          </fieldset>

          <fieldset>
            <button
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
            >
              Submit
            </button>
          </fieldset>
          <fieldset>
            <button
              name="submit"
              type="submit"
              className="signInUsingGoogle"
              onClick={signInUsingGoogle}
            >
              Sign With Google
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
