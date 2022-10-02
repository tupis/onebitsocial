import Api from "../Api";
import userValidator from "../validator/Validator";

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

export default useLogin;
