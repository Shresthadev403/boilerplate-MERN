import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { getJwt, signUp, updatejwt } from "../auth/auth";
import { updateUser } from "../auth/user";
import { infoNotification, errNotification } from "../core/toast";
import { useParams,useNavigate } from "react-router-dom";

function UpdateProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [info, setInfo] = useState(null);

  const { userId } = useParams();
  const navigate=useNavigate();
  // handle changes on input field
  const handleInputChange = (data) => (event) => {
    if (data === "name") setName(event.target.value);
    if (data === "email") setEmail(event.target.value);
    if (data === "password") setPassword(event.target.value);
    setError(null);
    setInfo(null);
  };

  const onSubmitButton = (event) => {
    const newData = {
      name,
      email,
      password,
    };
    updateUser(newData, userId).then((data) => {
      console.log("data:", data);
      if (data.errors) {
        setError(data.errors[0].msg);
      } else {
        // jwt
      //  updatejwt(data.data);
      if(data.data._id===getJwt().user._id){
        updatejwt(data.data);
        navigate(`../profile/${userId}`);
      }

  
        // crear state after submitting form
        setName("");
        setEmail("");
        setPassword("");
        console.log("user update sucessful");
        setError(null);
        setInfo("Details updated sucessfully");
        navigate(`/user/profile/${userId}`);
      
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
          <label htmlFor="nameInput">Name</label>
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
          <label htmlFor="emailInput">Email</label>
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
          <label htmlFor="passwordInput">Password</label>
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
            <b>Update</b>
          </button>
        </div>
      </div>
    </>
  );
}

export default UpdateProfile;
