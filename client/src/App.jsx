import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

//components
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  async function isAuth() {
    try {
      const response = await fetch("http://localhost:5000/auth/is-verify", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parseRes = await response.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    isAuth();
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          Component={(props) =>
            !isAuthenticated ? (
              <Login {...props} setAuth={setAuth} />
            ) : (
              <Navigate to="/dashboard" />
            )
          }
        />
        <Route
          path="/register"
          Component={(props) =>
            !isAuthenticated ? (
              <Register {...props} setAuth={setAuth} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/dashboard"
          Component={(props) =>
            isAuthenticated ? (
              <Dashboard {...props} setAuth={setAuth} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
