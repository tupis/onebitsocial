import { useLocation } from "react-router-dom";
import SetCookies from "../services/cookies/setCookie";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ScreenRedirect = () => {
  const query = useQuery();
  const id = query.get("callback");
  const toRedirect = true;

  SetCookies(import.meta.env.VITE_URL, id, toRedirect);
};

export default ScreenRedirect;
