import Cookies from "js-cookie";

const GetCookies = (cookiename) => {
  return Cookies.get(cookiename);
};

export default GetCookies;
