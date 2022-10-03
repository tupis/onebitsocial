import Cookies from "js-cookie";

const SetCookies = (cookiename, name, toRedirect) => {
  Cookies.set(cookiename, name, {
    expires: 7,
    sameSite: "strict",
    path: "/",
  });

  if (toRedirect) {
    window.location.href = "/dashboard";
  }
};

export default SetCookies;
