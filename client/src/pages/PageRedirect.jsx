import axios from "axios";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SetCookies from "../services/cookies/setCookie";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ScreenRedirect = () => {
  const query = useQuery();
  const id = query.get("Auth");

  useEffect(() => {
    axios.get(`http://localhost:3333/github/user/${id}`).then((res) => {
      SetCookies("Nekot", res.data[0].token);
      SetCookies("ID", id);
    });
  }, []);
};

export default ScreenRedirect;
