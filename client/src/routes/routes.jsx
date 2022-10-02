import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../screens/Dashboard";
import Login from "../screens/Login";
import Redirect from "../screens/Redirect";
import PrivateRoute from "./Privates";
import Register from "../screens/Register";
import Error404 from '../screens/Error404'

function App() {
  const Nekot = localStorage.getItem("Nekot");

  let auth = false;

  if (Nekot != undefined) {
    auth = true;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/redirect" element={<Redirect />} />
          <Route path="/error" element={ <Error404/>} />
          <Route element={<PrivateRoute isLogged={auth} />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
