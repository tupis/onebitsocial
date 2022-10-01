import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../screens/Dashboard";
import Login from "../screens/Login";
import Redirect from "../screens/Redirect";
import GetCookies from "../services/cookies/getCookie";
import PrivateRoute from "./Privates";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/redirect" element={<Redirect />} />
          <Route
            element={
              <PrivateRoute isLogged={GetCookies("Nekot") ? true : false} />
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
