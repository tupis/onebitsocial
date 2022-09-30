import axios from "axios";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ScreenRedirect = () => {
  const query = useQuery();
  const id = query.get("Auth");

  useEffect(() => {
    axios.get(`http://localhost:3333/github/user/${id}`).then((res) => {
      localStorage.setItem("Nekot", res.data[0].token);
      localStorage.setItem("ID", id);
    });

    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 500);
  }, []);

  return (
    <>
      <div>Redirecting...</div>
    </>
  );
};

export default ScreenRedirect;
