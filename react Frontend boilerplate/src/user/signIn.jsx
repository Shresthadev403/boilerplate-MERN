import React, { useState ,useEffect} from "react";
import { Navigate, Link } from "react-router-dom";
import { setJwt, signIn } from "../auth/auth";
import { errNotification, infoNotification } from "../core/toast";
import SocialLogin from "./socialLogin";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [info, setInfo] = useState(null);
  const [redirectToHome, setRedirectToHome] = useState(false);
  // handle changes on input field
  const handleInputChange = (data) => (event) => {
    if (data === "email") setEmail(event.target.value);
    if (data === "password") setPassword(event.target.value);
    setError(null);
    setInfo(null);
  };

  const onSubmitButton = (event) => {
    const user = {
      email,
      password,
    };
    // console.log(event.target);
    //  console.log(user);
    //  console.log("submit");
    signIn(user).then((data) => {
    //  console.log("signin data:", data);
      if (data.errors) {
        setError(data.errors[0].msg);
      } else if (data.error) {
        setError(data.error);
      } else {
        // crear state after submitting form
        // setEmail("");
        // setPassword("");
       // console.log("sucessful signin");
        // setError(null);
        setInfo("Sign in Sucessful");
        setJwt(data.data, () => {
          setRedirectToHome(true);
        });
      }
    });
  };
  useEffect(() => {
    if (error) {
      errNotification(error);
    }
    if (info) {
      infoNotification(info);
    }
  }, [error, info]);

  if (redirectToHome) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="form-control">
        <div>
          <label htmlFor="emailInput" className="form-heading">Email</label>
          <br />
          <input
            type="text"
            name="name"
            id="emailInput"
            onChange={handleInputChange("email")}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="passwordInput" className="form-heading">Password</label>
          <br />
          <input
            type="password"
            name="name"
            id="passwordInput"
            onChange={handleInputChange("password")}
            value={password}
          />
        </div>
        <div>
          <button
            type="submit"
            className="button-submit"
            onClick={onSubmitButton}
          >
            <b>SignIn</b>
          </button>
        </div>
        <div style={{border:" solid blue" ,minWidth:"200px",}}>
          <SocialLogin />
        </div>
        <div>
          <Link to="/forgetpassword">
            <b>forget passowrd?</b>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SignIn;
