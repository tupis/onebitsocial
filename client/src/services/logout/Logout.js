import Api from "../Api";
import GetCookies from "../cookies/getCookie";
import removeCookie from "../cookies/removeTokenCookie";

const Logout = async () => {
  await Api.post(
    "/user/logout",
    {},
    {
      headers: {
        Authorization: `Bearer ${GetCookies(import.meta.env.VITE_API_URL)}`,
      },
    }
  ).then((res) => console.log(res.data));
  removeCookie("ID");
  removeCookie(import.meta.env.VITE_API_URL, true);
  window.location.href = "/login";
};

export default Logout;
