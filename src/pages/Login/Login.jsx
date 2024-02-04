import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { showPass } from "../../helpers/showPass";
import { isFormValid, handleSubmit } from "../../helpers/loginValidations";
import "../../components/Welcome/styles/Sections.css";
import login from "../../assets/svg/login.svg";
import email from "../../assets/gif/email-file.gif";
import password from "../../assets/gif/password.gif";
import google from "../../assets/png/google.png";
import facebook from "../../assets/png/facebook.png";
import apple from "../../assets/png/apple.png";

export default function Login() {
  const passInput = useRef(null);
  const rememberMeCheckBox = useRef(null);

  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isRememberMeChecked, setIsRememberMeChecked] = useState(false);

  return (
    <>
      <section className="section_1">
        <div className="left-side">
          <h1>
            Welcome Back!
            <span role="img" aria-label="emoji">
              🥰
            </span>
          </h1>

          <p>Sign in using your email or phone number.</p>

          <br />

          <form
            action=""
            method=""
            className="loginForm"
            onSubmit={handleSubmit}
          >
            <div>
              <img src={email} alt="email" className="inputFieldImg" />
              <input
                type="text"
                name="emailOrPhone"
                placeholder="Email or Phone"
                className="emailInput"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                required
              />
            </div>

            <div>
              <img src={password} alt="password" className="inputFieldImg" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="passInput"
                ref={passInput}
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                required
              />

              <br />
              <br />

              <label htmlFor="showPass" className="checkBoxLabel">
                <input
                  type="checkbox"
                  name="showPass"
                  id="showPass"
                  className="showPassInput"
                  onChange={() => showPass(passInput)}
                />{" "}
                Show password
              </label>
            </div>

            {isFormValid(emailOrPhone, passwordValue) ? (
              <button type="submit">Login</button>
            ) : (
              <button type="submit" className="disabledBtn" disabled>
                Login
              </button>
            )}

            <div>
              <label htmlFor="rememberMe" className="checkBoxLabel">
                <input
                  ref={rememberMeCheckBox}
                  type="checkbox"
                  name="rememberMe"
                  id="rememberMe"
                  className="rememberMeInput"
                  onChange={() => {
                    setIsRememberMeChecked(rememberMeCheckBox.current.checked);
                  }}
                />{" "}
                Remember Me
              </label>
              <br />
              <br />
              <span>Forget password?</span>
              <br /> <br />
              <Link className="register" to="/signup">
                Don't have an account? Sign up!
              </Link>
            </div>

            <div>
              <img src={google} alt="login" className="loginAPIs" />
              <img src={facebook} alt="login" className="loginAPIs" />
              <img src={apple} alt="login" className="loginAPIs" />
            </div>
          </form>
        </div>

        <div className="right-side">
          <img src={login} alt="login" loading="lazy" />
        </div>
      </section>
    </>
  );
}
