import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { selectMale, selectFemale } from "../../helpers/selectGender";
import { selectCustomer, selectSeller } from "../../helpers/selectUserType";
import { isFormValid, handleSubmit } from "../../helpers/signUpValidations";
import "../../components/Welcome/styles/Sections.css";
import signUp from "../../assets/svg/signUp.svg";
import google from "../../assets/png/google.png";
import facebook from "../../assets/png/facebook.png";
import apple from "../../assets/png/apple.png";
import male from "../../assets/png/male.png";
import female from "../../assets/png/female.png";
import name from "../../assets/gif/name.gif";
import phone from "../../assets/gif/phone.gif";
import email from "../../assets/gif/email-file.gif";
import password from "../../assets/gif/password.gif";
import confirm from "../../assets/gif/confirm.gif";
import customer from "../../assets/png/customer.png";
import seller from "../../assets/png/seller.png";

export default function SignUp() {
  const maleImg = useRef(null);
  const femaleImg = useRef(null);
  const customerImg = useRef(null);
  const sellerImg = useRef(null);
  const policyCheckBoxElement = useRef(null);

  const [userGender, setUserGender] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [policyCheckBox, setPolicyCheckBox] = useState(false);

  return (
    <>
      <section className="section_1">
        <div className="left-side">
          <h1>
            Registration Form
            <span role="img" aria-label="emoji">
              😁
            </span>
          </h1>

          <p>Please, fill out your information.</p>

          <br />

          <form
            action=""
            method=""
            className="signUpForm"
            onSubmit={handleSubmit}
          >
            <div>
              <img
                src={male}
                alt="male"
                className="genderImg"
                ref={maleImg}
                onClick={() => selectMale(maleImg, femaleImg, setUserGender)}
              />
              <img
                src={female}
                alt="female"
                className="genderImg"
                ref={femaleImg}
                onClick={() => selectFemale(maleImg, femaleImg, setUserGender)}
              />
            </div>

            <div>
              <img src={name} alt="name" className="inputFieldImg" />
              <input
                type="text"
                name="name"
                placeholder="Full name"
                className="nameInput"
                value={nameValue}
                onChange={(e) => setNameValue(e.target.value)}
                required
              />
            </div>

            <div>
              <img src={phone} alt="phone" className="inputFieldImg" />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="phoneInput"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>

            <div>
              <img src={email} alt="email" className="inputFieldImg" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="emailInput"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
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
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                required
              />
            </div>

            <div>
              <img src={confirm} alt="confirmPass" className="inputFieldImg" />
              <input
                type="password"
                name="confirmPass"
                placeholder="Confirm password"
                className="confirmPassInput"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <div>
              <img
                src={customer}
                alt="customer"
                className="userType"
                ref={customerImg}
                onClick={() =>
                  selectCustomer(customerImg, sellerImg, setUserType)
                }
              />
              <img
                src={seller}
                alt="seller"
                className="userType"
                ref={sellerImg}
                onClick={() =>
                  selectSeller(customerImg, sellerImg, setUserType)
                }
              />
            </div>

            <div>
              <input
                ref={policyCheckBoxElement}
                type="checkbox"
                name="policies"
                id="policies"
                className="policiesInput"
                onChange={() => {
                  setPolicyCheckBox(policyCheckBoxElement.current.checked);
                }}
              />
              <label htmlFor="policies" className="checkBoxLabel">
                {" "}
                By creating an account you agree to <br /> our Terms of Service
                and Privacy Policy.
              </label>
            </div>

            {isFormValid(
              userGender,
              nameValue,
              emailValue,
              phoneNumber,
              passwordValue,
              confirmPassword,
              userType,
              policyCheckBox
            ) ? (
              <button type="submit">Sign up</button>
            ) : (
              <button type="submit" className="disabledBtn" disabled>
                Sign up
              </button>
            )}

            <Link className="alreadyHaveAcc" to="/login">
              Already have an account? Login!
            </Link>

            <div>
              <img src={google} alt="login" className="loginAPIs" />
              <img src={facebook} alt="login" className="loginAPIs" />
              <img src={apple} alt="login" className="loginAPIs" />
            </div>
          </form>
        </div>

        <div className="right-side">
          <img src={signUp} alt="signUp" loading="lazy" />
        </div>
      </section>
    </>
  );
}
