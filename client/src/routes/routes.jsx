import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../screens/Dashboard";
import Login from "../screens/Login";
import Redirect from "../screens/Redirect";
import PrivateRoute from "./Privates";

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
          <Route path="/redirect" element={<Redirect />} />
          <Route element={<PrivateRoute isLogged={auth} />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
