import { Navigate } from "react-router-dom";
import { signOut } from "../auth/auth";
import { infoNotification } from "../core/toast";
export const logOut = () => {
  
  signOut().then((data) => {
    // console.log("signed out:",data);
   
    setTimeout( window.location.reload(), 16000 )
    infoNotification(data.data.msg);
  
  });
};
