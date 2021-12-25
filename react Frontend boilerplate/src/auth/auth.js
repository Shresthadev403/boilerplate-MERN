const axios = require("axios");

export const setJwt = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("data", JSON.stringify(data));
    next();
  }
};

export const getJwt = () => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("data"));
  } else {
    return false;
  }
};

export const signUp = (user) => {
  //   console.log(user);
  return axios
    .post("http://localhost:8000/signup", user)
    .then(function (response) {
      console.log("response:", response);
      return response;
    })
    .catch(function (error) {
      //  console.log("error:",error.response.data.errors[0]);
      return error.response.data;
    });
};

export const signIn = (user) => {
  // console.log(user);
  return axios
    .post("http://localhost:8000/signin", user)
    .then(function (response) {
      console.log("response:", response);
      return response;
    })
    .catch(function (error) {
      //  console.log("error:",error.response.data.errors[0]);
      return error.response.data;
    });
};

export const signOut = () => {
  // axios.defaults.headers.common = {'Authorization': `bearer ${getJwt().token}`}
  console.log("signout");
   


  return axios
    .get("http://localhost:8000/signout", {
      headers: {
        Authorization: `Bearer ${getJwt().token}`,
      },
    })
    .then(function (response) {
      console.log(response);
// clear token from local storage
if (typeof window !== "undefined") {
  localStorage.removeItem("data");
  
}
     
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return error.response;
    });
};
