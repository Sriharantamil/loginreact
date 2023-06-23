import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark1">
        <Link to={"/"} className="navbar-brand">
          TECNICO
        </Link>


          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>
          </div>

      </nav>

      <div className="container mt-3">
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />

        </Routes>
      </div>

      {/* <AuthVerify logOut={logOut}/> */}
    </div>
  );
};

export default App;
