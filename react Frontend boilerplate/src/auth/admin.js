import axios from "axios";
import { getJwt } from "./auth";

export const isAdmin = () => {
  if (getJwt() && getJwt().user.role === "admin") {
    return true;
  } else {
    return false;
  }
};

export const getUsers = () => {
  return axios
    .get(`${process.env.REACT_APP_API_URI}/users`, {
      headers: {
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
