import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { Navigate } from "react-router-dom";
import { setJwt, signIn } from "../auth/auth";
import { errNotification, infoNotification } from "../core/toast";
import { forgetPassword } from "../auth/user";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [info, setInfo] = useState(null);
  // const[redirectToHome,setRedirectToHome]=useState(false);
  // handle changes on input field
  const handleInputChange = (data) => (event) => {
    if (data === "email") setEmail(event.target.value);
    setError(null);
    setInfo(null);
  };

  const onSubmitButton = (event) => {
    const user = {
      email,
    };
    //  console.log(user);
    // console.log(event.target);
    //  console.log(user);
    //  console.log("submit");
    forgetPassword(user).then((data) => {
      //  console.log("forget data:", data);
      if (data.data.errors) {
        setError("User with this email doesnot exist.Please Enter valid email");
      } else if (data.data.error) {
        setError(data.data.error.msg);
      } else {
        // crear state after submitting form
        // setEmail("");
        // setPassword("");
        //   console.log("Reset link sent to email");
        setError(null);
        setInfo(data.data.msg);
        // setJwt(data.data,()=>{
        //   setRedirectToHome(true);
        // });
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
          <button
            type="submit"
            className="button-submit"
            onClick={onSubmitButton}
          >
            <b>Send Reset link your email</b>
          </button>
          <div>
            {info && (
              <p>
                Reset link has been sent to your email (Please follow the
                instruction there)
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgetPassword;
