import axios from "axios";
import { getJwt } from "./auth";
import { serialize } from "object-to-formdata";

export const getProfile = (userId) => {
  return axios
    .get(`${process.env.REACT_APP_API_URI}/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${getJwt().token}`,
      },
    })
    .then(function (response) {
      // console.log(response);
      return response;
    })
    .catch(function (error) {
      //   console.log(error);
      return error.response;
    });
};

export const updateUser = async(userdata, userId) => {
  let formData = new FormData();
  if (userdata.name) {
   await formData.append("name", userdata.name);
    console.log(formData);
  }
  if(userdata.email)
  {
    formData.append("email",userdata.email);
    console.log("email");
  }

  if(userdata.password){
    formData.append("email",userdata.password);
  }
 // console.log(userdata);
 // console.log(formData);
  return axios
    .put(`${process.env.REACT_APP_API_URI}/user/update/${userId}`, formData, {
      headers: {
        //  "Content-Type": "application/json",
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${getJwt().token}`,
      },
    })
    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return error.response;
    });
};

export const deleteUser = (userId) => {
  console.log("userdelete");
  return axios
    .delete(`${process.env.REACT_APP_API_URI}/user/delete/${userId}`, {
      headers: {
        Authorization: `Bearer ${getJwt().token}`,
      },
    })
    .then(function (response) {
      // console.log(response);
      // clear token from local storage
      // if (typeof window !== "undefined") {
      //   localStorage.removeItem("data");
      // }
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return error.response;
    });
};

export const forgetPassword = (user) => {
  console.log("forgot password");
  console.log(user);
  return axios
    .put(`${process.env.REACT_APP_API_URI}/forgetpassword`, user, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(function (response) {
      console.log(response);

      return response;
    })
    .catch(function (error) {
      console.log(error);
      return error.response;
    });
};

export const resetPassword = (user) => {
  console.log("reset password");
  console.log(user);
  return axios
    .put(`${process.env.REACT_APP_API_URI}/resetpassword`, user, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(function (response) {
      console.log(response);

      return response;
    })
    .catch(function (error) {
      console.log(error);
      return error.response;
    });
};
