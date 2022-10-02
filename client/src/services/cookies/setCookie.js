import Cookies from "js-cookie";
import GetCookies from "./getCookie";

const SetCookies = (cookiename, name, toRedirect) => {
  Cookies.set(cookiename, name, {
    expires: 7,
    sameSite: "strict",
    path: "/",
  });

  if (toRedirect) {
    if (GetCookies(import.meta.env.VITE_URL)) {
      window.location.href = "/dashboard";
    }
  }
};

export default SetCookies;
