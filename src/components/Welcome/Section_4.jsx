import React from "react";
import { Link } from "react-router-dom";
import "./styles/Sections.css";
import joinUs from "../../assets/svg/joinUs.svg";

export default function Section_2() {
  return (
    <section className="section_4">
      <div className="left-side">
        <h1>
          Join Us
          <span role="img" aria-label="emoji">
            😍
          </span>
        </h1>

        <p>
          We're thrilled to have you on board with us! Your presence is truly
          invaluable,
          <br />
          and we look forward to make you happy.
        </p>

        <Link className="goToLoginBtn" to="/login">
          Login
        </Link>
        <Link className="goToSignUpBtn" to="/signup">
          Sign Up
        </Link>
      </div>

      <div className="right-side">
        <img src={joinUs} alt="joinUs" loading="lazy" />
      </div>
    </section>
  );
}
