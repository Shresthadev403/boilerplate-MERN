
import { signOut } from "../auth/auth";
import { infoNotification } from "../core/toast";
export const logOut = () => {
  
  signOut().then((data) => {
    // console.log("signed out:",data);
   
    setTimeout( window.location.reload(), 25000 )
    infoNotification(data.data.msg);
  
  });
};
