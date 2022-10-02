import Cookies from "js-cookie";

const removeCookie = (cookiename, toRedirect) => {
  Cookies.remove(cookiename);

  if (toRedirect) {
    window.location.href = "/dashboard";
  }
};

export default removeCookie;
