import { APIUsers } from "./apis";

export const login = async (params: any) => {
  const res = await APIUsers.post("/login", params, {}).then(
    (response) => response.data.token
  );
  return res;
};
