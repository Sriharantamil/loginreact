import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


import Login from "./components/Login";
import Register from "./components/Register";
import Create from "./components/Create";
import SelectFile from "./components/SelectFile";
import ProjectCreation from "./components/projectCreaction";
import PackageData from "./components/PackageData";

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
                LOGIN
              </Link>
            </li>
          </div>

      </nav>

      <div className="container mt-3">
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/selectfile" element={<SelectFile />} />
          <Route exact path="/projectcreation" element={<ProjectCreation/>} />
          <Route exact path="/Packagedata" element={<PackageData/>} />

        </Routes>
      </div>

      {/* <AuthVerify logOut={logOut}/> */}
    </div>
  );
};

export default App;
