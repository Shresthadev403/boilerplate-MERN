import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
toast.configure();

export const errNotification = (data) => {
  toast.error(data, { autoClose: 10000 });
//  console.log("notification");
};

export const infoNotification = (data) => {
  toast.success(data, { autoClose: 10000 });
//  console.log("notification");
};
