import Api from "../Api";
import SetCookies from "../cookies/setCookie";

const useLogin = async (email, password) => {
  await Api.post("/user/login", {
    email: email,
    password: password,
  })
    .then((res) => {
      if (res.data.token) {
        userValidator(res.data.token, true);
      }
    })
    .catch((error) => console.log(error));
};

const userRegister = async (name, username, email, password) => {
  await Api.post("/user/register", {
    name: name,
    username: username,
    email: email,
    password: password,
    admin: false,
    teacher: false,
  })
    .then((res) => console.log(res))
    .catch((error) => console.log(error));

  await useLogin(email, password);
};

const userValidator = async (userToken, toRedirect) => {
  await Api.get("/user/validator", {
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

export { useLogin, userRegister, userValidator };
