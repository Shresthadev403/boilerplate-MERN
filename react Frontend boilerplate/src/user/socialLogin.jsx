import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import { googleLogin, setJwt } from "../auth/auth";
import { errNotification, infoNotification } from "../core/toast";

function SocialLogin() {
  const [error, setError] = useState(false);
  const [info, setInfo] = useState(false);
  const navigate=useNavigate();
  const responseGoogle = (response) => {
  //  console.log(response);
    const user = {
      name: response.profileObj.givenName,
      email: response.profileObj.email,
      password: response.profileObj.googleId,
    };
    googleLogin(user).then((data) => {
    //  console.log(data);
      if (!data.data || (data.data && data.data.error)) {
      //  console.log(data.data);
        setError(true);
      } else {
        setJwt(data.data, () => {
          setInfo(true);
          navigate('/');
          
        });
      }
    });
  };
  useEffect(() => {
    if (info) {
      infoNotification("Login sucessful");
      
    }
    if (error) {
      errNotification("Login Failed.Please try again");
    }
  }, [info, error]);

  return (
    <div>
      <GoogleLogin
        clientId="26002781582-t2rr5qik3ht1qv6kmsa35dm081a6nn7o.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default SocialLogin;
