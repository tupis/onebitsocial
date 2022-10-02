import { useState } from "react";
import Api from "../Api";
import SetCookies from "../cookies/setCookie";

const userValidator = (userToken, toRedirect) => {
  Api.get("/user/validator", {
    headers: { Authorization: `Bearer ${userToken}` },
  })
    .then((response) => {
      if (response.data.auth) {
        SetCookies("ID", response.data.id);
        SetCookies(import.meta.env.VITE_API_URL, userToken, toRedirect);
      }
    })
    .catch((error) => console.log(error));
};

export default userValidator;
