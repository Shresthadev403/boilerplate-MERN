import React, { useState,useEffect } from "react";
import { useParams ,Link} from "react-router-dom";
import { errNotification,infoNotification } from "../core/toast";
import { resetPassword } from "../auth/user";

function ResetPassword() {
  const [newpassword, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [info, setInfo] = useState(null);
  const{resetToken}=useParams();
  // handle changes on input field
  const handleInputChange = (data) => (event) => {
    if (data === "password") setPassword(event.target.value);
    setError(null);
    setInfo(null);
  };

  const onSubmitButton = (event) => {
    const user = {
      "resetPasswordLink":resetToken,
      newpassword
    };
    // console.log(event.target);
    //  console.log(user);
    //  console.log("submit");
    resetPassword(user).then((data) => {
      console.log("reset data:", data);
      if (data.errors) {
        setError(data.data.errors[0].msg);
        setError(null);
      } else if(data.data.error){
        setError(data.data.error);
        setError(null);
      }else if(data.data.errors){
        setError(data.data.errors[0].msg);
        setError(null);
      }
      else {
        // crear state after submitting form
        // setEmail("");
        // setPassword("");
      //  console.log("new password set sucessful");
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
          <label htmlFor="passwordInput" className="form-heading">New Password</label>
          <br />
          <input
            type="password"
            name="name"
            id="passwordInput"
            onChange={handleInputChange("password")}
            value={newpassword}
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
          <div>
            {
              info&&(<><p>You can sign in with your new password

              </p>
              <Link to="/signin">Sign In</Link>
              </>)
            }
          </div>
        </div>
       
      </div>
    </>
  );
}

export default ResetPassword;
