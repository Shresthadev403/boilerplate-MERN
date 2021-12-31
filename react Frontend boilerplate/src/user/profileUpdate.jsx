import React, { useState, useRef } from "react";
import { useEffect } from "react/cjs/react.development";
import { getJwt, signUp, updatejwt } from "../auth/auth";
import { updateUser } from "../auth/user";
import { infoNotification, errNotification } from "../core/toast";
import { useParams, useNavigate } from "react-router-dom";

function UpdateProfile() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [aboutme, setAboutme] = useState("");
  const [error, setError] = useState(null);
  const [info, setInfo] = useState(null);

  const { userId } = useParams();
  const navigate = useNavigate();
  const form = useRef(null);
  // handle changes on input field
  const handleInputChange = (data) => (event) => {
    if (data === "name") setName(event.target.value);
    if (data === "location") setLocation(event.target.value);
    if (data === "aboutme") setAboutme(event.target.value);
    setError(null);
    setInfo(null);
  };

  const onSubmitButton = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);

    // Delete the key/value pairs
    for (var pair of formData.entries()) {
      if (pair[1].length === 0) formData.delete(pair[0]);
      //    console.log(pair[0] + ", " + pair[1]);
    }

    for (var pair of formData.entries()) {
      if (pair[1].length === 0) formData.delete(pair[0]);
      //     console.log(pair[0] + ", " + pair[1]);
    }

    // Display the key/value pairs
    // console.log("??????????????");
    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }

    updateUser(formData, userId).then((data) => {
   //   console.log("data:", data);
      if (data.data.error) {
        setError(data.data.error);
        setError(null);
      } else {
        // jwt
        //  updatejwt(data.data);
        if (data.data._id === getJwt().user._id) {
          updatejwt(data.data);
        }

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
    <form ref={form} onSubmit={onSubmitButton}>
      <div className="form-control">
        <div>
          <label htmlFor="nameInput"className="form-heading">Name</label>
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
          <label htmlFor="locationInput" className="form-heading">Location:</label>
          <br />
          <input
            type="text"
            name="location"
            id="locationInput"
            onChange={handleInputChange("location")}
            value={location}
          />
        </div>
        <div>
          <label htmlFor="AboutmeInput" className="form-heading">About me:</label>
          <br />
          <input
            type="text"
            name="aboutme"
            id="AboutmeInput"
            onChange={handleInputChange("aboutme")}
            value={aboutme}
          />
        </div>
        <div>
          <input
            type="submit"
            className="button-submit"
            name="Edit"
            value="Edit"
          />
        </div>
      </div>
    </form>
  );
}

export default UpdateProfile;
