import React, { useState,useEffect } from "react";
import { signUp } from "../auth/auth";
import { infoNotification, errNotification } from "../core/toast";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [info, setInfo] = useState(null);
  // handle changes on input field
  const handleInputChange = (data) => (event) => {
    if (data === "name") setName(event.target.value);
    if (data === "email") setEmail(event.target.value);
    if (data === "password") setPassword(event.target.value);
    setError(null);
    setInfo(null);
  };

  const onSubmitButton = (event) => {
    const user = {
      name,
      email,
      password,
    };
    // console.log(event.target);
    //  console.log(user);
    //  console.log("submit");
    signUp(user).then((data) => {
     // console.log("data:", data);
      if (data.errors) {
        setError(data.errors[0].msg);
      } else {
        // crear state after submitting form
        setName("");
        setEmail("");
        setPassword("");
     //   console.log("sucessful signup");
        setError(null);
        setInfo("You are Signed up sucesfully.Please Sign in");
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

  return (
    <>
      <div className="form-control">
        <div>
          <label htmlFor="nameInput" className="form-heading">Name</label>
          <br />
          <input
            type="text"
            name="name"
            id="nameInput"
            onChange={handleInputChange("name")}
            value={name}
          />
        </div>
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
            <b>SignUp</b>
          </button>
        </div>
      </div>
    </>
  );
}

export default SignUp;
