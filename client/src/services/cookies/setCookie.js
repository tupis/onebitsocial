import Cookies from "js-cookie";

const SetCookies = (cookiename, name) => {
  Cookies.set(cookiename, name, {
    expires: 7,
    sameSite: "strict",
    path: "/",
  });

  window.location.href = "/dashboard";
};

export default SetCookies;
