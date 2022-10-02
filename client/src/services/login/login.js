import Api from "../Api";
import SetCookies from "../cookies/setCookie";

const useLogin = async (email, password) => {
  await Api.post("/user/login", {
    email: email,
    password: password,
  })
    .then((res) => {
      if (res.data.token) {
        Api.get("/user/validator", {
          headers: { Authorization: `Bearer ${res.data.token}` },
        })
          .then((response) => {
            if (response.data.auth) {
              SetCookies(import.meta.env.VITE_API_URL, res.data.token, true);
            }
          })
          .catch((error) => console.log(error));
      }
    })
    .catch((error) => console.log(error));
};

export default useLogin;
