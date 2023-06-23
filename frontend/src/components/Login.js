import React, { useState, useRef } from "react";//useState, useRef
import { useNavigate } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { Link } from "react-router-dom";

import AuthService from "../services/auth.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="invalid-feedback d-block">
        This field is required!
      </div>
    );
  }
};

const Login = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };


  const handleLogin = (e) => {
    e.preventDefault();
    console.log(username,password);

    setMessage("");
    setLoading(true);

    form.current.validateAll();
    fetch("https://localhost:8080/signup",{
      method:"POST",
      // crossDomain:true,
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        // "Access-Control-Allow-Orgin":"*",

      },
      body:JSON.stringify({
        username,
        password

      }),
    }).then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
  };
// constructor(props) {
//     super (props)
//     this.state={
//       username:"",
//       password:""

//     };
//     this.handleSubmit=this.handleSubmit.bind(this);
//   };
//   handleSubmit(e) {
//     e.preventDefault();
//     const {username,password}=this.state;
//     console.log(username,password);
//   }
  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form onSubmit={handleLogin} ref={form} action="/signup" method="post"> 
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <Input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-block" disabled={loading}>
              {/* {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )} */}
              <span>Login</span>
            </button>
            <Link to={"/register"} >
                Forget password
              </Link>
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          {/* <CheckButton style={{ display: "none" }} ref={checkBtn} /> */}
        </Form>
      </div>
    </div>
  );
};

export default Login;
