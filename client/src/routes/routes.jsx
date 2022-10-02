import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../screens/Dashboard";
import Login from "../screens/Login";
import Redirect from "../screens/Redirect";
import GetCookies from "../services/cookies/getCookie";
import PrivateRoute from "./Privates";
import Register from "../screens/Register";
import Error404 from '../screens/Error404'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/redirect" element={<Redirect />} />
<<<<<<< HEAD
          <Route path="/error" element={ <Error404/>} />
          <Route element={<PrivateRoute isLogged={auth} />}>
=======
          <Route
            element={
              <PrivateRoute isLogged={GetCookies("Nekot") ? true : false} />
            }
          >
>>>>>>> df093d7c51d9457c22410bd4e218cc2531f9a7f6
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
