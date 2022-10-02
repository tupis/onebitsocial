import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../screens/Dashboard";
import Login from "../screens/Login";
import Redirect from "../screens/Redirect";
import GetCookies from "../services/cookies/getCookie";
import PrivateRoute from "./Privates";
import Register from "../screens/Register";
import Error404 from "../screens/Error404";
import { ProviderProvider } from "../services/Context";

function App() {
  return (
    <>
      <ProviderProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/redirect" element={<Redirect />} />
            <Route path="/*" element={<Error404 />} />
            <Route
              element={
                <PrivateRoute isLogged={GetCookies("Nekot") ? true : false} />
              }
            >
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ProviderProvider>
    </>
  );
}

export default App;
